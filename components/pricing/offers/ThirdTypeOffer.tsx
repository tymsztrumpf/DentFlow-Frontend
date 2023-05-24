import {
    ThirdOfferContainer,
    Header,
    PriceArea,
    OfferParam,
    OfferIcon,
    H1, H2, H3
} from "./ThirdTypeOffer.styles";
import {HomeButton2} from "../../../pages/homePage/HomePage.style";
import React from "react";
import { CheckCircle } from 'react-bootstrap-icons';
import {H4} from "./FirstTypeOffer.style";
import {useNavigate} from "react-router-dom";

interface OfferProps {
    header: string;
    price: string;
    currency: string;
}

export const ThirdTypeOffer: React.FC<OfferProps> = ({ price, header, currency }) => {
    const navigate = useNavigate();
    return (
        <ThirdOfferContainer>
            <Header>
                <H1>{header}</H1>
            </Header>
            <PriceArea>
                <H2>{price}</H2>
                <H3>zł/msc</H3>
            </PriceArea>
            <OfferParam>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>pełna wersja programu</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>brak opłat od liczby użytkowników</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>brak opłat od liczby komputerów</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>brak opłat za stanowisko recepcji</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>bezpłatna pomoc</H4>

                </OfferIcon>
            </OfferParam>
            <HomeButton2 onClick={() => navigate("/clinic-registration")}>
                Kup
            </HomeButton2>
        </ThirdOfferContainer>


    )
}