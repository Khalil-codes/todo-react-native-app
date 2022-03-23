import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FormControl from "../components/FormControl";
import Button from "../components/Button";
import Separator from "../components/Separator";
import Colors from "../Colors";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Register</Text>
            <View style={styles.formFields}>
                <FormControl
                    label="Username"
                    placeholder="Enter You Name..."
                    value={username}
                    onChangeText={setUsername}
                    autoFocus
                />
                <FormControl
                    label="Email"
                    placeholder="abc@xyz.com"
                    value={email}
                    onChangeText={setEmail}
                />
                <FormControl
                    label="Password"
                    placeholder="Enter Strong Password..."
                    value={password}
                    onChangeText={setPassword}
                />
                <FormControl
                    label="Confrim Password"
                    placeholder="Enter the password you added above"
                    secureTextEntry
                    value={password2}
                    onChangeText={setPassword2}
                />
                <Button text="Submit" />
                <Separator />
                <Text style={styles.linkText}>
                    Already a user?
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate("Register")}>
                        Login Here
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default Register;

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
        paddingStart: 10,
        color: Colors.darkColor,
        fontWeight: "bold",
    },
});
