"use client"

import styled from "styled-components";
import Image from "next/image";
import Background from "../../public/background.jpg";

const Mask = styled.div`
    background-color: rgba(0, 0, 0, 0.6)
`;

const TitleDiv = styled.div`
    padding: 10rem 5rem`
;

const Title = styled.h1`
    display: flex;
    justify-content: flex-end !important;
    align-items: flex-start !important;
    height: 100%;

    text-transform: uppercase;
    font-family: Inter, serif !important;
    color: var(--card-background);
`;

const HomeBtn = styled.a`
    background: var(--card-background) !important;
    border-radius: 0 !important;
    font-size: 1rem !important;
    float: right;

    text-transform: uppercase;
    font-family: Inter, serif !important;
`;

export default function Home() {
    return (
        <main>
            <div className="bg-image">
                <Image src={Background} alt="background"
                       quality={100}
                       style={{
                           width: "100%",
                           height: "calc(100vh - 80px)"
                       }}
                />

                <Mask className="mask">
                    <TitleDiv>
                        <Title className="text">Sport Collection</Title>
                        <HomeBtn className="btn" href="/list">Produtos</HomeBtn>
                    </TitleDiv>
                </Mask>
            </div>
        </main>
    )
}
