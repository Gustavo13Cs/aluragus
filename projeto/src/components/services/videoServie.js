import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://wyvtibzgtddgycxsnure.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5dnRpYnpndGRkZ3ljeHNudXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDU2OTEsImV4cCI6MTk4Mzc4MTY5MX0.T7Beypy9jCm7zQVdltgFbQ44kiq1qBV7_cnCBVX2_Vo"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}