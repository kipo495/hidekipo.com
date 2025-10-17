import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@radix-ui/react-navigation-menu";
import { Separator } from "@/components/ui/separator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hidekipo.com",
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
                    Home
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
          <footer className="mt-10 text-sm text-gray-500">
            © 2024 Hidekipo.com
          </footer>
        </div>
      </body>
    </html>
  );
}
