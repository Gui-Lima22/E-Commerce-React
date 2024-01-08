import React from 'react';
import styled from "styled-components";
import {useFilter} from "@/hooks/useFilter";
import {FilterTypes} from "@/types/filter-types";

interface FilterItemProps {
    selected: boolean
}

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
    
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);

    border-bottom: ${props => props.selected ? '4px solid var(--line-low)' : ''}
`;

const FilterList = () => {
    const {type, setType} = useFilter();

    const handleChangeType = (value: FilterTypes) => setType(value);

    const filterItems = [
        { label: 'Todos as ligas', value: FilterTypes.ALL },
        { label: 'Premier League', value: FilterTypes.PremierLeague },
        { label: 'La Liga', value: FilterTypes.LaLiga },
        { label: 'Série A', value: FilterTypes.SerieA },
        { label: 'Ligue 1', value: FilterTypes.Ligue1 },
        { label: 'Bundesliga', value: FilterTypes.Bundesliga },
        { label: 'Primeira Liga', value: FilterTypes.PrimeiraLiga },
        { label: 'Eredivisie', value: FilterTypes.Eredivisie },
    ]

    return (
        <List>
            {filterItems.map((item) => (
                <ListItem
                    key={item.value}
                    selected={type === item.value}
                    onClick={() => handleChangeType(item.value)}
                >
                    {item.label}
                </ListItem>
            ))}
        </List>
    );
};

export default FilterList;