import React, {useState} from 'react';
import styled from "styled-components";
import {MDBIcon} from "mdb-react-ui-kit";
import {useFilter} from "@/hooks/useFilter";
import {PriorityTypes} from "@/types/priority-types";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    margin-top: 2px;
    
    button {
        border: none;
        background: transparent;
        cursor: pointer;
        
        font: inherit;
        color: var(--text-dark);
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 10px;
    }
`;

const PriorityFilter = styled.ul`
    padding: 12px 16px;
    
    border-radius: 4px;
    background: white;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.10);
    
    list-style: none;
    
    li {
        color: var(--text-dark);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        
        cursor: pointer;
    }
    
    li + li {
        margin-top: 4px;
    }
`;

const FilterByPriority = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {setPriority} = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev);

    const handlePriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(false);
    }

    return (
        <Container>
            <button onClick={handleOpen}>
                Organizar por
                <MDBIcon fas icon="angle-down" />
            </button>
            {
                isOpen &&
                <PriorityFilter>
                    <li onClick={() => handlePriority(PriorityTypes.Relevance)}>Relevância</li>
                    <li onClick={() => handlePriority(PriorityTypes.Name)}>Nome</li>
                    <li onClick={() => handlePriority(PriorityTypes.LowPrice)}>Menor preço</li>
                    <li onClick={() => handlePriority(PriorityTypes.BiggestPrice)}>Maior preço</li>
                </PriorityFilter>
            }
        </Container>
    );
};

export default FilterByPriority;