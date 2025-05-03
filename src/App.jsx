App.jsx 
import React, { useState, useEffect } from "react";
import "./App.css";
import quizData from "./quizData";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomCommentForScore = (score) => {
  const commentsByScore = {
    10:["神の領域", "あまりに凄すぎて大人げないかも", "世界レベル", "完璧半ば腹立たしい"],
    9: ["ライセンスならA級", "東西南北欲張りちゃんと満足", "認めざるを得ない", "軽く現代人のお手本"],
    8: ["スキルを手に入れた一羽烏", "狙い外さねぇ", "ナイフの100倍勘鋭い"],
    7: ["行けるとこまでどこまでも行こう", "最後は根性ってのが本当らしいぜ", "抱いてこう大成功の絵"],
    6: ["新人社長", "ぎこちない一歩でもいい", "進化し続けていくだろう", "ワンランクアップを目指そうぜ"],
    5: ["準備怠らずに挑め", "大切なのは気の持ちよう", "次のステージに前進"],
    4: ["大量にかく汗と赤っ恥", "下げんなテンション", "おぬしスキあり"],
    3: ["なさすぎんだよ手応えが", "なかなか降りてこない言葉たち", "調子悪い日もあるがネバり抜こう"],
    2: ["daijoubu?", "意気地無くすな自分のスキル", "悩み苦しむ問題", "現実は残酷まるでプリズン"],
    1: ["ゼロが並ぶ選択ミス", "無いように感じられた成す術", "いつまでも同じじゃいられない"],
    0: ["実力ないやつ墓場行く", "ものの見事に頭が真っ白", "寝てるみたいだよほら起きて" , "その頭は正常か?"],
  };

  const comments = commentsByScore[score] || ["お疲れ様！"];
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
};

const normalize = (str) => str.trim().replace(/\s/g, "").toLowerCase();

const isCorrectAnswer = (userAnswer, correctAnswer) => {
  const normalizedUser = normalize(userAnswer);
  const correctAnswers = correctAnswer.split(";").map((ans) => normalize(ans));
  return correctAnswers.includes(normalizedUser);
};

const isMultiFieldCorrectAnswer = (userAnswers, correctAnswer) => {
  const correctParts = correctAnswer.split(";"); 
  const normalizedUser = userAnswers.map((ans) => normalize(ans));

  if (correctParts.length !== normalizedUser.length) {
    return false;
  }

  return correctParts.every((correctPart, i) => {
    const candidates = correctPart.split(",").map((ans) => normalize(ans)); // カンマで区切った候補たち
    return candidates.includes(normalizedUser[i]); // 入力が候補に含まれてたらOK
  });
};

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("all"); // ←★これを追加
  const [page, setPage] = useState("top"); // ←ここ追加！！
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(548);
  const [timerActive, setTimerActive] = useState(true);
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    shuffleArray(quizData).slice(0, 10)
  );
  const [inputValues, setInputValues] = useState([]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  useEffect(() => {
    if (!timerActive || showResult || page !== "quiz") return; // ← ここにpageチェック追加
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowResult(true);
          setPage("result");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timerActive, showResult, page]); // ← pageも依存配列に追加

  (() => {
    if (
      currentQuestion?.type === "text" ||
      currentQuestion?.type === "text-multi-field"
    ) {
      const labels = currentQuestion.fields
        ? currentQuestion.fields.split(";")
        : [];
      const savedAnswer =
        answers[currentQuestionIndex]?.yourAnswer?.split(" / ") || [];
      const initValues = Array(labels.length).fill("");
      savedAnswer.forEach((ans, i) => {
        if (i < initValues.length) initValues[i] = ans;
      });
      setInputValues(initValues);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
  if (page === "top") {
    // スクロール位置をリセット
    window.scrollTo(0, 0);

    // スクロール禁止
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }
}, [page]);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [currentQuestionIndex]);

  useEffect(() => {
  if (page === "quiz") {
    // スクロール許可
    document.body.style.overflow = 'auto';

    // ページ最上部へスクロール
    window.scrollTo(0, 0);
  }
}, [page]);

  useEffect(() => {
    // クイズ中でchoice問題の時にフォーカスを外す
    if (page === "quiz" && currentQuestion?.type === "choice") {
      // 1フレーム後にアクティブ要素をぼかす
      setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }, 0);
    }
  }, [page, currentQuestionIndex]);

  useEffect(() => {
  // 選択肢表示後にフォーカスを外す（スマホ誤タップ防止）
  setTimeout(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, 100); // 若干遅らせることで次のボタンにblurが効く
}, [currentQuestionIndex]);

