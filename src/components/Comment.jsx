import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/creisbarbosa.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cássio Reis</strong>
              <time  
                title='Monday 21 October 2022' 
                dateTime='2022-31-10 15:50:00'
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button 
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}