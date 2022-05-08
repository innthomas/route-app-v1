import MainContainer from "../About/about.styles";
import { Container } from "../../globalStyles";
import { aboutData } from "./data";

export default function About() {
    return (
        <Container>
      <MainContainer>
       <div className="about-container">
        <div className="about-container__text">
          <h2 className="about-main__header">{aboutData.heading}</h2>
          <p className="about-main__paragraph">
          {aboutData.paragraph1}
          </p>
          <p className="about-main__paragraph">
          {aboutData.paragraph2}
          </p>
          <p className="about-main__paragraph">
          {aboutData.paragraph3}
          </p>
          </div>
          <div className="about-container__img">
          <img className="about-img" src={aboutData.image} alt="hero image"/>
          </div>
       </div>
      </MainContainer>
      </Container>
    );
  }