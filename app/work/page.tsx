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

export default function WorkPage() {
    return (
      <section className="container grid items-center justify-between gap-6 pb-8 pt-6 md:py-10">
        <div className="grid grid-col items-center justify-between w-6/12 mt-10 sm:gap-10">
            <h1 className="font-bold text-2xl">
                Work History
            </h1>
        </div>
        <div className="grid grid-cols-1 items-center gap-3 sm:w-6/12 py-5 sm:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle className="w-screen">
                Aquaculture Project Manager
                <Badge className="mx-2" variant={"default"}>Current</Badge>
              </CardTitle>
              <CardDescription>
              Alune Aqua | January 2023 - Present
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
            Responsibilities:
            <ul className="ml-6 list-disc text-muted-foreground mt-2">
              <li>Overseeing the development of Asia Aquaculture Facility (AAF), a US$100 million aquaculture financing facility that aims to increase production yields in a sustainable manner, improve profitability and protect natural capital.</li>
              <li>Delivering projects under the Tropical Landscape Grant Fund, a grant fund from the Tropical Landscape Finance Facility, a partnership between ADM Capital/ADM Capital Foundation, BNP Paribas (“BNPP”), UN Environment (“UNEP”) and World Agroforestry Centre (“ICRAF”).</li>
              <li>Delivering needs for a grant from Convergence Blended Finance for a further development of AAF.</li>
              <li>Helping with strategic development of Climate Smart Shrimp, a collaborative project between Alune Aqua and Conservation International.</li>
            </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="w-screen">
                Communications Manager
              </CardTitle>
              <CardDescription>
                Alune Aqua | November 2021 - December 2022
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
            Responsibilities:
            <ul className="ml-6 list-disc text-muted-foreground mt-2">
              <li>Spearheaded the early development of AAF in its potential pilot site of Banyuwangi, East Java area.</li>
              <li>Developed relationship with shrimp farmers around Banyuwangi area and various other stakeholders, such as government, academia, and local organisations.</li>
              <li>Led the writeup of the document for a US$200,000 grant by Convergence Blended Finance for the feasibility study phase of AAF.</li>
              <li>Led a US$60,000 landscaping exercise of 130 farms in Banyuwangi funded by the Walton Foundation, as part of AAF.</li>
            </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="w-screen">
                Communications Officer
              </CardTitle>
              <CardDescription>
                Alune Aqua | September 2020 - October 2021
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
            Responsibilities:
            <ul className="ml-6 list-disc text-muted-foreground mt-2">
              <li>Managed content development for the “Closer to shrimp aquaculture” article series with The Fish Site..</li>
              <li>Developed Alune Aqua’s social media account and grew the following to more than 1k in 6 months.</li>
              <li>Led a webinar event with more than 2k registers and more than 600 participants.</li>
              <li>Led the development of an IndoGAP self-assessment platform from shrimp farmers, adopted by FAO for a pilot project in Banyuwangi, East Java..</li>
            </ul>
            </CardContent>
          </Card>
          </div>
          <div className="grid grid-cols-1 items-center sm:w-6/12 sm:grid-cols-1">
          <Link 
            href="https://www.linkedin.com/in/unies-ananda-raja-55b01013b/"
            className={buttonVariants({ variant: "default", size:"lg" })}>
              See Linkedin
              </Link>
          </div>
        </section>
    )
}