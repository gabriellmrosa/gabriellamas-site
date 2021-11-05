/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import dieselScreen1 from "../public/img/diesel-screens/1.png";
import dieselScreen2 from "../public/img/diesel-screens/2.png";

import ArrowRightIcon from "../src/components/arrow-right-icon";
import styles from "../styles/Project.module.css";

export default function AvecProject() {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <a className={styles.linkButtonBack}>
          <ArrowRightIcon />
          <span>Home</span>
        </a>
      </Link>
      <div className={styles.imagesContainer}>
        <Image
          placeholder="blur"
          src={dieselScreen1}
          alt="Diesel Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
        />
        <Image
          placeholder="blur"
          src={dieselScreen2}
          alt="Diesel Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <h1>Diesel!</h1>
        <p>
          The challenge of creating a page for Father's Day, both the design and
          the code, mobile and desktop, a nice challenge.
        </p>
        <p>
          Without many secrets, they needed a single page with some specific
          effects and that used the visual identity of the brand.
        </p>
      </div>
    </div>
  );
}
