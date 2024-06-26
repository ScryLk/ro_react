import React from "react";
import { Post } from "./components/Post";
import "./global.css";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";


const posts = [{
  id: 1,
  author: {
    avatarUrl: "https://github.com/Scrylk.png",
    name: "Diego Fernandes",
    role: "CTO @Rocketseat"
  },
  content: [
    { type: "paragraph", content: "Fala galeraa 👋", },
    { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. E um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto e DoctorCare 🚀"},
    { type: "link", content: "jane.design/doctorcare"}
    ],
  publishedAt: new Date("2022-05-11 08:13:58")
  },
];
  


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
           return <Post
           key={post.id}
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt} />
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
