import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async url => {
    const { data } = await axios.get(url, {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key":
                "f8b2d99ee2msh61829914ea430b7p17594ajsn63c0c352ccd5"
        }
    });
    return data;
};
