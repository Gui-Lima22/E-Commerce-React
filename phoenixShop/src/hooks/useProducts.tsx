import {useQuery} from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";
import {ProductsFetchResponse} from "@/types/products-response";
import {useFilter} from "@/hooks/useFilter";
import {FilterTypes} from "@/types/filter-types";
import {getLeague} from "@/utils/get-league";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetch = (query: string): AxiosPromise<ProductsFetchResponse> => axios.post(API_URL, {query});

const mountQuery = (type: FilterTypes) => {
    const filter = type !== FilterTypes.ALL ? `(filter: { league: "${getLeague(type)}" })` : "";

    return `
        query {
              allProducts ${filter} {
                id,
                team,
                price,
                directory,
                league
              }
            }
    `;
}

export const useProducts = () => {
    const { type } = useFilter();
    const query = mountQuery(type);
    const { data } = useQuery({
        queryFn: () => fetch(query),
        queryKey: ['products', type]
    });

    return {
        data: data?.data?.data?.allProducts
    }
};