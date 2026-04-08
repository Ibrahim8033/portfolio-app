import { CustomCursor } from "@/components/custom-cursor"
import { CodePortfolio } from "@/components/code-portfolio"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <CodePortfolio />
    </main>
  )
}
