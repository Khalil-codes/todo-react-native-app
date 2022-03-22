import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Button = ({ text, disabled = false, onPress, ...restProps }) => {
    return (
        <Pressable
            style={[styles.button, disabled && styles.disabled]}
            onPress={!disabled ? onPress : () => {}}
            {...restProps}>
            <Text style={styles.btnText}>{text}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#61dafb",
        color: "#fff",
        height: 40,
        alignSelf: "flex-start",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    disabled: {
        backgroundColor: "#90E5FC",
    },
    btnText: {
        alignSelf: "center",
    },
});
