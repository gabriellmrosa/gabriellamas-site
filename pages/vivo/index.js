import { useCallback, useContext, useState, useRef } from "react";
import { InternLinkArrowLeft } from "../../src/elements/InternLink";
import { ColorModeContext } from "../../src/components/themeSwitcher/ColorModeProvider";
import Container from "./style";
import Image from "next/image";
import BannerBuser from "../../src/assets/images/buser-page/banner-buser.png";
import memoji from "../../src/assets/images/memoji-Image.png";
import LockIcon from "../../src/assets/icons/LockIcon";
import UnpublicTwo from "../../src/components/unpublic/unpublicTwo";
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
            This case may have unpublic legal content and it is in construction, if you are a recruiter
            contact me to receive the entire case.
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

        </form>
      </div>

      <div className="body-case">
        <InternLinkArrowLeft text="HOME" href="/" />
        <h2>App Vivo | Telefônica</h2>
        <h5>First, what is Vivo?</h5>
        <p>
          This case is under construction...
        </p>
        <a
          className="link-case-description"
          href="https://vivo.com.br"
          target="_Blank"
        >
          Vivo website
        </a>

        {access && <UnpublicTwo />}
      </div>
    </Container>
  );
}

export default BuserPage;
