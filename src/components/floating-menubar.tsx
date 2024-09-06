import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CopyIcon, ExternalLinkIcon, GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { GalleryVerticalEndIcon, XIcon } from "lucide-react";
import Link from "next/link";

export function FloatingMenubar() {
  return (
    <div className="">
      <Menubar className="fixed w-fit bg-background/50 text-foreground  mx-auto inset-0 mt-10 shadow-md z-50">
        <MenubarMenu>
          <Link href={"/"} passHref>
<GalleryVerticalEndIcon className="h-4 w-4 cursor-pointer text-secondary mx-3" />
</Link>
          </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent className="bg-background text-foreground">
            <MenubarItem>
              New Upload<MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Clear Image <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Twitter
                  <MenubarShortcut>
                  <XIcon className="h-4 w-4" />
                  </MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Instagram
                  <MenubarShortcut>
                    <InstagramLogoIcon className="h-4 w-4" />
                  </MenubarShortcut>
                  </MenubarItem>
                <MenubarItem>Copy Link 
                  <MenubarShortcut><CopyIcon
                  className="h-4 w-4"
                  /></MenubarShortcut>

                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem disabled>
              Not implemented yet
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>About</MenubarTrigger>
          <MenubarContent className="bg-background text-foreground">
              <MenubarItem >
                Github
<MenubarShortcut><GitHubLogoIcon className="h-4 w-4" />

</MenubarShortcut>
                </MenubarItem>
              <MenubarItem >Instagram
                <MenubarShortcut>
                  <InstagramLogoIcon className="h-4 w-4" />
                </MenubarShortcut>

              </MenubarItem>
              <MenubarItem >
                Blog
                <MenubarShortcut>
                  <ExternalLinkIcon className="h-4 w-4" />
                </MenubarShortcut>
                </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>See more like this...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <Link href={"https://github.com/amar-jay/sr-images"} passHref>
            <ExternalLinkIcon className="h-4 w-4 cursor-pointer text-secondary mr-3" />
          </Link>
          </MenubarMenu>
      </Menubar>
    </div>
  );
}
