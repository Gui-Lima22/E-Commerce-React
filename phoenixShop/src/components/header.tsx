"use client"

import styled from "styled-components";
import { Saira_Stencil_One } from 'next/font/google'
import PrimaryInputWithIcon from "@/components/primary-input";
import CartControl from "@/components/cart-control";

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 160px;
    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`;

const Title = styled.a`
    color: var(--title-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    
    cursor: pointer;
`;

const Header = (props: HeaderProps) => {
    return (
        <TagHeader>
            <Title className={sairaStencil.className} href="/">Phoenix Shop</Title>
            <div>
                <PrimaryInputWithIcon placeholder="Pesquisar..."/>
                <CartControl />
            </div>
        </TagHeader>
    )
}

export default Header;