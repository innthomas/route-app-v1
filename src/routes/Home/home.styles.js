import styled from 'styled-components';
import { homeData } from './data';




const MainContainer = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');

    & .home__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* margin: 0;
        padding: 0; */
        height: auto;
        width: 100%;

        & .home__containerImg {
            width: 50%;
            height: auto;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            & .imgHero {
                margin: 4rem 2rem;
                width: 100%;
                height: auto;
                border-radius: 2rem;
                box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
            }
        }


      

        & .home__containerText {
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 2rem 2rem;
            font-family:  'Oleo Script Swash Caps', cursive;

            & h2{
                font-size: 40px;
                font-weight:900 ;

                @media screen and (max-width:960px) {

                    font-size: 20px;
                    align-items: center;
                }
            }

            & p {
                font-size: 20px;
                font-weight: 200;
                opacity: 0.6;
                color: #000;
                line-height: 1.5;
                text-align: justify;

                @media screen and (max-width:960px) {
                    font-size: 14px;
                }
            }

            & .home-main__register{
                opacity: 0.7;
                line-height: 1rem;
            }
            & .home-main__register::before{
                content: '*';
                color: #ff0000;
                font-size: 1rem;
                margin-right: 5px;
            }



            & .home-main__button {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-self: center;
                margin: 1rem;
                border: 1px solid #000;
                background: #403D39;
                color: #fff;
                width: fit-content;
                padding:0.5rem 1rem;
                border-radius: 2rem;
                font-weight: 800;
                cursor: pointer;
                

                &:hover {
                    background: #fff;
                    color: #000;
                }
                @media screen and (max-width:960px) {
                    font-size: 14px;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    
                }
            }


        }

        @media screen and (max-width:960px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            height: auto;
            width: 100%;

            
        }
    }

`;

export default MainContainer;