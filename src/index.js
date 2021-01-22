import React from "react";
import ReactDOM from "react-dom";
import 'minireset.css';
import "./index.css";
import App from "./App";

const posts = [{
  title: "Emacs + markdownで快適なリアルタイムプレビューを！(コードハイライト編)",
  date: "2020.05.02",
  url: "https://qiita.com/kkuzu/items/5d7df340a8b4d6cafafb",
}, {
  title: "一番シンプルなPWAを作ってみよう",
  date: "2019.10.14",
  url: "https://qiita.com/kkuzu/items/bb6dc999e6b44af5da2e",
}, ];


const works = [{
  title: "headlessCMS導入支援",
  roles: ["WordPress", "React"],
  imageUrl: "/work.png",
}, {
  title: "金融機関向け超高速Gateway開発",
  roles: ["Go"],
  imageUrl: "/work.png",
}, {
  title: "エネルギー会社様向けWebサービス開発",
  roles: ["React", "Node.js", "Lambda"],
  imageUrl: "/work.png",
}, ];

ReactDOM.render( <
  App works={works} posts={posts}
  / > , 
  document.getElementById("root")
);