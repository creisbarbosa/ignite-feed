import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <div className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1528604891270-c2d9c3d1fc0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/maykbrito.png"/>
                <strong>Cássio Reis</strong>
                <span>Designer Engineer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </div>
    );
}