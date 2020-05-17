import React, {Component} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import AddCard from './AddCard'
import QuizPage from './QuizPage'
import Result from './Result'
import MainDeck from './MainDeck'
import DeckView from './DeckView'

const Stack = createStackNavigator()
export default class MainNavigator extends Component {
    render() {
        return (

            <Stack.Navigator initialRouteName="Flashcard">
                <Stack.Screen name="Mobile Flashcard By- Yash Khandelwal" component={MainDeck}/>
                <Stack.Screen name="DeckView" component={DeckView}/>
                <Stack.Screen name="AddCard" component={AddCard}/>
                <Stack.Screen name="QuizPage" component={QuizPage}/>
                <Stack.Screen name="Result" component={Result}/>
            </Stack.Navigator>

        )
    }
}
