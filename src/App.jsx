import React from "react";
import { Post } from "./Post";
import "./global.css";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="lorem ipsum dolor sit amet" />
          <Post author="Lucas Kepler" content="fala galera" />
        </main>
      </div>
    </div>
  );
}

export default App;
