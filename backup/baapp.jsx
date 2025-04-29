{page === "result" && ( //リザルト画面は以下のコードをいじる
        <div className={`result-container ${score === 10 ? "special-background" : ""}`}>
          <h2 className="result-title">結果</h2>
          <p className="result-score">あなたの得点は {score} 点 / 10 点です。</p>
 
          <p className="comment-label">一言コメント</p>

          <div className="comment-box">{getRandomCommentForScore(score)}</div>

          <h3>各問題の結果</h3>
          <ul>
            {answers.map((answer, index) => {
              const correctAnswers = answer.correctAnswer?.split(";") || [];
              const representativeAnswer = correctAnswers[0];
              const tags = shuffledQuestions[index]?.tags || [];
              const showOnlyRepresentative = tags.includes("代表のみ");

              return (
                <li key={index}>
                  <p>
                    <strong>{`Q.${index === 9 ? "9.8" : index + 1}: ${
                      answer.question
                    }`}</strong>
                  </p>
                  <p>
                    あなたの回答: <strong>{answer.yourAnswer}</strong>
                  </p>
                  <p>
                    {answer.isCorrect ? (
                      <span style={{ color: "green" }}>正解</span>
                    ) : (
                      <span style={{ color: "red" }}>不正解</span>
                    )}
                  </p>
                  <p>
                    正しい答え:{" "}
                    <strong>
                    {tags.includes("特別代表")
      ? cleanAnswer(
          correctAnswers
            .map((part) => part.split(",")[0])
            .join(" / ")
        )
      : showOnlyRepresentative
      ? cleanAnswer(representativeAnswer)
      : cleanAnswer(correctAnswers.join(" / "))
    }
  </strong>
</p>
                </li>
              );
            })}
          </ul>
          <div className="button-group">
  <button onClick={handleRetry}>リトライ</button>
  <button onClick={() => {
    handleRetry();   // ← まずリセット！
    setPage("top");  // ← その後トップに戻る！
  }}>
    トップページに戻る
  </button>
</div>
        </div>
      )}
    </div>
  );
}

export default App;