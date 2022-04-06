import React, { useState } from "react";

import styles from './List.module.css';

const List = props => {

    const [clickedFactory, setClickedFactory] = useState('');


    const onClickFactory = (e) => {
        setClickedFactory(e.target.innerHTML);
        props.clicked(e.target.innerHTML);
        window.scrollTo(0,0);
        // Make Scrolling Smooth
    };

    return (
        <nav className={props.isScrolled ? styles.scrolled : null}>
            <div>
                <button className={(clickedFactory === 'PORCELANOSA') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>PORCELANOSA</button>
                <button className={(clickedFactory === 'NOKEN') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>NOKEN</button>
                <button className={(clickedFactory === 'URBATEK') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>URBATEK</button>
                <button className={(clickedFactory === "L'ANTIC COLONIAL") && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>L'ANTIC COLONIAL</button>
                <button className={(clickedFactory === 'KRION') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>KRION</button>
                <button className={(clickedFactory === 'BUTECH') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>BUTECH</button>
                <button className={(clickedFactory === 'GAMADECOR') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>GAMADECOR</button>
            </div>
            <div className={styles.projects}>
                <button className={(clickedFactory === 'Info PORCELANOSA') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>Info PORCELANOSA</button>
                <button className={(clickedFactory === 'Lifestyle') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>Lifestyle</button>
                <button className={(clickedFactory === 'Porcelanosa Grupo Projects') && props.header === '' ? `${styles.active} ${styles.projectButton}` : `${styles.projectButton}`} onClick={onClickFactory}>Porcelanosa Grupo Projects</button>
            </div>
        </nav>
    );
}

export default List;