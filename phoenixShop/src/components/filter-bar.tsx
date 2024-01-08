import React from 'react';
import FilterList from "@/components/filter-list";
import styled from "styled-components";
import FilterByPriority from "@/components/filter-by-priority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: start;
    width: 100%;
    
    justify-content: space-between;
    
    margin: 20px 0;
`;

const FilterBar = (props: FilterBarProps) => {
    return (
        <FilterContainer>
            <FilterList />
            <FilterByPriority />
        </FilterContainer>
    );
};

export default FilterBar;