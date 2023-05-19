import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { List } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from "next/link"



export function Projects() {
    return(
        <div className="py-5 md:py-10">
        <p className="mb-6 text-xl font-bold sm:text-4xl md:text-4xl lg:text-4xl">
          AI Projects
        </p>
        <Separator />
        <div className="grid grid-cols-1 items-center gap-3 py-5 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold mb-4">
            Audio Transcription
            </CardTitle>
            <CardDescription className="mt-4">
              AI powered transcription tool to help Indonesian professionals and students accelerate their boring work.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img className="rounded-lg" src="/aiproject1.png"></img>
          </CardContent>
          <CardFooter className="grid grid-cols-1 gap-6 w-full">
            <Link 
            href="https://transkrip.xyz"
            className={buttonVariants({ variant: "secondary" })}>
              See Live
              </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold mb-4">
            Chat with Your Document
            </CardTitle>
            <CardDescription className="mt-4">
              Interact with your documents using GPT-4 to get quick insights and make learning way more fun.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img className="rounded-lg" src="/aiproject2.png"></img>
          </CardContent>
          <CardFooter className="grid grid-cols-1 gap-6 w-full">
            <Link 
            href="https://dokuchat.vercel.app"
            className={buttonVariants({ variant: "secondary" })}>
              See Live
              </Link>
          </CardFooter>
        </Card>        
        <Card>
          <CardHeader>
            <CardTitle className="font-bold mb-4">
            Shrimp Seed Counter
            </CardTitle>
            <CardDescription className="mt-4">
              Leveraging powerful computer vision model to supercharge shrimp counting method.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img className="rounded-lg" src="/aiproject3.png"></img>
          </CardContent>
          <CardFooter className="grid grid-cols-1 gap-6 w-full">
            <Link 
            href="https://transkrip.xyz"
            className={buttonVariants({ variant: "secondary" })}>
              See Live
              </Link>
          </CardFooter>
        </Card>
        </div>
        </div>
    )
}