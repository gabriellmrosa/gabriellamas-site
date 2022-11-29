import Container from "./style";
import BuserLogo from "../../assets/logos/BuserLogo";
import { useContext } from "react";
import { ColorModeContext } from "../themeSwitcher/ColorModeProvider";

function ProjectsComponent() {
  const contexto = useContext(ColorModeContext);
  return (
    <Container>
      <div className="project-container">
        <div className="moldure">
          <div className="square">
            <BuserLogo />
          </div>
          <div className="description">
            <h4>Buser intern products</h4>
            <p>
              New visual for the app, adjustments on b2b dashboard and anothers
              legacy screens.
            </p>
            <a href="">See more</a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="moldure">
          <div className="square">
            <BuserLogo />
          </div>
          <div className="description">
            <h4>Buser intern products</h4>
            <p>
              New visual for the app, adjustments on b2b dashboard and anothers
              legacy screens.
            </p>
            <a href="">See more</a>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="moldure">
          <div className="square">
            <BuserLogo />
          </div>
          <div className="description">
            <h4>Buser intern products</h4>
            <p>
              New visual for the app, adjustments on b2b dashboard and anothers
              legacy screens.
            </p>
            <a href="">See more</a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProjectsComponent;
