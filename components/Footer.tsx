import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
    return (
        <section className="z-40 w-full border-t bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-start space-x-4 text-muted-foreground text-xs">
            Unies Ananda Raja | 2023
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
        <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
        >
            <div
            className={buttonVariants({
                size: "sm",
                variant: "ghost",
            })}
            >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
            </div>
        </Link>
        <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
        >
            <div
            className={buttonVariants({
                size: "sm",
                variant: "ghost",
            })}
            >
            <Icons.twitter className="h-5 w-5 fill-current" />
            <span className="sr-only">Twitter</span>
            </div>
        </Link>
        <ThemeToggle />
        </nav>
        </div>
        </div>
        </section>
 )
}