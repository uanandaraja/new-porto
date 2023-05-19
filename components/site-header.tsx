import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between sm:justify-between">
        <MainNav items={siteConfig.mainNav} />
        <Link
          href={siteConfig.links.contact}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "secondary" })}
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
