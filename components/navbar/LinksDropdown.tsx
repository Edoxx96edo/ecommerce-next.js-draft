import Link from "next/link";
import { Show, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import { links } from "@/utils/links";
import { LuAlignLeft } from "react-icons/lu";
import UserIcon from "./UserIcon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button className="flex gap-4 max-w-25" variant="outline">
            <LuAlignLeft /> <UserIcon />
          </Button>
        }
      />

      <DropdownMenuContent className="w-48" sideOffset={10}>
        <Show when="signed-in">
          <DropdownMenuGroup>
            {links.map((link) => {
              return (
                <DropdownMenuItem key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
          <SignOutButton>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </SignOutButton>
        </Show>

        <Show when="signed-out">
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </Show>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
