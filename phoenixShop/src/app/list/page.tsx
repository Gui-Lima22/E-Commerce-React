"use client"

import React from 'react';
import {Space} from "@/components/space";
import FilterBar from "@/components/filter-bar";
import ProductsList from "@/components/products-list";
import styles from "@/app/page.module.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
interface ProductsProps {}

export default function List(props: ProductsProps) {
    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>
            <main className={styles.main}>
                <Space/>
                <FilterBar/>
                <ProductsList/>
            </main>
        </QueryClientProvider>
    );
};