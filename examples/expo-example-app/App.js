import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './components/Home';
import FeedPage from './components/Feed';
import ChatPage from './components/Chat';
import FormPage from './components/Form';

export default StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    Chat: {
        screen: ChatPage,
        navigationOptions: {
            title: 'Chat'
        }
    },
    Feed: {
        screen: FeedPage,
        navigationOptions: {
            title: 'Feed'
        }
    },
    Form: {
        screen: FormPage,
        navigationOptions: {
            title: 'Form'
        }
    }
}, {
    initialRouteName: 'Feed'
});