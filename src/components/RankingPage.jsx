import React, { useEffect, useState } from "react";
import { fetchRanking } from "../supabaseHelpers";

// タブに表示する難易度の一覧（値とラベルのセット）
const DIFFICULTY_TABS = [
  { value: "all", label: "すべて" },
  { value: "easy", label: "簡単" },
  { value: "normal", label: "普通" },
  { value: "hard", label: "難しい" },
];

const RankingPage = ({ onBack }) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [rankingList, setRankingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadRanking = async () => {
      setLoading(true);
      const { success, data, error } = await fetchRanking(20, selectedTab);
      if (success) {
        setRankingList(data);
        setErrorMsg("");
      } else {
        setErrorMsg("ランキングの取得に失敗しました。");
        console.error(error);
      }
      setLoading(false);
    };
    loadRanking();
  }, [selectedTab]); // ← 選んでいるタブが変わるたびに、その難易度のデータを取り直す

  const difficultyLabel = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "簡単";
      case "normal":
        return "普通";
      case "hard":
        return "難しい";
      default:
        return "すべて";
    }
  };

  const formatDate = (isoString) => {
    const d = new Date(isoString);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d
      .getHours()
      .toString()
      .padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  };

  return (
    <div className="ranking-page">
      <h2 className="ranking-title">ランキング</h2>

      <div className="ranking-tabs">
        {DIFFICULTY_TABS.map((tab) => (
          <button
            key={tab.value}
            className={`ranking-tab-button ${
              selectedTab === tab.value ? "ranking-tab-active" : ""
            }`}
            onClick={() => setSelectedTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading && <p>読み込み中...</p>}
      {!loading && errorMsg && <p className="ranking-error">{errorMsg}</p>}

      {!loading && !errorMsg && (
        <>
          {rankingList.length === 0 ? (
            <p>まだ誰も登録していません。一番乗りを目指そう！</p>
          ) : (
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>名前</th>
                  <th>点数</th>
                  <th>難易度</th>
                  <th>日時</th>
                </tr>
              </thead>
              <tbody>
                {rankingList.map((entry, index) => (
                  <tr key={entry.id}>
                    <td data-label="順位">{index + 1}</td>
                    <td data-label="名前">{entry.name}</td>
                    <td data-label="点数">{entry.score} / 10</td>
                    <td data-label="難易度">{difficultyLabel(entry.difficulty)}</td>
                    <td data-label="日時">{formatDate(entry.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}

      <button className="ranking-back-button" onClick={onBack}>
        トップページに戻る
      </button>
    </div>
  );
};

export default RankingPage;
