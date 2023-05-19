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

export function Experience() {
    return(
        <div className="grid grid-cols-1 items-center gap-2 md:gap-6 py-5 sm:grid-cols-2">
        <div className="py-5 md:py-10">
        <p className="mb-6 text-xl font-bold sm:text-4xl md:text-4xl lg:text-4xl">
          Work Experience
        </p>
        <Separator />
        <div className="grid grid-cols-1 items-center gap-3 py-5 sm:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle className="w-screen">
                Aquaculture Project Manager
                <Badge className="mx-2" variant={"default"}>Current</Badge>
              </CardTitle>
              <CardDescription>
                Alune Aqua
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
            Previous position at the company:
            <ul className="ml-6 list-disc text-muted-foreground mt-2">
              <li>Communications Manager from 2021 to 2022</li>
              <li>Content Writer from 2020 to 2021</li>
            </ul>
            </CardContent>
            <CardFooter className="gap-6">
            <Link 
            href="https://www.linkedin.com/in/unies-ananda-raja-55b01013b/"
            className={buttonVariants({ variant: "secondary" })}>
              See Linkedin
              </Link>
              <Link 
            href="/work"
            className={buttonVariants({ variant: "outline" })}>
              See Complete History
              </Link>
            </CardFooter>
          </Card>
          </div>
        </div>
        <div className="py-5 md:py-10">
        <p className="mb-6 text-xl font-bold sm:text-4xl md:text-4xl lg:text-4xl">
          Education
        </p>
        <Separator />
        <div className="grid grid-cols-1 items-center gap-3 py-5 sm:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>
                Gadjah Mada University
              </CardTitle>
              <CardDescription>
                Philosophy (BA) 2019
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
            Research interest while in university:
            <ul className="ml-6 list-disc text-muted-foreground mt-2">
              <li>Anthropocene</li>
              <li>Continental Philosophy</li>
            </ul>
            </CardContent>
            <CardFooter>
            <Link 
            href="https://scholar.google.com/citations?user=zFr_UmIAAAAJ&hl=en"
            className={buttonVariants({ variant: "secondary" })}>
              See Google Scholar
              </Link>
            </CardFooter>
          </Card>
          </div>
          </div>
          </div>
    )
}