import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";

import CryptocurrencyListItem from "./components/CryptocurrencyListItem";

const items = [
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: -0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: 34678.12,
        trend: 0.01041524623452,
        image: "https://source.unsplash.com/random/48x48",
    },
];

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {items.map((item, index) => (
                    <CryptocurrencyListItem key={index} {...item} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: StatusBar.currentHeight,
        width: "100%",
    },
    scrollView: {
        width: "100%",
    },
});
