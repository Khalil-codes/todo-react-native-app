import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import Colors from "../Colors";

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
        backgroundColor: Colors.primaryColor,
        color: Colors.lightColor,
        height: 40,
        alignSelf: "flex-start",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    disabled: {
        backgroundColor: Colors.disabledColor,
    },
    btnText: {
        alignSelf: "center",
    },
});
