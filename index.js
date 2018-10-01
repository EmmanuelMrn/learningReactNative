/* @format The entry point of the app */

/*
    Steps for rendering something to the screen:
    1. Import a library to help create a component
    2. Create a component (Component is an object that we can show in the screen)
    3. Render it to the device

    JSX: is an extension of JS that is use to write react components

    Babel: is a tool that take JSX and turns into normal JS
*/

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

//For each component we must register it
//Only de root component uses AppRegistry
AppRegistry.registerComponent('albums', () => App);
