"use server"

import { createClient } from "@/app/utils/supabase/client";
import { Doctor } from "./types";


 export async function getDoctors(skip:number,limit:number) {
   
   
          
            const supabase = createClient();
            
           
            const { data, error } = await supabase
            .from("doctor")
            .select(`
              *,
              profiles (*),
              specialty("specialty")
           
            `).range(skip,limit)
            console.log(data)

            return { data: data as Doctor[] | null, error };
        }

        