useEffect(() => {
  if (page === "quiz") {
    const filtered =
      selectedDifficulty === "all"
        ? quizData
        : quizData.filter((q) => q.difficulty === selectedDifficulty);

    const shuffled = shuffleArray(filtered).slice(0, 10);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
    setTimeLeft(548);
    setTimerActive(true);
    setInputValues([]);
  }
}, [page, selectedDifficulty]); // ← selectedDifficulty を依存配列に追加

  const handleAnswer = (isCorrect, answerText) => {
    const prevAnswer = answers[currentQuestionIndex];
    const wasCorrect = prevAnswer?.isCorrect;

    setScore((prevScore) => {
      if (!prevAnswer) {
        return isCorrect ? prevScore + 1 : prevScore;
      } else {
        if (prevAnswer.isCorrect && !isCorrect) return prevScore - 1;
        if (!prevAnswer.isCorrect && isCorrect) return prevScore + 1;
        return prevScore;
      }
    });

    const newAnswer = {
      question: currentQuestion.text,
      yourAnswer: answerText,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
    };

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = newAnswer;
    setAnswers(newAnswers);

    // ここでinputValuesをリセット
    setInputValues([]);  // 次の問題に進む前にinputValuesをリセット

    // ✅ モバイル誤タップ対策として100ms待つ
    setTimeout(() => {
    if (nextIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResult(true);
      setTimerActive(false);
      setPage("result");
    }
  }, 100); // ここで100ms遅延

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResult(true);
      setTimerActive(false);
      setPage("result"); // クイズ終了後にリザルトページへ
    }
  };

 const renderChoices = (choices) =>
    choices.split(";").map((choice, index) => (
      <button
        key={index}
        tabIndex={-1} // ←これを追加
        onClick={() =>
          handleAnswer(
            choice.trim() === currentQuestion.correctAnswer.trim(),
            choice
          )
        }
        className="choice-button"
      >
        {choice}
      </button>
    ));

  const renderTextFields = () => {
    const labels = currentQuestion.fields
      ? currentQuestion.fields.split(";")
      : [];

    const handleInputChange = (index, value) => {
      const newValues = [...inputValues];
      newValues[index] = value;
      setInputValues(newValues);
    };

    const handleSubmit = () => {
      let isCorrect = false;

      if (currentQuestion.type === "text-multi-field") {
        isCorrect = isMultiFieldCorrectAnswer(
          inputValues,
          currentQuestion.correctAnswer
        );
      } else {
        isCorrect = isCorrectAnswer(
          inputValues[0] || "",
          currentQuestion.correctAnswer
        );
      }

      handleAnswer(isCorrect, inputValues.join(" / "));
    };

    return (
      <div>
        {labels.map((label, index) => (
          <div key={index}>
            {["人", "個", "色", "ver", "点", "県", "男"].includes(label) ? (
              <>
                <input
                  type="text"
                  value={inputValues[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                <span>{label}</span>
              </>
            ) : (
              <>
                <label>{label}</label>
                <input
                  type="text"
                  value={inputValues[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </>
            )}
          </div>
        ))}
        <ul className="input-note">
          <li>ローマ字は全角でも半角でもOK！</li>
          <li>スペースは気にしなくていいよ！</li>
          <li>「漢字→ひらがな・カタカナ」は不正解扱いになるから要注意！</li>
        </ul>
        <button className="submit-button" onClick={handleSubmit}>送信</button>
      </div>
    );
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
    setTimeLeft(548);
    setTimerActive(true);
    setInputValues([]);
    setShuffledQuestions(shuffleArray(quizData).slice(0, 10));
    setPage("quiz"); // ←リトライ時はトップに戻らない！
  };

  const goBackOneQuestion = () => {
    if (currentQuestionIndex > 0)
      setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const cleanAnswer = (answer) => {
    return answer || "";
  };

  return (
    <div className="quiz-container">
      {page === "top" && (
  <div className="top-page">
    <h1 className="text-5xl font-bold title1">KREVA Knowledge Check</h1>

    <div className="difficulty-select">
  <p>難易度を選んでね：</p>
  <select
    value={selectedDifficulty}
    onChange={(e) => setSelectedDifficulty(e.target.value)}
  >
    <option value="all">すべて</option>
    <option value="easy">簡単な問題はまだない</option>
    <option value="normal">普通でも難しいかも</option>
    <option value="hard">これは難しいらしい</option>
  </select>
    </div>
          <button onClick={() => setPage("quiz")}>スタート</button>
        </div>
      )}

      {page === "quiz" && (
        <>
          <div className="question-container">
            <div className="question-progress">
            <h2>
              {currentQuestionIndex === 9
                ? "Q9.8："
                : "Q." + (currentQuestionIndex + 1) + "："}
              <span
                dangerouslySetInnerHTML={{
                  __html: currentQuestion.text,
                }}
              />
            </h2>
            </div>
            <div className="timer">
              残り時間：{Math.floor(timeLeft / 60)}:
              {(timeLeft % 60).toString().padStart(2, "0")}
            </div>
            {currentQuestion.type === "choice" ? (
              <div>{renderChoices(currentQuestion.choices)}</div>
            ) : (
              <div>{renderTextFields()}</div>
            )}
          </div>

          {currentQuestionIndex > 0 && (
            <div className="back-button-container">
              <button onClick={goBackOneQuestion}>前に戻る</button>
            </div>
          )}
        </>
      )}

      {page === "result" && ( //リザルト画面は以下のコードをいじる
        <div className={result-container ${score === 10 ? "special-background" : ""}}>
          <h2 className="result-title">結果</h2>
          <p className="result-score">あなたの得点は {score} 点 / 10 点です。</p>
 
          <p className="comment-label">一言コメント</p>

          <div className="comment-box">{getRandomCommentForScore(score)}</div>
          {/* ← ここにボタン配置 */}

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
                    <strong dangerouslySetInnerHTML={{ 
                      __html: Q.${index === 9 ? "9.8" : index + 1}: ${answer.question} 
                    }} />
                  </p>
                  <p>
                    あなたの回答: <strong>{answer.yourAnswer}</strong>
                  </p>
                  <p>
                    {answer.isCorrect ? (
                      <span style={{ color: "green" }}>正解</span>
                    ) : (
                      <span style={{ color: "#cd5c5c" }}>不正解</span>
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
  <button
    className="back-button"
    onClick={() => {
      setScore(0);
      setCurrentQuestionIndex(0);
      setAnswers([]);
      setPage("top");
    }}
  >
    トップページに戻る
  </button>

  <button onClick={handleRetry} className="retry-button">
    リトライ
  </button>
</div>
       </div>
      )}
    </div>
  );
}

export default App;
