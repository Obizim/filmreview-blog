import { Card } from "@/components/cards";

export default function Home() {
  return (
    <main className="mx-auto px-4 max-w-screen-lg">
      <div className="text-center pt-6">
        <h2 className="text-center font-medium text-4xl">Cringe Flicks</h2>
        <p className="text-lg pt-2">Random thoughts on the silver screen</p>
      </div>
      <div>
      <h2 className="font-semi-bold text-2xl pt-8 border-b border-gray-600 max-w-max">Recent Stories</h2>
      <Card />
      </div>
    </main>
  )
}
