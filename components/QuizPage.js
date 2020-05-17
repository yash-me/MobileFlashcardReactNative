import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

class QuizPage extends Component {
    state = {
        questionNumber: 0,
        displayAnswer: false,
        correct: 0,
        incorrect: 0
    }
    toggleAnswer = () => {
        this.setState((prevState) => {
            return {
                displayAnswer: !prevState.displayAnswer
            }
        })
    }
    onCorrectClick = () => {
        this.setState((prevState) => {
            return {
                correct: prevState.correct + 1,
                questionNumber: prevState.questionNumber + 1,
                displayAnswer: false,
            }
        })
    }
    onInCorrectClick = () => {
        this.setState((prevState) => {
            return {
                incorrect: prevState.incorrect + 1,
                questionNumber: prevState.questionNumber + 1,
                displayAnswer: false,
            }
        })

    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const {questionNumber} = this.props.route.params; 
        if (questionNumber !== this.state.questionNumber) {
            this.setState({correct: 0, incorrect: 0, questionNumber: 0})
        }
    }
    render() {
        const dock = this.props.route.params.dock;
        const {navigation} = this.props;
        navigation.setOptions({title: "Quiz"})
        if (dock.questions.length == 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.noquiz}> No cards in the deck.</Text>
                </View>
            )
        }
        if (this.state.questionNumber == dock.questions.length) {
            const {correct, incorrect} = this.state;
            this
                .props
                .navigation
                .navigate('Result', {correct, incorrect, dock});

        }
        return (
            <View>

                {this.state.questionNumber < dock.questions.length
                    ? <View style={styles.container}>
                            <Text>Question {this.state.questionNumber + 1 + " "}
                                of {dock.questions.length}
                            </Text>
                            <View style={styles.questionContainer}>
                                {this.state.displayAnswer
                                    ? <Text style={styles.answer}>{dock.questions[this.state.questionNumber].answer}</Text>
                                    : <Text style={styles.question}>{dock.questions[this.state.questionNumber].question}</Text>}
                                {!this.state.displayAnswer
                                    ? <Button
                                            onPress={() => {
                                            this.toggleAnswer();
                                        }}
                                            title="See Answer"
                                            color="blue"/>
                                    : <Button
                                        onPress={() => {
                                        this.toggleAnswer()
                                    }}
                                        title="See Question"
                                        color="blue"/>
}
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.correctBtn}
                                    onPress={() => {
                                    this.onCorrectClick();
                                }}>
                                    <Text style={styles.btnText}>Correct</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.incorrectBtn}
                                    onPress={() => {
                                    this.onInCorrectClick();
                                }}>
                                    <Text style={styles.btnText}>Incorrect</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    : <Text></Text>}
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
        paddingVertical: 30
    },
    noquiz: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "500"
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    correctBtn: {
        backgroundColor: "green",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 26
    },
    incorrectBtn: {
        backgroundColor: '#ff0000',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 20

    },
    btnText: {
        color: 'white',
        fontSize: 20
    },
    question: {
        fontSize: 20,
        color: "black"
    },
    answer: {
        fontSize: 30,
        color: "black"
    },
    questionContainer: {
        marginVertical: 20,
        height: '50%'
    }
})
export default QuizPage;