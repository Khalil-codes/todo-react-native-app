import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Logout = () => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={() => dispatch(logoutUser())}>
            <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
    );
};

export default Logout;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "transparent",
        padding: 5,
    },
    btnText: {
        fontSize: 15,
    },
});
