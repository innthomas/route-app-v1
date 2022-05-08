import MainContainer from "../Contact/contact.styles";
import { Container } from "../../globalStyles";
import { contactData } from "./data";

export default function Contact() {
    return (
        <Container>
      <MainContainer>
        <div className="contact-container">
          <div className="contact-container__form">
            <h2 className="contact-main__header">{contactData.heading}</h2>
            <form>
              <div className="contact-form__input">
                <label htmlFor="name">Name</label><br/>
                <input type="text" id="name" />
              </div>
              <div className="contact-form__input">
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" />
              </div>
              <div className="contact-form__input">
                <label htmlFor="message">Message</label><br/>
                <textarea id="message"  rows={3} cols={50}/>
              </div>
              <div className="contact-form__button">
                <button type="submit">Send</button>
              </div>

            </form>
            </div>
            <div className="contact-container__img">
            <img className="contact-img" src={contactData.Image} alt="hero image"/>
            </div>

        </div>
      </MainContainer>
      </Container>
    );
  }