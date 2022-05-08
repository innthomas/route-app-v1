import { Container } from "../../globalStyles";
import MainContainer from "./home.styles";
import { homeData } from "./data";
import {useEffect, useState } from "react";

export default function Home() {
  const [image, setImage] = useState(homeData.image);

  const mouseOver = () => {
    console.log("mouseOver", homeData.imageHover);
    setImage(homeData.imageHover);
  }

  useEffect(() => {
    console.log("useEffect");
    setImage(homeData.imageHover);
  }, []);



    return (
       <Container>
      <MainContainer>
        
        <div className="home__container">
          
           <div className="home__containerImg">

          <img className="imgHero" src={image} alt="hero image" onMouseOver={mouseOver}/>
           </div>
        
        <div className="home__containerText">

        <section>

              <h2 className="home-main__header">{homeData.heading}</h2>
              <p className="home-main__paragraph">
                {homeData.paragraph}
              </p>
              </section>
              <section>
              <h3 className="home-main__register">{homeData.register}</h3>
              <div className="home-main__button">{homeData.buttonText}</div>
              </section>
                      
        </div>

       

        </div>
        
       
      </MainContainer>
      </Container>
   
    );
  }