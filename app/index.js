import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Stack = createStackNavigator();


const App = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Projects' component={Projects} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Contact' component={Contact} />
        </Stack.Navigator>
    )
}

export default App