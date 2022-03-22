import React from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { useAuth } from "../redux/store";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello {user.name}</Text>
        </View>
    );
};

export default HomeScreen;
