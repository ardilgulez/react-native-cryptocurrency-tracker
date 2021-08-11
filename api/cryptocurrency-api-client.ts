import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.coingecko.com/api/v3",
});

export default {
    getCryptocurrencyData: () =>
        instance({
            method: "GET",
            url: "/coins/markets",
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 10,
                page: 1,
                sparkline: true,
                price_change_percentage: "7d",
            },
        }),
};
