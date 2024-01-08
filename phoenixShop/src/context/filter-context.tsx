"use client"

import React, {createContext, ReactNode, useState} from "react";
import {FilterTypes} from "@/types/filter-types";
import {PriorityTypes} from "@/types/priority-types";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterTypes.ALL,
    priority: PriorityTypes.Relevance,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterTypes) => {},
    setPriority: (value: PriorityTypes) => {},
});

interface ProviderProps {
    children: ReactNode
}

export const FilterProvider = ({children}: ProviderProps) => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterTypes.ALL);
    const [priority, setPriority] = useState(PriorityTypes.Relevance);

    return (
      <FilterContext.Provider value={{ search, page, type, priority, setSearch, setPage, setType, setPriority }}>
          {children}
      </FilterContext.Provider>
    );
}