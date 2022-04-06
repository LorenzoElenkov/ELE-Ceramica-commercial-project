import React, { useEffect, useState } from "react";
import styles from "./FactoryBody.module.css";

const FactoryBody = (props) => {
  const [clickedFactoryText, setClickedFactoryText] = useState("");
  const [clickedFactoryCatalogues, setClickedFactoryCatalogues] = useState([]);

  useEffect(() => {
    lookForFactory();
  }, [props.theFactory]);

  const lookForFactory = () => {
    for (let [key, value] of Object.entries(factoryCatalogues)) {
      if (props.theFactory.toLowerCase().includes(key)) {
        setClickedFactoryText(value[0]);
        setClickedFactoryCatalogues(value);
      }
    }
  };

  return (
    <div className={styles.factoryBody}>
      <span className={styles.mainTitle}>{props.theFactory}</span>
      <span className={styles.mainSubtext}>{clickedFactoryText}</span>
      <div className={styles.mainCatalogueBody}>
        <span className={styles.mainCatalogueTitle}>CATALOGUES</span>
        <span className={styles.mainCatalogueSubtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas,
          perferendis suscipit ut aliquid, ducimus architecto nesciunt
          reprehenderit ea voluptatibus labore eius. Voluptates maxime quae
          praesentium sint optio iste nulla!
        </span>
        <span className={styles.cataloguesContainer}>
          {clickedFactoryCatalogues.map((x) => {
            return (
              clickedFactoryCatalogues.indexOf(x) > 0 && (
                <span
                  className={styles.singleCatalogueBody}
                  key={clickedFactoryCatalogues.indexOf(x)}
                >
                  <img
                    className={styles.singleCatalogueImage}
                    src={x[2]}
                    alt=""
                  />
                  <span className={styles.singleCatalogueName}>{x[0]}</span>
                  <a
                    href={x[1]}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.singleCatalogueView}
                  >
                    View as PDF
                  </a>
                </span>
              )
            );
          })}
        </span>
      </div>
    </div>
  );
};

