import React, {Component} from 'react';
import {ScrollView} from 'react-native'
import data from '../data/Data.json';
import DeckListView from './DeckListView';
import {connect} from 'react-redux'
import {addDeck} from '../actions';

class MainDeck extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(addDeck(data));
    }

    render() {
        const {docks} = this.props;
        return (
            <ScrollView >
                {Object
                    .keys(docks)
                    .map(key => (<DeckListView key={key} dock={docks[key]} {...this.props}/>))
}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {docks: state}
}

export default connect(mapStateToProps)(MainDeck)