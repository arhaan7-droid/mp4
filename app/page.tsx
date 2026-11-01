"use client";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const SearchBox = styled.input`
    width: 30%;
    padding: 1%;
    margin: 2%;
    font-size: calc(6px + 1vw);
    border: 2px solid #2b2118;
    border-radius: 10px;
`;

const SearchButton = styled(Link)`
    padding: 1% 3%;
    background-color: #a4161a;
    color: white;
    border-radius: 10px;
    text-decoration: none;
`;

export default function Home() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <h1>Harvard Art Explorer</h1>
            <SearchBox placeholder="e.g. flowers" value={search} onChange={(e) => setSearch(e.target.value)} />
            <SearchButton href={`/${search}`}>Search</SearchButton>
        </div>
    );
}
