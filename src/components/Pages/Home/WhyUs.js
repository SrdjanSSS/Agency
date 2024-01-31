import React, { useState } from "react";
import styles from "./WhyUs.module.css";
import perspectiveImg from "../../../images/WhyUsImg.jpg";
import dedicationImg from "../../../images/Dedication.jpg";
import partnershipImg from "../../../images/partnership.jpg";
import { motion } from "framer-motion";

const WhyUs = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [showText, setShowText] = useState(0);

  const handleButtonClick = (btn) => {
    if (btn !== activeBtn) {
      setActiveBtn(btn);
      setShowText(btn);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.hBox}>
          <h1>ZAŠTO IZABRATI NAS</h1>
          <p>
            Spoj strateškog razmišljanja i vrhunske stručnosti omogućavaju nam
            da kreiramo marketinške kampanje koje se fokusiraju na rezultate.
          </p>
        </div>
        <div className={styles.btnBox}>
          <button
            className={activeBtn === 0 ? styles.btnClicked : styles.button}
            onClick={() => handleButtonClick(0)}
          >
            PERSPEKTIVA
          </button>
          <button
            className={activeBtn === 1 ? styles.btnClicked : styles.button}
            onClick={() => handleButtonClick(1)}
          >
            POSVECENOST
          </button>
          <button
            className={activeBtn === 2 ? styles.btnClicked : styles.button}
            onClick={() => handleButtonClick(2)}
          >
            PRILAGODLJIVOST
          </button>
        </div>
        <div className={styles.textContainer}>
          {showText === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.textBox}
            >
              <div className={styles.pBox}>
                <p>
                  Dobrodošli u S2 DEV - gde strast prema programiranju sreće
                  kreativnost! Naš mlad i energičan tim iskusnih stručnjaka
                  kombinuje iskustvo s inovacijama, pružajući vam jedinstvenu
                  priliku za stvaranje digitalnih rešenja koja će se izdvojiti.
                  <ul>
                    <li>
                      Strastveni pristup: Naš tim nije samo grupa stručnjaka; to
                      je kolektiv entuzijasta s neizmernom strašću prema
                      programiranju.
                    </li>
                    <li>
                      Inovativno razmišljanje: Neprestano tragamo za novim
                      idejama i pristupima, donoseći inovacije u svaki projekat.
                    </li>
                    <li>
                      Prilagodljivost trendovima: U dinamičnom svetu web
                      developmenta, stalno se prilagođavamo najnovijim
                      trendovima kako bismo vam obezbedili savremena i
                      funkcionalna rešenja.{" "}
                    </li>
                    <li>
                      Personalizovani pristup projektima: Svaki projekat za nas
                      je prilika za stvaranje nečeg jedinstvenog, prilagođenog
                      vašim specifičnim potrebama.
                    </li>
                  </ul>
                </p>
              </div>
              <img alt="" src={perspectiveImg}></img>
            </motion.div>
          )}
          {showText === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.textBox}
            >
              <div className={styles.pBox}>
                <p>
                  U S2 DEV, svaki projekat je prilika za stvaranje nečeg
                  posebnog. Naša posvećenost ličnom angažmanu rezultira
                  kreativnim rešenjima koja ne samo da funkcionišu, već i
                  oduševljavaju. Pretvaramo vaše ideje u digitalnu stvarnost.
                  <ul>
                    <li>
                      Lični angažman: Naš tim se odlikuje visokim stepenom
                      ličnog angažmana, čime se obezbeđuje duboko razumevanje
                      vaših potreba i ciljeva.
                    </li>
                    <li>
                      Kreativna rešenja: Posvećenost ne znači samo tehničko
                      ispunjavanje zahteva, već i pružanje kreativnih rešenja
                      koja prevazilaze očekivanja.
                    </li>
                    <li>
                      Prisutnost u digitalnom prostoru: Kroz pažljivo vođene
                      projekte, ostvarujemo vašu digitalnu prisutnost s
                      preciznošću i efikasnošću.
                    </li>
                    <li>
                      Funkcionalnost i oduševljenje: Naša posvećenost garantuje
                      ne samo funkcionalnost rešenja već i izuzetno korisničko
                      iskustvo koje će oduševiti krajnjeg korisnika
                    </li>
                  </ul>
                </p>
              </div>
              <img alt="" src={dedicationImg}></img>
            </motion.div>
          )}
          {showText === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.textBox}
            >
              <div className={styles.pBox}>
                <p>
                  Naša agencija se brzo prilagođava dinamičnom digitalnom
                  pejzažu. Spremni smo za izazove i ponosni na sposobnost brze
                  adaptacije. Radimo sa klijentima širom sveta, donoseći lokalnu
                  pažnju u globalni kontekst.
                  <ul>
                    <li>
                      Fleksibilni Pristup: Naša posvećenost ličnom angažmanu
                      rezultira rešenjima koja se fleksibilno prilagođavaju
                      promenljivim zahtevima.
                    </li>
                    <li>
                      Transformacija Ideja: Naša snaga leži u transformaciji
                      vaših ideja u digitalnu stvarnost, pružajući prilagodljiva
                      i inovativna rešenja.
                    </li>
                    <li>
                      Inspirativna Rešenja: Kreativnost i posvećenost nisu samo
                      tehnički aspekti; one su snažni pokretači koji inspirišu
                      oduševljenje.
                    </li>
                    <li>
                      Unikatne Prilike: Svaki projekat je prilika za stvaranje
                      nečeg posebnog, istraživanje jedinstvenih prilika i
                      prilagođavanje izazovima.
                    </li>
                  </ul>
                </p>
              </div>
              <img alt="" src={partnershipImg}></img>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
