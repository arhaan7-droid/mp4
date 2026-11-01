import { NextRequest, NextResponse } from "next/server";

// runs on the server when the page asks /api/getArt for artworks
export async function GET(request: NextRequest) {
    const keyword = request.nextUrl.searchParams.get("keyword");

    // the key is only used here on the server, so the browser never sees it
    const response = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${process.env.ART_API_KEY}&keyword=${keyword}&size=12&fields=id,title,dated,culture`
    );

    // bad key, daily limit reached, or API down
    if (response.status > 299) {
        return NextResponse.json({ error: "Could not fetch artworks" }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result.records);
}