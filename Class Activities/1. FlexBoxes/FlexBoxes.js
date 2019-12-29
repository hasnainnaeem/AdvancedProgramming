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



const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
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
