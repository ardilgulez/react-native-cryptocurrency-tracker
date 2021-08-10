import React from "react";
import { Text, View, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

interface PropTypes {
    item: CryptocurrencyListItemType;
}

const BottomSheetContent = ({ item }: PropTypes) => (
    <View>
        <Text>{item.name}</Text>
    </View>
);

export default BottomSheetContent;
