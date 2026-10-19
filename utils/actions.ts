import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
export const fetchFeaturedProducts = async () => {
  const { data: featuredProducts, error } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true)
    .limit(4);

  return { featuredProducts, error };
};

export const fetchAllProducts = async ({
  search = "",
}: { search?: string } = {}) => {
  let productsQuery = supabase.from("products").select("*");

  if (search.trim()) {
    productsQuery = productsQuery.ilike("name", `%${search.trim()}%`);
  }

  const { data: allProducts, error } = await productsQuery;

  return { allProducts, error };
};
export const fetchSingleProduct = async ({ id }: { id: string }) => {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (!product) {
    redirect("/products");
  }

  if (error) {
    throw new Error(error.message);
  }

  return product;
};
