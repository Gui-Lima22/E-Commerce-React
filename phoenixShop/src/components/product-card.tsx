import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {Space} from "@/components/space";
import {formatPrice} from "@/utils/format-price";

interface ProductCardProps {
    directory: string,
    team: string,
    price: number
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    width: 256px;

    img {
        width: 256px;
        height: 300px;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark);
        padding-top: 10px;
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 10px 15px 0 15px;
        width: 100%;
    }
`;

const ProductCard = (props: ProductCardProps) => {
    return (
        <Card>
            <Image src={"/teams/" + props.directory + "/1.jpg"} alt=""
                   width={256}
                   height={300}
                   quality={100}
            />
            <div>
                <h3>{props.team}</h3>
                <Space />
                <p>{formatPrice(props.price)}</p>
            </div>
        </Card>
    );
};

export default ProductCard;