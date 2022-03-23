import React from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../Colors";
import Separator from "../components/Separator";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useAuth, useTodos } from "../redux/store";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <View style={{ flex: 1, backgroundColor: Colors.lightColor }}>
            <View>
                <TodoForm />
            </View>
            <Separator />
            <View>
                <TodoList />
            </View>
        </View>
    );
};

export default HomeScreen;
