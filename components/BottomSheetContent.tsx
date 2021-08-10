import React, { useMemo } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import {
    ChartDot,
    ChartPath,
    ChartPathProvider,
    monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";

const width = Dimensions.get("window").width;

interface PropTypes {
    item: CryptocurrencyListItemType;
}

const processTrend = (trend: number) => {
    const trendNumber = trend.toFixed(2);
    return (trend > 0 ? "+" : "") + trendNumber + "%";
};

const BottomSheetContent = ({ item }: PropTypes) => {
    const points = useMemo(
        () =>
            item.sparkline_in_7d.price.map((item, index) => ({
                x: index,
                y: item,
            })),
        [item]
    );
    return (
        <View style={styles.wrapper}>
            <View style={styles.info}>
                <View style={styles.infoLeft}>
                    <View style={styles.cryptocurrency}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: item.image,
                            }}
                        />
                        <Text style={styles.grayText}>{item.name}</Text>
                    </View>
                    <Text style={styles.currentPriceText}>
                        {"$" + item.current_price.toLocaleString("en-US")}
                    </Text>
                </View>
                <View style={styles.infoRight}>
                    <Text style={styles.grayText}>7d</Text>
                    <Text
                        style={
                            item.price_change_percentage_24h > 0
                                ? styles.uptrendText
                                : styles.downtrendText
                        }
                    >
                        {processTrend(item.price_change_percentage_24h)}
                    </Text>
                </View>
            </View>
            <View style={styles.graph}>
                <ChartPathProvider
                    data={{
                        points,
                        smoothingStrategy: "bezier",
                    }}
                >
                    <ChartPath
                        height={width / 2}
                        stroke="black"
                        width={width}
                        strokeWidth={2}
                        selectedStrokeWidth={2}
                    />
                    <ChartDot style={{ backgroundColor: "black" }} />
                </ChartPathProvider>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        height: "100%",
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        height: "25%",
    },
    infoLeft: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    infoRight: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    graph: {
        height: "75%",
    },
    image: {
        height: 24,
        width: 24,
        marginRight: 8,
    },
    grayText: {
        fontSize: 16,
        color: "#a9abb1",
    },
    currentPriceText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    cryptocurrency: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    uptrendText: {
        fontSize: 16,
        color: "#34c759",
    },
    downtrendText: {
        fontSize: 16,
        color: "#ff3b30",
    },
});

export default BottomSheetContent;
