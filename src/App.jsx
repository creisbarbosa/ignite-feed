import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          <Post 
            author='Cássio Reis Barbosa' 
            content='Design layouts more efficiently by pulling text strings, images, and icons from one palette. Content Reel lets you create custom content and share it with other Figma users. Collaboration has never been easier!' 
          />
          <Post 
            author='Gabriel Frutoso' 
            content='Browse or search content to find published collections of text strings, images, and icons. Having trouble finding what you need from existing content? You can create your own text and image content by using Add.' 
          />

        </main>

      </div>
    </>
  )
}
