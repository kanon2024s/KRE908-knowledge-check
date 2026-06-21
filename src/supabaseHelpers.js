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
 * @param {string} difficulty - 絞り込みたい難易度（"all" / "easy" / "normal" / "hard"）。
 *                              "all" を渡すと難易度を絞り込まず全件対象にする。
 */
export const fetchRanking = async (limit = 20, difficulty = "all") => {
  let query = supabase
    .from("rankings")
    .select("*")
    .order("score", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(limit);

  // "all" タブ以外が選ばれている場合は、その難易度のレコードだけに絞り込む
  if (difficulty !== "all") {
    query = query.eq("difficulty", difficulty);
  }

  const { data, error } = await query;

  if (error) {
    console.error("ランキング取得エラー:", error.message);
    return { success: false, error, data: [] };
  }
  return { success: true, data };
};

/**
 * プレイ1回分のログを記録する（プレイ回数カウント＋集計用）。
 * クイズが終わった（結果画面に着いた）タイミングで呼ぶことを想定している。
 * @param {object} params
 * @param {string} params.anonymousId - このブラウザの匿名ID
 * @param {number} params.score - 得点（0〜10）
 * @param {string} params.difficulty - 難易度（all / easy / normal / hard）
 * @param {string[]} params.wrongQuestions - 間違えた問題文の配列
 */
export const recordPlayLog = async ({
  anonymousId = null,
  score = null,
  difficulty = null,
  wrongQuestions = [],
} = {}) => {
  const { error } = await supabase.from("play_logs").insert([
    {
      anonymous_id: anonymousId,
      score,
      difficulty,
      // 「;」で連結して1つのテキストとして保存する（quizData.jsの選択肢の区切り方に合わせている）
      wrong_questions: wrongQuestions.join(";"),
    },
  ]);

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
