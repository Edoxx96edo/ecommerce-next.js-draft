"use client";
import Link from "next/link";
import { links } from "@/utils/links";
import { LuAlignLeft } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button className="flex gap-4 max-w-25" variant="outline">
            <LuAlignLeft />
          </Button>
        }
      />
      <DropdownMenuContent className="w-48" sideOffset={10}>
        <DropdownMenuGroup>
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
