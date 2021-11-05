/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import avecScreen1 from "../public/img/avec-screens/1.png";
import avecScreen2 from "../public/img/avec-screens/2.png";
import avecScreen3 from "../public/img/avec-screens/3.png";

import avecScreen4 from "../public/img/avec-screens/4.png";
import avecScreen5 from "../public/img/avec-screens/5.png";
import avecScreen6 from "../public/img/avec-screens/6.png";

import avecScreen7 from "../public/img/avec-screens/7.png";
import avecScreen8 from "../public/img/avec-screens/8.png";
import avecScreen9 from "../public/img/avec-screens/9.png";

import avecScreen10 from "../public/img/avec-screens/10.png";
import avecScreen11 from "../public/img/avec-screens/11.png";
import avecScreen12 from "../public/img/avec-screens/12.png";

import avecScreen13 from "../public/img/avec-screens/13.png";

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
          src={avecScreen1}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen2}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen3}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen4}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen5}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen6}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen7}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen8}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen9}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen10}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen11}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen12}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={avecScreen13}
          alt="Avec Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
          placeholder="blur"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <h1>AVEC!</h1>
        <p>
          In this project I built a new face for the company's website, app and
          its online scheduling.
        </p>
        <p>
          Throughout the creation process, we were allied with the CX team to
          understand where we should create better solutions and what could be
          used.
        </p>
      </div>
    </div>
  );
}
