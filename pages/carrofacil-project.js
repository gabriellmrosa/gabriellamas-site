/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import carroFacil from "../public/img/carro-facil/1-1x.png";

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
      <div className={styles.imagesContainer + " " + styles.carrofacilimage}>
        <Image
          placeholder="blur"
          src={carroFacil}
          alt="Porto Seguro Carro Fácil Screen Project by Gabriel Lamas Product Designer"
          loading="lazy"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <h1>Porto Seguro Carro Fácil!</h1>
        <p>
          Porto Seguro is a big car insurer in Brazil, but they have other
          companies like "Porto Seguro Car Easy", I was hired to give a new face
          to their product.
        </p>
        <p>
          As soon as I arrived I had to do a great research to detect all the
          fragile points of the product, numerous people involved gave me
          innumerable interviews, one of the biggest problems today in these big
          old companies is that all their systems are done with excel, there is
          still a transaction for digital systems, but very slow.
        </p>
        <p>
          Dribbling the bureaucracies and the difficulty of innovating within
          the company, I suggested only a more modern page to validate a
          concept, the product that, at that time, had an average ticket of $
          1,000, I suggested the creation of a more premium page, the results
          were great, in 4 days, 700 clicks to "sign".
        </p>
      </div>
    </div>
  );
}
