import { redirect } from "next/navigation";

export default function Home() {
  // For now, redirect to the first (and only) topic
  redirect("/atlantic-slave-trade");
}
