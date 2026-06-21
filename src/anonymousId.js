// このブラウザだけに保存される「匿名ID」を管理するファイルです。
// 同じ端末・同じブラウザで再度プレイした時に、同じIDが使われます。
// （ブラウザを変えたり、データを消したりすると別のIDになります）

const STORAGE_KEY = "kreva_quiz_anonymous_id";

// ランダムな文字列を作る簡単な関数
const generateRandomId = () => {
  return (
    Math.random().toString(36).slice(2) +
    Date.now().toString(36) +
    Math.random().toString(36).slice(2)
  );
};

/**
 * このブラウザの匿名IDを取得する。
 * まだ無ければ新しく作って保存し、それを返す。
 */
export const getAnonymousId = () => {
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = generateRandomId();
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch (error) {
    // localStorageが使えない環境（プライベートモードなど）では
    // 集計の精度は落ちるが、アプリ自体は問題なく動くようにする
    console.error("匿名IDの取得に失敗しました:", error);
    return "unknown";
  }
};
