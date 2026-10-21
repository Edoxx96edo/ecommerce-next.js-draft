"use client";
import { toast } from "@/components/ui/toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
function SignOutLink() {
  const handleLogOut = () => {
    toast.add({ description: "Logout succesful", type: "success" });
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text- leff" onClick={handleLogOut}>
        Logout
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
