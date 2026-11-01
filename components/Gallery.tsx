import styled from "styled-components";
import { Artwork } from "@/types/Artwork";

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Card = styled.div`
    width: 22%;
    margin: 1%;
    padding: 1%;
    background-color: white;
    border: 3px solid #2b2118;
    border-radius: 15px;

    & h2 {
        color: #a4161a;
        font-size: calc(4px + 1.2vw);
    }

    & p {
        font-size: calc(2px + 0.8vw);
        font-style: italic;
    }
`;

export default function Gallery({artworks}: {artworks: Artwork[]}) {
    return (
        <Grid>
            {artworks.map((artwork) =>
                <Card key={artwork.id}>
                    <h2>{artwork.title}</h2>
                    <p>{artwork.dated}</p>
                    <p>{artwork.culture}</p>
                </Card>
            )}
        </Grid>
    );
}