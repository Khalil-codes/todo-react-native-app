import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FormControl from "../components/FormControl";
import Button from "../components/Button";
import Separator from "../components/Separator";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Login</Text>
            <View style={styles.formFields}>
                <FormControl
                    label="Username"
                    placeholder="Enter You Name..."
                    value={username}
                    onChangeText={setUsername}
                />
                <FormControl
                    label="Password"
                    placeholder="Enter Strong Password..."
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Button text="Submit" />
                <Separator />
                <Text style={styles.linkText}>
                    Not a user? <Text style={styles.link}>Login Here</Text>
                </Text>
            </View>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    formContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        width: "100%",
        height: "100%",
        marginHorizontal: 10,
        paddingHorizontal: 24,
        paddingVertical: 10,
    },
    formTitle: {
        fontSize: 24,
        textTransform: "uppercase",
    },
    formFields: {
        marginVertical: 20,
        paddingVertical: 10,
    },
    linkText: {
        fontSize: 17,
    },
    link: {
        textDecorationLine: "underline",
        color: "#61dafb",
        fontWeight: "bold",
    },
});