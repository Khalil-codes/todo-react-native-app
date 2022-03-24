import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";
import Colors from "../Colors";

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={() => dispatch(logoutUser())}>
            <Icon name="logout" color={Colors.darkColor} size={30} />
        </TouchableOpacity>
    );
};

export default Logout;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "transparent",
        padding: 5,
    },
});
