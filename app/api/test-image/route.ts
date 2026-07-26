import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

// GET /api/test-image
// 测试从 Wikimedia 下载一张图片并上传到 Vercel Blob
// 访问后会返回详细日志，方便排查问题

export async function GET() {
  const testUrl =
    "https://upload.wikimedia.org/wikipedia/commons/a/aa/Great_Zimbabwe_-_The_great_enclosure_2.jpg";

  const log: string[] = [];

  try {
    log.push(`Fetching: ${testUrl}`);

    const res = await fetch(testUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://commons.wikimedia.org/",
      },
    });

    log.push(`HTTP status: ${res.status} ${res.statusText}`);
    log.push(`Content-Type: ${res.headers.get("content-type")}`);
    log.push(
      `Content-Length: ${res.headers.get("content-length") ?? "unknown"}`
    );

    if (!res.ok) {
      return NextResponse.json({
        success: false,
        error: `Fetch failed: ${res.status}`,
        log,
      });
    }

    const buffer = await res.arrayBuffer();
    log.push(`Downloaded ${buffer.byteLength} bytes`);

    log.push("Uploading to Vercel Blob...");
    const { url } = await put("test-great-zimbabwe.jpg", buffer, {
      access: "public",
      contentType: "image/jpeg",
      addRandomSuffix: false,
    });

    log.push(`Blob URL: ${url}`);

    return NextResponse.json({ success: true, blobUrl: url, log });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    log.push(`Error: ${message}`);
    return NextResponse.json({ success: false, error: message, log });
  }
}
