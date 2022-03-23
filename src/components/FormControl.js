import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Colors from "../Colors";

const FormControl = ({ label, ...restProps }) => {
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...restProps} style={styles.input} />
        </View>
    );
};

export default FormControl;

const styles = StyleSheet.create({
    formControl: {
        marginBottom: 10,
    },
    label: {
        fontSize: 17,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        padding: 10,
        borderRadius: 5,
    },
});
