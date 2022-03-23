import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";
import { useTodos } from "../redux/store";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/todo/todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos } = useTodos();
    const handleSwipeRight = (id) => {
        dispatch(deleteTodo(id));
    };
    const handleSwipeLeft = (id) => {
        dispatch(completeTodo(id));
    };
    const renderItem = ({ item }) => (
        <TodoItem
            {...item}
            onSwipeLeft={() => handleSwipeLeft(item.id)}
            onSwipeRight={() => handleSwipeRight(item.id)}
        />
    );
    return (
        <SafeAreaView>
            <View style={{ margin: 20, marginTop: 10 }}>
                <FlatList
                    data={todos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    inverted={true}
                />
            </View>
        </SafeAreaView>
    );
};

export default TodoList;

const styles = StyleSheet.create({});
