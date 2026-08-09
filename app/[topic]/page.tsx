import { notFound, redirect } from "next/navigation";
import { getTopicBySlug, getAllTopicSlugs } from "@/lib/db";
import TopicPage from "@/components/TopicPage";

interface PageProps {
  params: { topic: string };
}

/** Re-fetch from DB every 60 seconds at most */
export const revalidate = 60;

/** Slugs that have their own standalone pages — skip dynamic rendering */
const STANDALONE_SLUGS = ["ks3-symposium"];

export default async function TopicRoute({ params }: PageProps) {
  // Redirect standalone topics to their own pages
  if (STANDALONE_SLUGS.includes(params.topic)) {
    redirect(`/${params.topic}`);
  }

  let topic;
  try {
    topic = await getTopicBySlug(params.topic);
  } catch {
    // Database not ready — show a helpful message
    return (
      <div className="flex items-center justify-center h-screen bg-surface-0 text-gray-300">
        <div className="text-center space-y-3">
          <p className="text-lg">Database not ready</p>
          <p className="text-sm text-gray-500">
            Visit <code className="bg-surface-3 px-2 py-1 rounded">/api/seed</code> first to set up the database.
          </p>
        </div>
      </div>
    );
  }

  if (!topic) notFound();

  return <TopicPage topic={topic} />;
}

/** Pre-generate known topic pages — exclude standalone slugs */
export async function generateStaticParams() {
  try {
    const slugs = await getAllTopicSlugs();
    return slugs
      .filter((slug) => !STANDALONE_SLUGS.includes(slug))
      .map((slug) => ({ topic: slug }));
  } catch {
    return [];
  }
}
