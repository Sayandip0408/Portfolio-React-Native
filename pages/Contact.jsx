import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import ContactComp from '../components/ContactComp'

const Contact = ({ navigation }) => {
    const [sideBarVisibility, setSideBarVisibility] = useState(false);

    const changeMenuVisibility = () => {
        setSideBarVisibility(!sideBarVisibility);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "white" },
                    headerTitle: "",
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}
                        >
                            <Image
                                source={require('../assets/SA_Logo.png')}
                                style={{ width: 30, height: 30 }}
                            />
                            <Text
                                style={{ fontSize: 20, fontWeight: 600, marginLeft: 5 }}
                            >
                                SayanDip
                            </Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <>
                            {sideBarVisibility ? <TouchableOpacity
                                onPress={changeMenuVisibility}>
                                <Image
                                    style={{ width: 30, height: 30, marginRight: 15 }}
                                    source={require('../assets/cross.png')}
                                />
                            </TouchableOpacity> : <TouchableOpacity
                                onPress={changeMenuVisibility}>
                                <Image
                                    style={{ width: 40, height: 40, marginRight: 10 }}
                                    source={require('../assets/menu_bar.png')}
                                />
                            </TouchableOpacity>}
                        </>
                    )
                }}
            />
            {
                sideBarVisibility ?
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            backgroundColor: 'white',
                            height: '100%',
                            width: '100%',
                            transform: [{ translateX: 0 }],
                            zIndex: 100,
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            onPressOut={changeMenuVisibility}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 500 }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Projects')}
                            onPressOut={changeMenuVisibility}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 500 }}>Projects</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('About')}
                            onPressOut={changeMenuVisibility}
                        >
                            <Text style={{ fontSize: 20, fontWeight: 500 }}>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 500 }}>Contact</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 25 }}>Made by SayanDip</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '90%' }}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://www.facebook.com/sayandip.adhikary.96')}
                            >
                                <Image
                                    source={require('../assets/facebook.png')}
                                    style={{ height: 40, width: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://www.instagram.com/sayan.dip7/')}
                            >
                                <Image
                                    source={require('../assets/instagram.png')}
                                    style={{ height: 40, width: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://github.com/Sayandip0408')}
                            >
                                <Image
                                    source={require('../assets/github.png')}
                                    style={{ height: 40, width: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/sayandip-adhikary-7359a8199/')}
                            >
                                <Image
                                    source={require('../assets/linkedin.png')}
                                    style={{ height: 40, width: 40 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 20 }}>mail: adhikarysayandip@gmail.com</Text>
                    </View>
                    :
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            backgroundColor: 'blue',
                            height: 100,
                            width: 100,
                            transform: [{ translateX: 100 }]
                        }}
                    >
                    </View>
            }
            <ContactComp />
        </SafeAreaView>
    )
}

export default Contact