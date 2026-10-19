"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter } from "next/navigation";

function NavSearch() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [searchTerm, setSearchTerm] = useState(search ?? "");
  const [prevSearch, setPrevSearch] = useState(search);

  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`/products?${params.toString()}`);
  }, 500);

  if (prevSearch !== search) {
    setSearchTerm(search ?? "");
    setPrevSearch(search);
  }

  return (
    <Input
      type="text"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}

export default NavSearch;
