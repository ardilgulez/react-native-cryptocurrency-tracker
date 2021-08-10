import React, { useRef, useMemo, useCallback, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    StatusBar,
    View,
    FlatList,
    Text,
} from "react-native";

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import CryptocurrencyListItem from "./components/CryptocurrencyListItem";
import BottomSheetContent from "./components/BottomSheetContent";

import data from "./assets/sample-data";

const App = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ["40%"], []);

    const [selectedItem, setSelectedItem] =
        useState<CryptocurrencyListItemType>({} as CryptocurrencyListItemType);

    // callbacks
    const handlePresentModalPress = useCallback(
        (item: CryptocurrencyListItemType) => {
            return () => {
                setSelectedItem(item);
                bottomSheetModalRef.current?.present();
            };
        },
        [selectedItem]
    );

    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    return (
        <BottomSheetModalProvider>
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.scrollView}
                    data={data as Array<CryptocurrencyListItemType>}
                    ListHeaderComponent={() => (
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Markets</Text>
                            <View style={styles.separator}></View>
                        </View>
                    )}
                    renderItem={({
                        item,
                    }: {
                        item: CryptocurrencyListItemType;
                    }) => (
                        <CryptocurrencyListItem
                            name={item.name}
                            price={item.current_price}
                            ticker={item.symbol}
                            image={item.image}
                            trend={item.price_change_percentage_24h}
                            onPress={handlePresentModalPress(item)}
                        />
                    )}
                    keyExtractor={(item) => item.symbol}
                />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetContent item={selectedItem} />
                </BottomSheetModal>
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

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

export default App;
