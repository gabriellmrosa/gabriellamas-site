/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import GabrielLamas from "../public/img/gabriel-lamas-product-designer.png";
import ArrowRightIcon from "../src/components/arrow-right-icon";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <a className={styles.linkButtonBack}>
          <ArrowRightIcon />
          <span>back</span>
        </a>
      </Link>
      <div className={styles.imagesContainer}>
        <Image
          src={GabrielLamas}
          alt="Gabriel Lamas Product Designer"
          layout="responsive"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <h1>Hello!</h1>
        <p>
          I'm a creative survivor, I say that since I was a child, life has
          always tried to put me into mechanical tasks, I never identified
          myself, I always liked to draw, paint, create stories, basically I
          like to make people have cool experiences with something that I do.
        </p>
        <p>
          In addition to working as a designer, I also do Standup Comedy in
          Brazil, besides being an actor, all this brought me a notion of
          differentiated empathy; Do you want to thrill? Want to make you laugh?
          Do you want a sense of the future? knowing how to create experiences
          is necessary for a designer, and the more empathy he has, the better.
        </p>
        <p>
          Technically today I codify my work with HTML / CSS / JS and sometimes
          with REACT, besides of course, I act as a UX designer, focused on
          researching and analyzing data to create digital interfaces.
        </p>
      </div>
    </div>
  );
}
