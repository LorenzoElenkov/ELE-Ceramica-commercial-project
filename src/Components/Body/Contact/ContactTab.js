import React from 'react';

import styles from './ContactTab.module.css';

const ContactTab = (props) => {
  return (
    <div className={styles.contactContainer}>
      <span className={styles.title}>Contact us</span>
      <div className={styles.contactBody}>
        <div className={styles.sofiaBody}>
          <span className={styles.sofiaTitle}>
            SOFIA Showroom
          </span>
          <span className={styles.sofiaPhone}>
            +359 2 860 60 60 / (02 860 60 60)
          </span>
          <span className={styles.sofiaAddress}>
            boulevard "Simeonovsko Shose" 120A, 1700 Kv. Vitosha, Sofia
          </span>
          <span className={styles.sofiaAddressGoogle}>
            <a href='https://www.google.com/maps/dir//Ele+ceramica/@42.6632766,23.2967621,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40aa840672efb401:0x772d64aa53424d39!2m2!1d23.3340042!2d42.6370419' target='_blank' rel='noreferrer'>SHOW ON MAP</a>
          </span>
          <span className={styles.sofiaHours}>
            <ul className={styles.hoursList}>
              <li>Monday - Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
            <ul className={styles.hoursList}>
              <li>10 AM - 6 PM</li>
              <li>10 AM - 5 PM</li>
              <li>CLOSED</li>
            </ul>
          </span>
        </div>
        <div className={styles.varnaBody}>
          <span className={styles.varnaTitle}>
            VARNA Showroom
          </span>
          <span className={styles.varnaPhone}>
            +359 52 500 555 / (052 500 555)
          </span>
          <span className={styles.varnaAddress}>
            ul. "Nikola Y. Vaptzarov" 5, 9002 Center, Varna
          </span>
          <span className={styles.varnaAddressGoogle}>
            <a href='https://www.google.com/maps/dir//PORCELANOSA,+ul.+%22Nikola+Y.+Vaptzarov%22+5,+9002+Center,+Varna/@43.2137289,27.9337608,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40a454108678d0fb:0xa3819ee176e14052!2m2!1d27.9337889!2d43.2138212' target='_blank' rel='noreferrer'>SHOW ON MAP</a>
          </span>
          <span className={styles.varnaHours}>
          <ul className={styles.hoursList}>
              <li>Monday - Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
            <ul className={styles.hoursList}>
              <li>09:30 AM - 6 PM</li>
              <li>09:30 AM - 5 PM</li>
              <li>CLOSED</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactTab;