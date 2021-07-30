import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    StatusBar,
    View,
    FlatList,
    Text,
} from "react-native";

import CryptocurrencyListItem from "./components/CryptocurrencyListItem";

import data from "./assets/sample-data";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.scrollView}
                data={data}
                ListHeaderComponent={() => (
                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText}>Markets</Text>
                        <View style={styles.separator}></View>
                    </View>
                )}
                renderItem={({ item }) => (
                    <CryptocurrencyListItem
                        name={item.name}
                        price={item.current_price}
                        ticker={item.symbol}
                        image={item.image}
                        trend={item.price_change_percentage_24h}
                    />
                )}
                keyExtractor={(item) => item.symbol}
            />
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
    titleWrapper: {
        width: "100%",
        paddingHorizontal: 16,
        marginTop: 16,
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },
    separator: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        marginVertical: 16,
    },
});
