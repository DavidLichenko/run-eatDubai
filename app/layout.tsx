import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "styles/globals.css";

import {Doppio_One} from "next/font/google"

const roboto = Doppio_One({
    subsets:["latin"],
    weight: ["400"],
    variable: '--font-roboto'
})

export const metadata: Metadata = {
    title: "Run&EatDUBAi",
    description: "OUR RACE MAKES YOU FALL IN LOVE WITH RUNNING",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/logo.png" type="image/png" />
        </head>
        <body className={`${roboto.variable} font-sans bg-background text-foreground min-h-screen`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
