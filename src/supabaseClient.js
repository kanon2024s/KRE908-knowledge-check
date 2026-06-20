import { createClient } from "@supabase/supabase-js";

// .env ファイルに設定した値を読み込む（Vite の場合は import.meta.env を使う）
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Supabaseの環境変数が設定されていません。.envファイルを確認してください。"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
