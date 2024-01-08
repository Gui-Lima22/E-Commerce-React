import {useProducts} from "@/hooks/useProducts";
import React from 'react';
import ProductCard from "@/components/product-card";
import styled from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
`;

const ProductsList = () => {
    const { data } = useProducts();

    return (
        <ListContainer>
            {
                data?.map(item =>
                    <ProductCard key={item.id}
                         directory={item.directory}
                         team={item.team}
                         price={item.price}
                    />
                )
            }
        </ListContainer>
    );
};

export default ProductsList;