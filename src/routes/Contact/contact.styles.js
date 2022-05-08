import styled from 'styled-components';
import { homeData } from './data';



const MainContainer = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');



& .contact-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Oleo Script Swash Caps", cursive;

    & .contact-container__form {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & .contact-form__input {
            width: 100%;
           
            margin: 2rem 1rem;

            & label {
                font-size: 20px;
                font-weight: 500;
                padding-bottom: 2rem;
            
                @media screen and (max-width:960px) {
                    font-size: 10px;
                }
            }
            & input {
                width: 70%;
                height: auto;
                margin-top: 1rem;
                border: 1px solid #000;
                border-radius: 2rem;
                padding: 0.5rem;
                font-size: 20px;
                font-weight: 500;
                /* outline: none; */
                /* box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); */
                /* transition: all 0.3s; */
            }
            & textarea {
                width: 70%;
                height: auto;
                margin-top: 1rem;
                border: 1px solid #000;
                border-radius: 2rem;
                padding: 0.5rem;
                font-size: 20px;
                font-weight: 500;
            }
        }

        & .contact-form__button button {
            width: 70%;
           
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem 1rem;
            border: 1px solid #000;
            border-radius: 2rem;
            padding: 0.5rem;
            font-size: 20px;
            font-weight: 500;
            background-color: #403D39;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                background-color: #fff;
                color: #000111;
            }

        }

    }
    & .contact-container__img {
        width: 40%;
        height: 100%;


        & img {
            width: 100%;
            height: 100%;
            margin: 2rem 1rem;
            border-radius: 2rem;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);

        }

        @media (max-width: 960px) {
            display: none;
        }
    }
}



`;

export default MainContainer;