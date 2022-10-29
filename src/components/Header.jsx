import styles from './Header.module.css'

import igniteSimbol from '../assets/ignite-simbol.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={igniteSimbol} alt="ignite-logo" />
            <strong>Ignite Feed</strong>
        </header>
    );
}