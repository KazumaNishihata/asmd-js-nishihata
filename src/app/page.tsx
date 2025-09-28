import { Suspense } from "react";
import NewsItem from "./news-item";

export default async function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold pb-4">見出し</h1>
      <Suspense fallback={<div className="p-10">Loading...</div>}>
        <NewsItem />
      </Suspense>
    </div>
  );
}
