import type {Metadata} from 'next'
import React from "react";
import {Saira} from 'next/font/google'
import Header from "@/components/header";
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import './globals.css'
import {FilterProvider} from "@/context/filter-context";

const saira = Saira({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Phoenix Shop',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={saira.className} style={{ "backgroundColor": "var(--background-color)" }}>
                <FilterProvider>
                    <Header />
                    {children}
                </FilterProvider>
            </body>
        </html>
    )
}
