import styled from 'styled-components';





const MainContainer = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');

    & .about-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        & .about-container__text{
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 2rem 2rem;
            font-family:  'Oleo Script Swash Caps', cursive;

            & h2{
                font-size: 30px;
                font-weight:900 ;

                @media screen and (max-width:960px) {
                    font-size: 20px;
                    align-items: center;
                }

            }

            & p{
                font-size: 20px;
                margin: 2rem 0;
                text-align: justify;

                @media screen and (max-width:960px) {
                    font-size: 15px;
                    align-items: center;
                }
            }
        }

      

        & .about-container__img {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media screen and (max-width: 960px) {
                display: none;
            }

            & .about-img {
                width: 100%;
                height: 100%;
                border-radius: 2rem;
                margin: 2rem 1rem;
            }
        }

    }



`;

export default MainContainer;