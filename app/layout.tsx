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
    title: "Next JS SaaS Starter Template",
    description: "Next JS SaaS Starter Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </head>
        <body className={`${roboto.variable} font-sans bg-background text-foreground min-h-screen`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
