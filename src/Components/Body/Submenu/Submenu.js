import React, { useEffect, useState } from 'react';

import styles from './Submenu.module.css';

const Submenu = (props) => {
    const [currentSubmenu, setCurrentSubmenu] = useState('Information');

    useEffect(() => {
        setCurrentSubmenu(props.onFactoryClicked);
    }, [props.onFactoryClicked])


    const handleSubmenuClick = (e) => {
      props.onSubmenuClicked(e.target.innerHTML);
      setCurrentSubmenu(e.target.innerHTML);
      if (e.target.innerHTML === 'Catalogues') {
        window.scrollTo(0, window.innerHeight - 220);
      } else {
        window.scrollTo(0, 0);
      }
    };
  return (
    <div className={props.isScrolled ? props.className + ' ' + styles.scrolled : props.className}>
        <div className={styles.submenu}>
            <button onClick={handleSubmenuClick} className={(currentSubmenu === 'Information') ? `${styles.active} ${styles.submenuButton}` : `${styles.submenuButton}`}>Information</button>
            <button onClick={handleSubmenuClick} className={(currentSubmenu === 'Catalogues') ? `${styles.active} ${styles.submenuButton}` : `${styles.submenuButton}`}>Catalogues</button>
        </div>
    </div>
  )
}

export default Submenu;