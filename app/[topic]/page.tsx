import { notFound } from "next/navigation";
import { topics } from "@/data/topics";
import TopicPage from "@/components/TopicPage";

interface PageProps {
  params: { topic: string };
}

export default function TopicRoute({ params }: PageProps) {
  const topic = topics[params.topic];
  if (!topic) notFound();

  return <TopicPage topic={topic} />;
}

/** Pre-generate all known topic pages */
export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ topic: slug }));
}
