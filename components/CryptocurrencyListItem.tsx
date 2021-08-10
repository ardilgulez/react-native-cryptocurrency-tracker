import React from "react";

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    GestureResponderEvent,
} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginVertical: 12,
        paddingHorizontal: 16,
    },
    image: {
        height: 48,
        width: 48,
    },
    leftSideWrapper: {
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textLeftSide: {
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100%",
        marginLeft: 16,
    },
    textRightSide: {
        flexDirection: "column",
        alignItems: "flex-end",
        height: "100%",
    },
    namePriceText: {
        fontSize: 18,
        color: "#000",
    },
    tickerText: {
        fontSize: 18,
        color: "#a9abb1",
    },
    downtrendText: {
        fontSize: 18,
        color: "#ff3b30",
    },
    uptrendText: {
        fontSize: 18,
        color: "#34c759",
    },
});

interface PropTypes {
    name: string;
    ticker: string;
    price: number;
    trend: number;
    image: string;
    onPress: (event: GestureResponderEvent) => void;
}

const processTrend = (trend: number) => {
    const trendNumber = trend.toFixed(2);
    return (trend > 0 ? "+" : "") + trendNumber + "%";
};

const CryptocurrencyListItem = ({
    image,
    name,
    ticker,
    price,
    trend,
    onPress,
}: PropTypes) => (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <View style={styles.leftSideWrapper}>
            <Image
                style={styles.image}
                source={{
                    uri: image,
                }}
            />
            <View style={styles.textLeftSide}>
                <Text style={styles.namePriceText}>{name}</Text>
                <Text style={styles.tickerText}>{ticker.toUpperCase()}</Text>
            </View>
        </View>
        <View style={styles.textRightSide}>
            <Text style={styles.namePriceText}>
                {"$" + price.toLocaleString("en-US")}
            </Text>
            <Text style={trend > 0 ? styles.uptrendText : styles.downtrendText}>
                {processTrend(trend)}
            </Text>
        </View>
    </TouchableOpacity>
);

export default CryptocurrencyListItem;
