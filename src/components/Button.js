import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React from "react";

const Button = ({ text, ...restProps }) => {
    return (
        <Pressable style={styles.button} {...restProps}>
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
    btnText: {
        alignSelf: "center",
    },
});
