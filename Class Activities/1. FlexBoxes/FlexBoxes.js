/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';


import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header />
                    <View style={styles.body}>
                        <View style={{...styles.rowFlexWideContainer, ...{backgroundColor: "lightgrey"}}}>
                            <View style={{margin: 10, flex: 4, backgroundColor: "skyblue"}}>
                                <Text style={{textAlign: "center", color: "white", fontSize: 30}}>4</Text>
                            </View>
                            <View style={{margin: 10, flex: 2, backgroundColor: "lightblue"}}>
                                <Text style={{textAlign: "center", color: "white", fontSize: 20}}>2</Text>
                            </View>
                            <View style={{margin: 10, flex: 1, backgroundColor: "blue"}}>
                                <Text style={{textAlign: "center", color: "white"}}>1</Text>
                            </View>
                        </View>
                        <View style={{...styles.rowFlexSideContainer, ...{backgroundColor: "lightgrey"}}}>
                            <View style={{margin: 10, flex: 1, backgroundColor: "red"}}>
                                <Text style={{color: "white", textAlign: "center"}}>1</Text>
                            </View>
                            <View style={{margin: 10, flex: 1, backgroundColor: "blue"}}>
                                <Text style={{color: "white", textAlign: "center"}}>1</Text>
                            </View>
                            <View style={{margin: 10, flex: 1, backgroundColor: "green"}}>
                                <Text style={{color: "white", textAlign: "center"}}>1</Text>
                            </View>
                            <View style={{margin: 10, flex: 1, backgroundColor: "orange"}}>
                                <Text style={{color: "white", textAlign: "center"}}>1</Text>
                            </View>
                            <View style={{margin: 10, flex: 1, backgroundColor: "black"}}>
                                <Text style={{color: "white", textAlign: "center"}}>1</Text>
                            </View>
                            <View style={{margin: 10, flex: 1, backgroundColor: "grey"}}>
                                <Text style={{color: "white", textAlign: "center"}}>1</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{textAlign: "center"}}>Created by Hasnain Naeem</Text>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: "white",
        flexDirection: "row",
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    rowFlexWideContainer: {
        margin: 10,
        flex: 2,
        flexDirection: "column",
    },
    rowFlexSideContainer: {
        margin: 10,
        flex: 1,
        flexDirection: "column",
    },
});

export default App;
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'
import TabBar from './TabBar'

let todoIndex = 0;

class App extends Component {

    constructor () {
        super()
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }

        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.setType = this.setType.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
    }

    inputChange (inputValue) {
        this.setState({ inputValue })
    }

    submitTodo () {
        if (this.state.inputValue.match(/^\s*$/)) return
        let todo = { title: this.state.inputValue, todoIndex: todoIndex, complete: false }
        todoIndex++
        this.state.todos.push(todo)
        this.setState({ todos: this.state.todos, inputValue: '' }, () => {
            console.log('State: ', this.state)
        })
    }

    deleteTodo (todoIndex) {
        let { todos } = this.state
        todos = this.state.todos.filter((todo) => {
            return todo.todoIndex !== todoIndex
        })
        this.setState({ todos })
    }

    toggleComplete (todoIndex) {
        let { todos } = this.state
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete
            }
        })
        this.setState({ todos })
    }

    setType (type) {
        this.setState({ type })
    }

    render () {
        const { todos, inputValue, type } = this.state
        return (
            <View
                style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <Heading />
                    <Input
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)} />
                    <TodoList
                        type={type}
                        toggleComplete={this.toggleComplete}
                        deleteTodo={this.deleteTodo}
                        todos={todos} />
                    <Button
                        submitTodo={this.submitTodo} />
                </ScrollView>
                <TabBar
                    type={type}
                    setType={this.setType} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    content: {
        flex: 1
    }
})

export default App
