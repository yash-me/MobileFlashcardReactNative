import React, {Component} from 'react'
import {connect} from 'react-redux'
import FadeInView from './FadeInView'
import {Text, Animated, View, StyleSheet, TouchableOpacity} from 'react-native'

class DeckView extends Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }
    shouldComponentUpdate() {
        const dock = this.props.route.params.dock;
        return dock === this.props.docks[dock.title];
    }

    render() {
        const {navigation} = this.props;
        const dock = this.props.route.params.dock;
        navigation.setOptions({title: dock.title})
        return (
            <FadeInView>
                <View style={styles.container}>
                    <View>

                        <Text style={styles.title}>{dock.title}</Text>

                        <Text style={styles.cards}>{`${dock.questions.length} ${dock.questions.length > 1
                                ? 'cards'
                                : 'card'}`}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.addcard}
                        onPress={() => {
                        navigation.navigate('AddCard', {dock})
                    }}>
                        <Text style={styles.addcardText}>Add new card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.startquiz}
                        onPress={() => {
                        navigation.navigate('QuizPage', {dock})
                    }}>
                        <Text style={styles.startquizText}>Start the Quiz!</Text>
                    </TouchableOpacity>
                </View>
            </FadeInView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-evenly",
        backgroundColor: 'lightgrey'
    },
    title: {
        fontSize: 50,
        color: 'purple'
    },
    startquiz: {
        width: '60%',
        height: 60,
        backgroundColor: 'lightblue',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: '#8380ad',
        borderWidth: 1
    },
    startquizText: {
        fontSize: 30,
        color: 'black'
    },
    addcard: {
        width: '60%',
        height: 60,
        backgroundColor: 'yellow',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: '#8380ad',
        borderWidth: 1
    },
    addcardText: {
        fontSize: 30,
        color: 'black'
    },
    cards: {
        paddingTop: 20,
        fontSize: 30,
        color: 'maroon',
        textAlign: "center"
    }

});
const mapStateToProps = (state, ownProps) => {
    return {docks: state}
}
export default connect(mapStateToProps)(DeckView)