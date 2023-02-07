const baseUrl = "http://localhost:4001/api";

export const getProducts = async () => {
    try {
        return [
            {
                id: "esfse234056520w3wsdmdobht",
                title: "ttttttt",
                artist: "aaaaaa",
                year: 2023,
                picture: "https://...",
                price: 17.99,
            },
        ];
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
