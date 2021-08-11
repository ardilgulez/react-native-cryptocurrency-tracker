interface CryptocurrencyListItemType {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    last_updated: string;
    sparkline_in_7d: Sparkline;
}

interface Sparkline {
    price: Array<number>;
}