const factoryCatalogues = {
  porcelanosa: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "Ceramic Book 2022",
      "https://www.porcelanosa.com/recursos/catalogos/PO-Ceramic-Book-2022.pdf",
      "/PO-Ceramic-Book-2022.jpg",
    ],
    [
      "MARMI Marble Ceramic",
      "https://www.porcelanosa.com/recursos/catalogos/PO-MARMI-Marble-Ceramic.pdf",
      "/PO-MARMI-Marble-Ceramic.jpg",
    ],
    [
      "PAR-KER Color Book",
      "https://www.porcelanosa.com/recursos/catalogos/PO-PAR-KER-COLOUR-BOOK-2022.pdf",
      "/PO-PAR-KER-COLOUR-BOOK-2022.jpg",
    ],
    [
      "PAR-KER Spaces Book",
      "https://www.porcelanosa.com/recursos/catalogos/PO-PAR-KER-SPACES-BOOK-2022.pdf",
      "/PO-PAR-KER-SPACES-BOOK-2022.jpg",
    ],
    [
      "NOBU Series",
      "https://www.porcelanosa.com/recursos/catalogos/PO-Serie_NOBU-450016125.pdf",
      "/PO-Serie-NOBU-2019.jpg",
    ],
    [
      "PRADA Series",
      "https://www.porcelanosa.com/recursos/catalogos/PO-SERIE-PRADA-2021.pdf",
      "/PO-SERIE-PRADA-2021.jpg",
    ],
    [
      "SOLIDKER",
      "https://www.porcelanosa.com/recursos/catalogos/PG-SOLID-KER-ES-EN-2022.pdf",
      "/PG-SOLID-KER-ES-EN-2022.jpg",
    ],
    [
      "Technical Solutions",
      "https://www.porcelanosa.com/recursos/catalogos/PO-Technical-Solutions-2021.pdf",
      "/PO-Technical-Solutions-2021.jpg",
    ],
    [
      "Venis Projects",
      "https://www.porcelanosa.com/recursos/catalogos/VE-VENIS-Projects-2022-ES-PT.pdf",
      "/VE-VENIS-Projects-2022-ES-PT.jpg",
    ],
  ],
  noken: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "OXO | Noken",
      "https://www.porcelanosa.com/recursos/catalogos/NK-OXO-2021-EN_DE.pdf",
      "/NK-OXO-2021.jpg",
    ],
    [
      "Pure Line | Noken",
      "https://www.porcelanosa.com/recursos/catalogos/NK-PURE-LINE-2019-450003357.pdf",
      "/NK-PURE-LINE-2019.jpg",
    ],
    [
      "Round & Arquitect | Noken",
      "https://www.porcelanosa.com/recursos/catalogos/NK-Round-&-Arquitect-2019-450003356.pdf",
      "/NK-Round-&-Arquitect-2019.jpg",
    ],
    [
      "TONO Collection",
      "https://www.porcelanosa.com/recursos/catalogos/NK-TONO-EN.pdf",
      "/NK-TONO.jpg",
    ],
    [
      "Wellness Sensations",
      "https://www.porcelanosa.com/recursos/catalogos/NK-WELLNESS-SENSATIONS-2019-450005321.pdf",
      "/NK-WELLNESS-SENSATIONS-2019.jpg",
    ],
    [
      "Waterforest",
      "https://www.porcelanosa.com/recursos/catalogos/NK-WATERFOREST-EN-FR-2021.pdf",
      "/NK-WATERFOREST-2021.jpg",
    ],
    [
      "Hotels and Resorts | Noken",
      "https://www.porcelanosa.com/recursos/catalogos/NK-HOTELS-RESORTS-2020-EN-ES.pdf",
      "/NK-HOTELS-RESORTS-2020.jpg",
    ],
    [
      "I Smart",
      "https://www.porcelanosa.com/recursos/catalogos/NK-I-SMART-2021-EN-FR.pdf",
      "/NK-I-SMART-2021.jpg",
    ],
    [
      "Finish Studio",
      "https://www.porcelanosa.com/recursos/catalogos/NK-Finish_Studio_EN-DE-2022.pdf",
      "/NK-Finish_Studio-2022.jpg",
    ],
    [
      "Grifería de cocina",
      "https://www.porcelanosa.com/recursos/catalogos/NK-KITCHEN-TAPS-2021-EN.pdf",
      "/NK-KITCHEN-TAPS-2021.jpg",
    ],
  ],
  urbatek: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "XTONE Yearbook",
      "https://www.porcelanosa.com/recursos/catalogos/UB-XTONE-Yearbook-2021.pdf",
      "/UB-XTONE-Yearbook-2021.jpg",
    ],
    [
      "XTONE Technical Guide",
      "https://www.porcelanosa.com/recursos/catalogos/UB-XTONE-Yearbook-Tech-2021.pdf",
      "/UB-XTONE-Yearbook-Tech-2021.jpg",
    ],
    [
      "XTONE Bath",
      "https://www.porcelanosa.com/recursos/catalogos/UB-XTONE-Bath-2021.pdf",
      "/UB-XTONE-Bath-2021.jpg",
    ],
    [
      "XTONE Tables",
      "https://www.porcelanosa.com/recursos/catalogos/UB-XTONE-Tables-2021.pdf",
      "/UB-XTONE-Tables-2021.jpg",
    ],
    [
      "XTONE Kitchen",
      "https://www.porcelanosa.com/recursos/catalogos/UB-XTONE-Kitchen-2021.pdf",
      "/UB-XTONE-Kitchen-2021.jpg",
    ],
    [
      "Slim Collection",
      "https://www.porcelanosa.com/recursos/catalogos/UB-SLIM-COLLECTION-2021.pdf",
      "/UB-SLIM-COLLECTION-2021.jpg",
    ],
    [
      "Solo Collection",
      "https://www.porcelanosa.com/recursos/catalogos/UB-SOLO-COLLECTION-2021.pdf",
      "/UB-SOLO-COLLECTION-2021.jpg",
    ],
    [
      "Spice Collection",
      "https://www.porcelanosa.com/recursos/catalogos/XT-SPICE-2021.pdf",
      "/XT-SPICE-2021.jpg",
    ],
    [
      "Stuc Collection",
      "https://www.porcelanosa.com/recursos/catalogos/UB-STUC-2020.pdf",
      "/UB-STUC-2020.jpg",
    ],
    [
      "Altissima Stone",
      "https://www.porcelanosa.com/recursos/catalogos/UB-Altissima_v04-2021.pdf",
      "/UB-Altissima_v04-2021.jpg",
    ],
  ],
  colonial: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "Productos Naturales",
      "https://www.porcelanosa.com/recursos/catalogos/AN-GENERAL-2022.pdf",
      "/AN-GENERAL-2022.jpg",
    ],
    [
      "Skins Wallpaper",
      "https://www.porcelanosa.com/recursos/catalogos/AN-GENERAL-SKINS-WALLPAPER-2022.pdf",
      "/AN-GENERAL-SKINS-WALLPAPER-2022.jpg",
    ],
  ],
  krion: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "KRION",
      "https://www.porcelanosa.com/recursos/catalogos/SP-KRION-GEN-2016-ENFR.pdf",
      "/SP-KRION-GEN-2016.jpg",
    ],
    [
      "Fitwall",
      "https://www.porcelanosa.com/recursos/catalogos/KR-Fitwall-EN.pdf",
      "/KR-Fitwall.jpg",
    ],
    [
      "Bathroom Series | Krion",
      "https://www.porcelanosa.com/recursos/catalogos/KR-Krion-Bathroom-Series-2022-EIF.pdf",
      "/KR-Krion-Bathroom-Series-2022.jpg",
    ],
  ],
  butech: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "Professional Book",
      "https://www.porcelanosa.com/recursos/catalogos/BU-GENERAL-2022-EN.pdf",
      "/BU-GENERAL-2022.jpg",
    ],
    [
      "Herramientas",
      "https://www.porcelanosa.com/recursos/catalogos/BU-TOOLS-2022-EN.pdf",
      "/BU-TOOLS-2022.jpg",
    ],
    [
      "Fachadas ventiladas",
      "https://www.porcelanosa.com/recursos/catalogos/BU-FACHADAS-VENTILADAS-2022-EN.pdf",
      "/BU-FACHADAS-VENTILADAS-2022.jpg",
    ],
    [
      "Suelo radiante",
      "https://www.porcelanosa.com/recursos/catalogos/BU-HOMEOWNER-2022-EN.pdf",
      "/BU-HOMEOWNER-2022.jpg",
    ],
    [
      "20 MM",
      "https://www.porcelanosa.com/recursos/catalogos/BU-20-MM.pdf",
      "/BU-20-MM.jpg",
    ],
    [
      "Pool-deck",
      "https://www.porcelanosa.com/recursos/catalogos/BU-POOL-DECK-2022-EN.pdf",
      "/BU-POOL-DECK-2022.jpg",
    ],
    [
      "Shower-deck",
      "https://www.porcelanosa.com/recursos/catalogos/BU-SHOWER-DECK-2021-UK.pdf",
      "/BU-SHOWER-DECK-2021.jpg",
    ],
    [
      "Chrome Collection",
      "https://www.porcelanosa.com/recursos/catalogos/BU-Chrome_Collection-ES.pdf",
      "/BU-Chrome_Collection.jpg",
    ],
    [
      "Black Collection",
      "https://www.porcelanosa.com/recursos/catalogos/BU-Contraste_negro-ES.pdf",
      "/BU-Contraste_negro.jpg",
    ],
    [
      "Pro-skirting",
      "https://www.porcelanosa.com/recursos/catalogos/BU-PRO-SKIRTING-2021-EN.pdf",
      "/BU-PRO-SKIRTING-2021.jpg",
    ],
    [
      "PORCELANOSA Offsite | Modular systems",
      "https://www.porcelanosa.com/recursos/catalogos/BU-PORCELANOSA-Offsite-2022-EN.pdf",
      "/BU-PORCELANOSA-Offsite-2022.jpg",
    ],
    [
      "Duchas de obra",
      "https://www.porcelanosa.com/recursos/catalogos/BU-Duchas-obra-2020-ES.pdf",
      "/BU-Duchas-obra-2020.jpg",
    ],
    [
      "Concept XPS",
      "https://www.porcelanosa.com/recursos/catalogos/BU-Panel_Concept_XPS-ES.pdf",
      "/BU-Panel_Concept_XPS.jpg",
    ],
    [
      "Perfiles técnicos",
      "https://www.porcelanosa.com/recursos/catalogos/BU-Perfiles-Tecnicos-ES.pdf",
      "/BU-Perfiles-Tecnicos.jpg",
    ],
    [
      "Texture Collection",
      "https://www.porcelanosa.com/recursos/catalogos/BU-Texture-Collection-2020-EN.pdf",
      "/BU-Texture-Collection-2020.jpg",
    ],
  ],
  gamadecor: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "Bath Collections | Gamadecor",
      "https://www.porcelanosa.com/recursos/catalogos/GD-450020421-GENERAL-BATH-2021.pdf",
      "/GD-BATH-2021.jpg",
    ],
    [
      "Mobiliario de cocina",
      "https://www.porcelanosa.com/recursos/catalogos/GD-450020422-EMOTIONS-VIII-2021.pdf",
      "/GD-COCINAS-EMOTIONS-2021.jpg",
    ],
    [
      "Mobiliario de cocina",
      "https://www.porcelanosa.com/recursos/catalogos/GD-450020424-GENERAL-RESIDENCE-2021.pdf",
      "/GD-COCINAS-RESIDENCE-2021.jpg",
    ],
    [
      "Mobiliario de cocina",
      "https://www.porcelanosa.com/recursos/catalogos/GD-COCINAS-VIP-2020-450018241.pdf",
      "/GD-COCINAS-VIP-2020.jpg",
    ],
    [
      "Encimeras de cocinas",
      "https://www.porcelanosa.com/recursos/catalogos/AC-Altissima-PORCELANOSA-Kitchens.pdf",
      "/AC-Altissima-PORCELANOSA-Kitchens.jpg",
    ],
    [
      "GAMADECOR Ecologic",
      "https://www.porcelanosa.com/recursos/catalogos/GD-GAMADECOR_Ecologic.pdf",
      "/GD-GAMADECOR_Ecologic.jpg",
    ],
    [
      "Wardrobe Collection",
      "https://www.porcelanosa.com/recursos/catalogos/GD-450020420-GENERAL-WARDROBE-2021.pdf",
      "/GD-ARMARIOS-2021.jpg",
    ],
    [
      "Living Collections",
      "https://www.porcelanosa.com/recursos/catalogos/GD-450020423-GENERAL-LIVING-2021.pdf",
      "/GD-LIVING-COLLECTIONS-2021.jpg",
    ],
  ],
  info: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "Company Book",
      "https://www.porcelanosa.com/recursos/catalogos/PG-Company_Book-2020.pdf",
      "/PG-Company_Book-2020.jpg"
    ],
    [
      "Global Report",
      "https://www.porcelanosa.com/recursos/catalogos/PG-GLOBAL-REPORT-2021-EN.pdf",
      "/PG-GLOBAL-REPORT-2021.jpg"
    ],
    [
      "Porcelanosa Partners | Seleccíon exclusiva residencial",
      "",
      ""
    ],
  ],
  lifestyle: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "Lifestyle PORCELANOSA 39",
      "https://www.porcelanosa.com/recursos/lifestyle/LifeStyle39_EN.pdf",
      "/PG-Lifestyle-PORCELANOSA-n39.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 38",
      "https://www.porcelanosa.com/recursos/lifestyle/LifeStyle38_EN.pdf",
      "/PG-Lifestyle-PORCELANOSA-n38.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 37",
      "https://www.porcelanosa.com/recursos/lifestyle/LifeStyle37_EN.pdf",
      "/PG-Lifestyle-PORCELANOSA-n37.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 36",
      "https://www.porcelanosa.com/recursos/lifestyle/LifeStyle36_EN.pdf",
      "/PG-Lifestyle-PORCELANOSA-n36.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 35",
      "https://www.porcelanosa.com/recursos/lifestyle/LifeStyle35_EN.pdf",
      "/PG-Lifestyle-PORCELANOSA-n35.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 34",
      "https://www.porcelanosa.com/recursos/lifestyle/LifeStyle34_EN.pdf",
      "/PG-Lifestyle-PORCELANOSA-n34.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 33",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle33_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n33.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 32",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle32_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n32.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 31",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle31_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n31.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 30",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle30_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n30.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 29",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle29_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n29.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 28",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle28_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n28.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 27",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle27_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n27.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 26",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle26_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n26.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 25",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle25_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n25.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 24",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle24_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n24.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 23",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle23_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n23.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 22",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle22_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n22.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 21",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle21_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n21.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 20",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle20_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n20.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 19",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle19_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n19.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 18",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle18_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n18.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 17",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle17_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n17.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 16",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle16_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n16.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 15",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle15_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n15.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 14",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle14_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n14.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 13",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle13_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n13.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 12",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle12_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n12.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 11",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle11_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n11.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 10",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle10_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n10.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 9",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle9_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n09.jpg"
    ],
    [
      "Lifestyle PORCELANOSA 8",
      "https://www.porcelanosa.com/recursos/lifestyle/Lifestyle8_GB.pdf",
      "/PG-Lifestyle-PORCELANOSA-n08.jpg"
    ],
  ],
  projects: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non quasi, iure nisi, ipsum ab eos, sed laborum rerum magnam vel ad in voluptate dolor? Voluptatum qui suscipit enim corrupti minima blanditiis veritatis quia voluptas quidem. Dolor veritatis obcaecati repellat nulla saepe, magni nisi temporibus quidem accusantium cum odit asperiores corrupti eveniet quis, soluta itaque, voluptates vel! Voluptas ut rem nam dignissimos repudiandae eveniet totam pariatur accusamus ducimus tempore recusandae fugit, modi, aspernatur nihil! Nesciunt dolorem eaque in tenetur dolores, itaque delectus quia quas nobis vel beatae alias consectetur perspiciatis officia, eum quisquam quod totam sapiente impedit nisi inventore dignissimos.",
    [
      "Hotels & Resorts",
      "https://www.porcelanosa.com/recursos/catalogos/PG-HOTELS-AND-RESORTS-2021.pdf",
      "/PG-HOTELS-AND-RESORTS-2021.jpg"
    ],
    [
      "Venis Projects",
      "https://www.porcelanosa.com/recursos/catalogos/VE-VENIS-Projects-2022-ES-PT.pdf",
      "/VE-VENIS-Projects-2022-ES-PT.jpg"
    ],
    [
      "HOME Collection",
      "https://www.porcelanosa.com/recursos/catalogos/PG-HOME-Collecion-2021-EN.pdf",
      "/PG-HOME-Collecion-2021-v1.jpg"
    ],
    [
      "Architecture around the World",
      "https://www.porcelanosa.com/recursos/catalogos/PG-PROJECTS-2022.pdf",
      "/PG-PROJECTS-2022.jpg"
    ],
    [
      "Architecture around the World",
      "https://www.porcelanosa.com/recursos/catalogos/PG-PROJECTS-2016.pdf",
      "/PG-PROJECTS-2016.jpg"
    ],
    [
      "Architecture around the World",
      "https://www.porcelanosa.com/recursos/catalogos/PG-PROJECTS-2015.pdf",
      "/PG-PROJECTS-2015.jpg"
    ],
    [
      "Architecture around the World",
      "https://www.porcelanosa.com/recursos/catalogos/PG-PROJECTS-2014.pdf",
      "/PG-PROJECTS-2014.jpg"
    ],
  ],
};

export default FactoryBody;
