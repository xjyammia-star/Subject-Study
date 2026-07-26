import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

// GET /api/test-image
// 测试从 Wikimedia Special:FilePath 下载一张图片并上传到 Vercel Blob
// Special:FilePath 会302重定向到实际文件，比直接用 upload.wikimedia.org 更稳定

export async function GET() {
  // 用 Special:FilePath，这是 Wikimedia 官方推荐的稳定链接格式
  const testUrl =
    "https://commons.wikimedia.org/wiki/Special:FilePath/Great-Zimbabwe-2.jpg";

  const log: string[] = [];

  try {
    log.push(`Fetching: ${testUrl}`);

    const res = await fetch(testUrl, {
      redirect: "follow", // 跟随302重定向到实际文件
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
      },
    });

    log.push(`HTTP status: ${res.status} ${res.statusText}`);
    log.push(`Final URL: ${res.url}`);
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
