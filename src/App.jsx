import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/creisbarbosa.png",
      name: "Cássio Reis Barbosa",
      role: "Designer Engineer @Peerdustry",
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-11 22:32:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-08-11 22:32:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  );
}
