import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Separator = () => {
    return <View style={styles.hr}></View>;
};

export default Separator;

const styles = StyleSheet.create({
    hr: {
        borderTopWidth: 1,
        borderColor: "#ccc",
        marginVertical: 10,
    },
});
