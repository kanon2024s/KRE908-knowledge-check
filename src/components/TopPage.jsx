// src/components/TopPage.jsx
import React from "react";
import "./TopPage.css"; // CSSファイルをインポート

const TopPage = ({ onStartClick }) => {
  return (
    <div className="top-page-container">
      <h1>クイズアプリへようこそ</h1>
      <p>クイズを開始する準備はできましたか？</p>
      <button onClick={onStartClick}>クイズを始める</button>
    </div>
  );
};

export default TopPage;

