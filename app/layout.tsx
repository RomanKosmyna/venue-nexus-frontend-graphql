import React from "react";
import {Roboto} from 'next/font/google';
import Header from "@/src/components/Header/Header";
import SubNavigation from "@/src/components/Navigation/SubNavigation/SubNavigation";
import Providers from "@/src/redux/providers";

import '../src/styles/globals.scss';
import MobNavWrapper from "@/src/components/Navigation/MobileNavigation/MobNavWrapper/MobNavWrapper";

export const metadata = {
    title: 'Venue Nexus',
    description: 'Find any place you want',
}

const roboto = Roboto({
    weight: '400',
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout(
    {children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <Providers>
            <div id={"next"}>
                <Header/>
                <SubNavigation/>
                <MobNavWrapper/>
                {children}
            </div>
        </Providers>
        </body>
        </html>
    )
}
