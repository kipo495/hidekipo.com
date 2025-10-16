import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@radix-ui/react-navigation-menu";


export default function Home() {
  return (
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
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}
