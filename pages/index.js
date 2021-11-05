/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import AvecThumb from "../public/img/gabriel-lamas-product-designer-2@2x.png";
import DieselThumb from "../public/img/gabriel-lamas-product-designer-diesel@2x.png";
import CarroFacilThumb from "../public/img/gabriel-lamas-product-designer-portoseguro-carrofacil@2x.png";

import EmailIcon from "../src/components/email-icon";
import GithubIcon from "../src/components/github-icon";
import LinkedinIcon from "../src/components/linkedin-icon";
import ArrowRight from "../src/components/arrow-right-icon";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.content}>
          <h4>Gabriel Lamas</h4>
          <h1>Product Designer</h1>
          <p>Creating products and make your digital experience</p>

          <div className={styles.socialContainer}>
            <Link href="https://www.linkedin.com/in/gabriel-lamas/" passHref>
              <a target="_blank" className={styles.linkSocialButton}>
                <LinkedinIcon />
              </a>
            </Link>
            <Link href="mailto:gabrielldarts@gmail.com" passHref>
              <a
                target="_blank"
                className={styles.linkSocialButton + " " + styles.emailIcon}
              >
                <EmailIcon />
              </a>
            </Link>
            <Link href="https://github.com/gabriellamas" passHref>
              <a target="_blank" className={styles.linkSocialButton}>
                <GithubIcon />
              </a>
            </Link>
            <Link href="/about" passHref>
              <a className={styles.linkButton}>
                <span>About me</span>
                <ArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.projectContainer}>
          <figure>
            <Image src={AvecThumb} alt="Avec project Image" />
            <figcaption>
              <h2>Avec schedulling redesign</h2>
              <p>
                In this project I built a new face for the company's website and
                app and its online scheduling.
              </p>
              <Link href="/avec-project" passHref>
                <a className={styles.linkButton}>
                  <span>See more</span>
                  <ArrowRight />
                </a>
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className={styles.projectContainer}>
          <figure>
            <Image src={DieselThumb} alt="Diesel project Image" />
            <figcaption>
              <h2>
                Diesel Father's <br />
                Day page
              </h2>
              <p>
                The challenge of creating a page for Father's Day, both the
                design and the code, mobile and desktop, a nice challenge.
              </p>
              <Link href="/diesel-project" passHref>
                <a className={styles.linkButton}>
                  <span>See more</span>
                  <ArrowRight />
                </a>
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className={styles.projectContainer}>
          <figure>
            <Image src={CarroFacilThumb} alt="Avec project Image" />
            <figcaption>
              <h2>Porto Seguro Carro Fácil</h2>
              <p>
                The challenge was to create a better page than they had at the
                time, with 10% of the website's original traffic, in 4 days, my
                page generated 700 more clicks than the entire month of the
                original page.
              </p>
              <Link href="/carrofacil-project" passHref>
                <a className={styles.linkButton}>
                  <span>See more</span>
                  <ArrowRight />
                </a>
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
