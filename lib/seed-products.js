import nextEnv from "@next/env";
import { createClient } from "@supabase/supabase-js";

// 1. Carica le variabili d'ambiente
const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

import products from "./products.json";

// 2. Recupera le variabili senza '!'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// 3. Controllo di sicurezza a runtime (risolve l'errore TypeScript e previene crash)
if (!supabaseUrl || !serviceRoleKey) {
  throw new Error(
    "Variabili d'ambiente mancanti! Assicurati che NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY siano presenti in .env.local",
  );
}

// 4. Crea il client Admin
const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

export async function seedProducts() {
  try {
    const { data, error } = await supabaseAdmin
      .from("products")
      .insert(products)
      .select();

    if (error) {
      console.error("Errore durante l'inserimento:", error.message);
      return { success: false, error };
    }

    console.log(`Successo! Inseriti ${data.length} prodotti.`);
    return { success: true, data };
  } catch (err) {
    console.error("Errore inatteso:", err);
    return { success: false, error: err };
  }
}

seedProducts();
