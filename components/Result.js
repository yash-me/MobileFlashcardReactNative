import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {clearLocalNotification, setLocalNotification} from '../helpers/NotificationHelper'


class Result extends Component {
    componentDidMount() {
        clearLocalNotification().then(setLocalNotification);
    }
    render() {
        const {correct, incorrect, dock} = this.props.route.params;
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.answers}>
                    <Text style={styles.correctAns}>Correct:{" ",
                        correct}</Text>
                </View>
                <View style={styles.answers}>
                    <Text style={styles.incorrectAns}>Incorrect:{" ",
                        incorrect}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.restartQuiz}
                        onPress={() => {
                        navigation.navigate('QuizPage', {
                            correct: 0,
                            incorrect: 0,
                            questionNumber: 0,
                            dock
                        })
                    }}>
                        <Text style={styles.btnText}>Restart Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.backdeck}
                        onPress={() => {
                        navigation.navigate('DeckView', {dock});
                    }}>
                        <Text style={styles.btnText}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: 'lightgrey',
        paddingVertical: 30,
        justifyContent: "center"
    },
    correctAns: {
        fontSize: 30,
        color: "#2194f3",
        fontWeight: "400"
    },
    btnText: {
        color: 'white',
        fontSize: 20
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    incorrectAns: {
        fontSize: 30,
        color: '#ff0000',
        fontWeight: "400"
    },
    answers: {
        marginVertical: 15
    },
    restartQuiz: {
        backgroundColor: "purple",
        padding: 15,
        borderRadius: 5
    },
    backdeck: {
        backgroundColor: "blue",
        padding: 15,
        borderRadius: 5
    }
})
export default Result;