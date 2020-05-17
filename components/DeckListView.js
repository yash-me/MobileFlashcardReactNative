import React from 'react'
import {Text, TouchableOpacity,StyleSheet} from 'react-native'
import {connect} from 'react-redux'

function DeckListView(props) {
    
        const {dock, navigation} = props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                navigation.navigate('DeckView', {dock});
            }}>
                <Text style={styles.title}>{dock.title}</Text>
                <Text style={styles.cards}>{`${dock.questions.length} ${dock.questions.length > 1
                        ? 'cards'
                        : 'card'}`}</Text>
            </TouchableOpacity>

        )
    
}
const mapStateToProps = (state, ownProps) => {
    return {prop: state.prop}
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 130,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: 'pink',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "400",
        color: "black"
    },
    cards: {
        paddingTop: 20,
        fontSize: 20,
        color: 'red'
    }
})
export default connect(mapStateToProps)(DeckListView)