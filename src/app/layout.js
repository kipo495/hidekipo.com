import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@radix-ui/react-navigation-menu";
import { Separator } from "@/components/ui/separator";
import BackToTopButton from "@/components/backToTopButton";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "きぽ N ブログ",
  description: "Kipo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="p-3">
          <header className="text-xl font-bold">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-5">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="hover:underline">
                    <Image
                      src="/logo.png"
                      alt="Hidekipo.com Logo"
                      width={32}
                      height={32}
                    />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="hover:underline">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/blog" className="hover:underline">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </header>
          <Separator className="m-3"></Separator>
          <main>
            {children}
          </main>
          <Separator className="m-3"></Separator>
          <footer className="w-full border-t mt-10 py-4 flex items-center justify-between text-sm text-gray-500">
            <p className="ml-4">© 2025 hidekipo.com<br></br>
              Built with Next.js, Tailwind CSS, Shadcn/ui</p>
            <div className="mr-4">
              <BackToTopButton />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
