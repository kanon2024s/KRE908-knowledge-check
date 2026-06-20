import React, { useState } from "react";
import { submitRanking } from "./supabaseHelpers";

const ScoreSubmitForm = ({ score, difficulty }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error

  const handleSubmit = async () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setStatus("error");
      return;
    }
    // 名前は20文字までに制限（変なデータ対策）
    const safeName = trimmedName.slice(0, 20);

    setStatus("submitting");
    const { success } = await submitRanking(safeName, score, difficulty);
    setStatus(success ? "done" : "error");
  };

  if (status === "done") {
    return (
      <div className="score-submit-form">
        <p className="score-submit-done">ランキングに登録したよ！</p>
      </div>
    );
  }

  return (
    <div className="score-submit-form">
      <p>名前を残してランキングに登録する？</p>
      <div className="score-submit-row">
        <input
          type="text"
          value={name}
          maxLength={20}
          placeholder="名前を入力（20文字まで）"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "登録中..." : "登録する"}
        </button>
      </div>
      {status === "error" && (
        <p className="score-submit-error">
          名前を入力してください（登録に失敗した場合は時間をおいて再度お試しください）。
        </p>
      )}
    </div>
  );
};

export default ScoreSubmitForm;
