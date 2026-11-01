import React from "react";
import Link from "next/link";

const homeButtonStyles = {
    display: "inline-block",
    margin: "1%",
    padding: "8px 18px",
    backgroundColor: "#a4161a",
    color: "white",
    fontSize: "16px",
    borderRadius: "8px",
    textDecoration: "none",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
        <body style={{backgroundColor: "#f5efe6", color: "#2b2118", fontFamily: "Georgia, serif", textAlign: "center"}}>
        <nav>
            <Link href="/" style={homeButtonStyles}>Home</Link>
        </nav>
        {children}
        </body>
        </html>
    );
}
