import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { List } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Projects } from "@/components/Projects"
import { Experience } from "@/components/Experience"

export default function IndexPage() {
  return (
    <section className="container w-full grid items-center justify-between gap-6 pb-8 pt-6 md:py-10">
      <div className="grid grid-col items-center justify-between w-full gap-10 my-10 sm:gap-10">
      <div className="flex w-full flex-col items-start">
        <h1 className="text-4xl font-bold leading-tight sm:text-3xl md:text-5xl lg:text-6xl">
          Unies Ananda Raja
        </h1>
        <div className="w-full text-lg text-muted-foreground my-4 sm:text-xl">
        <p className="text-xl text-muted-foreground mt-4 mb-4 sm:text-xl">
        Multidisciplinary professional with experience in the intersection of development and environmental sustainability.
        </p> 
        <p className="text-xl text-muted-foreground mt-4 mb-4 sm:text-xl">
        Interested in developing AI-based apps for everyone.
        </p>
        </div>
        <div className="flex gap-4">
        <Link
          href={siteConfig.links.contact}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Reach Out
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      </div>
      </div>
      <Projects />
      <Experience />
    </section>
  )
}
