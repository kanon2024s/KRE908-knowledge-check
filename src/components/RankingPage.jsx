import React, { useEffect, useState } from "react";
import { fetchRanking } from "../supabaseHelpers";

const RankingPage = ({ onBack }) => {
  const [rankingList, setRankingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadRanking = async () => {
      setLoading(true);
      const { success, data, error } = await fetchRanking(20);
      if (success) {
        setRankingList(data);
      } else {
        setErrorMsg("ランキングの取得に失敗しました。");
        console.error(error);
      }
      setLoading(false);
    };
    loadRanking();
  }, []);

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
