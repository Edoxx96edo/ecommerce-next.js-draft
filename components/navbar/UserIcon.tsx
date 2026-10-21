"use client";

import { LuUser } from "react-icons/lu";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function UserIcon() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn || !user?.imageUrl) {
    return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
  }

  const username = user.username || user.firstName || "user";

  return (
    <Image
      src={user.imageUrl}
      alt={username}
      width={24}
      height={24}
      className="w-6 h-6 rounded-full object-cover"
    />
  );
}
