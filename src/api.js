const baseUrl = "http://localhost:4001/api";

export const getProducts = async () => {
    try {
        return [
            {
                id: "esfse234056520w3wsdmdobht",
                title: "Where the Light is",
                artist: "John Mayer",
                year: 2008,
                picture: "https://m.media-amazon.com/images/I/81lfMW3-N0L._SL1500_.jpg",
                price: 17.99,
            },
            {
                id: "esfse234056520w3wsdmdobhf",
                title: "Haus am See",
                artist: "Peter Fox",
                year: 2008,
                picture: "https://i.scdn.co/image/ab67616d0000b2730d6fa85553f18977dbe079a0",
                price: 17.99,
            }
        ];
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
