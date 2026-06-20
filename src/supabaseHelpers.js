import { supabase } from "./supabaseClient";

/**
 * ランキングにスコアを登録する
 * @param {string} name - プレイヤーの名前
 * @param {number} score - 得点（0〜10）
 * @param {string} difficulty - 難易度（all / easy / normal / hard）
 */
export const submitRanking = async (name, score, difficulty) => {
  const { data, error } = await supabase
    .from("rankings")
    .insert([{ name, score, difficulty }]);

  if (error) {
    console.error("ランキング登録エラー:", error.message);
    return { success: false, error };
  }
  return { success: true, data };
};

/**
 * ランキング上位を取得する（デフォルト上位20件、スコア高い順→新しい順）
 * @param {number} limit
 */
export const fetchRanking = async (limit = 20) => {
  const { data, error } = await supabase
    .from("rankings")
    .select("*")
    .order("score", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("ランキング取得エラー:", error.message);
    return { success: false, error, data: [] };
  }
  return { success: true, data };
};

/**
 * プレイ開始のログを1件記録する（プレイ回数カウント用）
 */
export const recordPlayLog = async () => {
  const { error } = await supabase.from("play_logs").insert([{}]);

  if (error) {
    console.error("プレイログ記録エラー:", error.message);
    return { success: false, error };
  }
  return { success: true };
};

/**
 * プレイ回数の合計を取得する（開発者用）
 */
export const fetchPlayCount = async () => {
  const { count, error } = await supabase
    .from("play_logs")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("プレイ回数取得エラー:", error.message);
    return { success: false, error, count: 0 };
  }
  return { success: true, count };
};
