"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Gallery from "@/components/Gallery";
import { Artwork } from "@/types/Artwork";

export default function Results() {
    const { keyword } = useParams();
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        // asks our own API route, never Harvard directly
        fetch(`/api/getArt?keyword=${keyword}`)
            .then((response) => {
                if (response.status > 299) throw new Error("Request failed");
                return response.json();
            })
            .then((data) => setArtworks(data))
            .catch(() => setError(true));
    }, [keyword]);

    if (error) return <h2>Could not load artworks. Try again later.</h2>;

    return <Gallery artworks={artworks} />;
}