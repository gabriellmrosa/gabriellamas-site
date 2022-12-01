import { useCallback, useState } from "react";
import Container from "./style";
import BannerBuser from "../../src/assets/images/banner-buser.png";
import Image from "next/image";

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
  const formTryAccess = useForm({ initialValues: { password: "" } });

  const verifyAccess = useCallback(async (event, password) => {
    event.preventDefault();
    fetch(location.origin + "/api/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <form
        onSubmit={(event) => verifyAccess(event, formTryAccess.values.password)}
      >
        <input
          type="password"
          name="password"
          value={formTryAccess.values.password}
          onChange={formTryAccess.handleChange}
          required
        />
        <button>Tentar</button>
      </form>
      <div className="body">
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
        <div className="image-container">
          <Image
            src={BannerBuser}
            alt="Banner do site da Buser no ano de 2022"
            width={"100%"}
          />
          <p>Banner used on the Buser website in the year 2022</p>
        </div>

        <h5>My job here was...</h5>
        <p>
          I was responsable to improve new and old features for many squads on
          Buser, BX (Buser Experiênce, squad who handle Buser client contact),
          Risk (squad who handle incidents may cause by travels), Partner (squad
          who handle all partners contact with Buser, partner is the company who
          has the bus in fact) and sometimes Quality (squad who look for any
          problem hepened and understood who is the cause and how to solve to do
          not happen again).
        </p>

        <p className="bold">The problem(s)</p>
        <p>
          The Risk squad need's to handle all incidents in a long flow time and
          de BX squad only need's to make de refund for passengers, individual
          or in group, refunds which may or may not have originated from an
          incident, at this moment, the BX squad only can do individual refunds
          and only when an incident has been created. Some problems with the
          current model:
        </p>

        <ul>
          <li>
            BX squad has to wait for Risk squad to finish an incident handling
            to actually send the refund, because the refund at this moment is
            linked to the conclusion of the travel_group, and if there is an
            incident created, it will only complete after all the treatment of
            it, this The process sometimes takes a long time, which generates a
            bad experience for the end customer.
          </li>
          <li>
            Bad history of actions and conversation, sometimes ticket on jira,
            sometimes whatsapp or slack, this spends a lot of time looking for
            what is missing to finish a treatment or what has already been done
            or talked about.
          </li>
          <li>Not clear actions for both squad in every incident category.</li>
          <li>Not fast way to claim partner help.</li>
          <li>The client refund is not automatic but can be.</li>
          <li>Table-dependent handling flow in google sheets</li>
        </ul>

        <p className="bold">Research and test</p>
        <p>
          At this moment we have some assumptions of solutions for some related
          problems but we know, after years of experience, we can't build
          anything before a deep research about the problem, sometimes the
          related problem shouldn't even exist, sometimes you find that if
          fixing 2 or 3 steps before the problem didn't even exist. At this
          point we design and talk a lot around what we are trying to solve to
          understand what can be removed, improved or added to the current
          workflow, and after that, build a prototype to be tested.
        </p>
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
