import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import FormControl from "./FormControl";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todo/todoSlice";

const TodoForm = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        if (text) setIsFilled(true);
    });
    const handleAdd = () => {
        dispatch(createTodo(text));
        setText("");
    };
    return (
        <View style={styles.todoForm}>
            <View style={styles.input}>
                <FormControl
                    placeholder="What do you want to do Today?"
                    value={text}
                    onChangeText={setText}
                />
            </View>
            <View style={styles.btn}>
                <Button text="Add" disabled={!isFilled} onPress={handleAdd} />
            </View>
        </View>
    );
};

export default TodoForm;

const styles = StyleSheet.create({
    todoForm: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    input: {
        flex: 2,
        marginEnd: 10,
    },
    btn: {
        flex: 1,
    },
});
