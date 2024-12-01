import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] overflow-hidden">
      <SiteHeader />
      <main className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tight">
          Connect with
          <br />
          <span className="bg-gradient-to-r from-[#c084fc] to-[#f43f5e] bg-clip-text text-transparent">
            Crypto Traders
          </span>
        </h1>
        <p className="mb-10 text-gray-600 max-w-md">
          A unified hub for all your crypto trading needs. Connect, learn, and trade with fellow enthusiasts.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-[#c084fc] to-[#d946ef] px-8 hover:opacity-90"
          >
            <Link href="/video-chat">
              Video Chat
            </Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-[#ec4899] to-[#f43f5e] px-8 hover:opacity-90"
          >
            <Link href="/degen-den">
              Degen Den
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

