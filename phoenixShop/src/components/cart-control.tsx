import React from 'react';
import {MDBIcon} from "mdb-react-ui-kit";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import styled from "styled-components";

const CartCount = styled.span`
    border-radius: 100%;
    padding: 1px 6px;
    font-size: 10px;
    
    background-color: var(--delete-color);
    color: white;
    
    position: absolute;
    right: -15px;
    top: 55%;
`;

const Container = styled.div`
    position: relative;
`;

const CartControl = () => {
    const { value } = useLocalStorage('cart');

    return (
        <Container>
            <MDBIcon fas icon="shopping-cart" size="xl"/>
            { value.length > 0 && <CartCount>{value.length}</CartCount> }
        </Container>
    );
};

export default CartControl;