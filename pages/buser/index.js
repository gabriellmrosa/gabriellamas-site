import { useCallback, useContext, useState, useRef } from "react";
import { InternLinkArrowLeft } from "../../src/elements/InternLink";
import { ColorModeContext } from "../../src/components/themeSwitcher/ColorModeProvider";
import Container from "./style";
import Image from "next/image";
import BannerBuser from "../../src/assets/images/buser-page/banner-buser.png";
import memoji from "../../src/assets/images/memoji-Image.png";
import LockIcon from "../../src/assets/icons/LockIcon";
import UnpublicOne from "../../src/components/unpublic/unpublicOne";
import LoadingSvg from "../../src/elements/LoadingSvg";

function useForm(propsFromForm) {
  const [values, setValues] = useState(propsFromForm.initialValues);
  return {
    values,
    handleChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export function BuserPage(props) {
  const [access, setAccess] = useState(false);
  const [loadingAccess, seLoadingtAccess] = useState(false);
  console.log("access compponent", access);
  const passwordContainer = useRef();

  const context = useContext(ColorModeContext);
  const formTryAccess = useForm({ initialValues: { password: "" } });

  const verifyAccess = useCallback(async (event, password) => {
    event.preventDefault();
    seLoadingtAccess(true);
    fetch(location.origin + "/api/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAccess(data.access);
        seLoadingtAccess(false);
        passwordContainer.current.addEventListener("onanimationend", () =>
          console.log("cabou animacao")
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container access={`${access}`}>
      <div className="container-form" ref={passwordContainer}>
        {loadingAccess && <LoadingSvg className="loading-svg" />}
        <Image src={memoji} alt="My memoji from apple" />
        <form
          onSubmit={(event) =>
            verifyAccess(event, formTryAccess.values.password)
          }
        >
          <p>
            This case may have unpublic legal content, if you are a recruiter
            contact me to receive the password.
            <a
              className="link-social"
              href="https://www.linkedin.com/in/gabriel-lamas/"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              className="link-social"
              href="mailto:gabrielldarts@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </p>

          <label>
            <input
              type="password"
              name="password"
              placeholder=" "
              value={formTryAccess.values.password}
              onChange={formTryAccess.handleChange}
              required
            />
            <span>Password</span>
            <LockIcon theme={context.mode} />
          </label>
          <button>Reveal</button>
        </form>
      </div>

      <div className="body">
        <InternLinkArrowLeft text="HOME" href="/" />
        <h2>{props.h1Title}</h2>
        <h5>{props.t1}</h5>
        <p>{props.t2}</p>
        <a
          className="link-case-description"
          href="https://buser.com.br"
          target="_Blank"
        >
          Buser website
        </a>
        <figure>
          <Image
            src={BannerBuser}
            alt="Banner do site da Buser no ano de 2022"
          />
          <figcaption>
            Banner used on the Buser website in the year 2022
          </figcaption>
        </figure>

        {access && <UnpublicOne />}
      </div>
    </Container>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "Buser internal products",
      t1: "First, what is Buser?",
      t2: "Buser is an app, created in 2016, like a Uber but for bus. In Brazil we have many monopolysis that dificult de progress of the country and the ”bus cartel” is one of then, this makes the passport value expansive, less time options for the client and another's problems, Buser solution is making partnertship with bus travel companys and conecting all in one app, the ideia of the app is centralize all demand in one local to make more less pricing to the client and bring demand for de partners.",
    },
  };
}

export default BuserPage;
