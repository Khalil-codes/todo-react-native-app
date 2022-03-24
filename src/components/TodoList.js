import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";
import { useTodos } from "../redux/store";
import { useDispatch } from "react-redux";

const TodoList = () => {
    const { todos } = useTodos();

    const renderItem = ({ item }) => <TodoItem {...item} />;
    return (
        <SafeAreaView>
            <View style={{ margin: 20, marginTop: 10 }}>
                <FlatList
                    data={todos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </SafeAreaView>
    );
};

export default TodoList;

const styles = StyleSheet.create({});
