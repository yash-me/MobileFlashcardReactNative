import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCardsToDeck} from './../actions'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    onQuestionChange = (question) => {
        this.setState({question});
    }
    onAnswerChange = (answer) => {
        this.setState({answer});
    }
    onSubmit = () => {
        const {dispatch, navigation} = this.props;
        const dock = this.props.route.params.dock;
        const question = {
            'question': this.state.question,
            'answer': this.state.answer
        }
        const payload = {
            "deckName": dock.title,
            "card": question

        }
        dispatch(addCardsToDeck(payload));
        navigation.goBack();
    }
    render() {
        const dock = this.props.route.params.dock;
        this
            .props
            .navigation
            .setOptions({title: `Add new-card`})
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Enter your question</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    maxLength={120}
                    onChangeText={text => this.onQuestionChange(text)}
                    value={this.state.dockname}/>
                <Text style={styles.title}>It's answer</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    maxLength={120}
                    onChangeText={text => this.onAnswerChange(text)}
                    value={this.state.dockname}/>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                    this.onSubmit();
                }}>
                    <Text style={styles.btnText}>Save it!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '60%',
        paddingTop: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        width: '50%',
        height: 50,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: 'green',
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 5
    },
    textInput: {
        height: 70,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        marginTop: 25,
        marginBottom: 25,
        borderColor: "grey",
        borderWidth: 2,
        fontSize: 25
    },
    title: {
        fontSize: 25,
        fontWeight: "400",
        color: "darkblue"
    },
    btnText: {
        fontSize: 25,
        fontWeight: "400",
        color: "white"
    }
})

const mapStateToProps = (state, ownProps) => {
    return {docks: state}
}
export default connect(mapStateToProps)(AddCard);