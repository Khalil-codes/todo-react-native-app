import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef } from "react";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
import Colors from "../Colors";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/todo/todoSlice";

const leftActions = () => {
    return (
        <RectButton style={styles.leftAction}>
            <AnimatedIcon
                name="done"
                size={30}
                color="#fff"
                style={[styles.actionIcon]}
            />
        </RectButton>
    );
};
const rigthActions = () => {
    return (
        <RectButton style={styles.rightAction}>
            <AnimatedIcon
                name="delete-forever"
                size={30}
                color="#fff"
                style={[styles.actionIcon]}
            />
        </RectButton>
    );
};

const TodoItem = ({ text, _id, completed }) => {
    const dispatch = useDispatch();
    const swipeableRef = useRef(null);
    return (
        <Swipeable
            ref={swipeableRef}
            renderLeftActions={leftActions}
            renderRightActions={rigthActions}
            onSwipeableLeftOpen={() => {
                dispatch(completeTodo(_id));
                swipeableRef.current && swipeableRef.current.close();
            }}
            onSwipeableRightOpen={() => dispatch(deleteTodo(_id))}>
            <View style={[styles.todoCard, completed && styles.completed]}>
                <Text
                    style={[
                        styles.todoTitle,
                        completed && styles.completedText,
                    ]}>
                    {text}
                </Text>
            </View>
        </Swipeable>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    todoCard: {
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: 10,
        borderColor: Colors.borderColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        height: 80,
        backgroundColor: Colors.lightColor,
    },
    todoTitle: {
        fontSize: 20,
    },
    completed: {
        backgroundColor: Colors.completedColor,
    },
    completedText: {
        textDecorationLine: "line-through",
    },
    leftAction: {
        flex: 1,
        backgroundColor: "#388e3c",
        height: 80,
        borderRadius: 7,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row-reverse",
    },
    actionIcon: {
        width: 30,
        marginHorizontal: 20,
    },
    rightAction: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#dd2c00",
        flex: 1,
        height: 80,
        borderRadius: 7,
        justifyContent: "flex-end",
    },
});
