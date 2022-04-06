import React, { useEffect, useState } from 'react';
import ContactTab from './Contact/ContactTab';
import Ele from './ELE/Ele';
import FactoryBody from './FactoryBody/FactoryBody';

import styles from './HomeBody.module.css';
import { Slideshow, SlideshowItem } from './Slideshow/Slideshow';
import Submenu from './Submenu/Submenu';


const HomeBody = (props) => {
    const [clickedFactory, setClickedFactory] = useState('');
    const [clickedSubmenu, setClickedSubmenu] = useState('Information');
    useEffect(() => {
        setClickedFactory(props.clicked);
        setClickedSubmenu('Information');
    }, [props.clicked]);

    const onSubmenuClickedFn = (factory) => {
        setClickedSubmenu(factory);
    };

  return (<>
    {clickedFactory === '' && <main>
        {/* {props.header === '' && 
            <Slideshow>
                <SlideshowItem>
                    <img src='homeImg.jpeg' className={styles.homeImgShow} alt=''/>
                </SlideshowItem>
                <SlideshowItem>
                    <img src='homeImg2.jpeg' className={styles.homeImgShow} alt=''/>
                </SlideshowItem>
            </Slideshow>
            } */}
        <img src='homeImg.jpeg' className={styles.homeImg} alt=''/>
        {props.header === '' && <><span className={styles.mainTitle}>Example Title</span>
            <span className={styles.mainSubtitle}>A second text goes here!</span></>}
        {props.header === 'contact-us' && <ContactTab />}
        {props.header === 'ele-ceramica' && <Ele />}
    </main>}

    {clickedFactory !== '' && <main>
        <img src='homeImg2.jpeg' className={styles.homeImg} alt=''/>
        <Submenu isScrolled={props.isScrolled} className={styles.submenuContainerMain} onSubmenuClicked={onSubmenuClickedFn} onFactoryClicked={clickedSubmenu}/>
        <FactoryBody theFactory={clickedFactory} theSubmenu={clickedSubmenu}/>
    </main>}
    </>
  )
}

export default HomeBody;