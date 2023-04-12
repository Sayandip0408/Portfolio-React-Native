import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, Linking } from 'react-native'

const HomeComp = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height: '100%',
                backgroundColor: 'white',
            }}
        >
            <View style={{ flex: 1, paddingTop: 10 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 700 }}>Hi, I am <Text style={{ color: '#1976D0' }}>SayanDip</Text> Adhikary</Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 500, marginBottom: 10 }}>Master of Computer Application Graduate</Text>
                    <View style={{
                        backgroundColor: '#f1c40f',
                        height: 140,
                        width: 140,
                        borderRadius: 140 / 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        elevation: 5,
                    }}>
                        <Text style={{ textAlign: 'center', fontWeight: 700, fontSize: 16 }}>Passionate</Text>
                        <Text style={{ textAlign: 'center', fontWeight: 700, fontSize: 16 }}>To Craft Amazing</Text>
                        <Text style={{ textAlign: 'center', fontWeight: 700, fontSize: 16 }}>Digital Products</Text>
                    </View>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 15,
                            marginVertical: 15,
                            paddingHorizontal: 20
                        }}
                    >
                        An design enthusiast that already have web designing experience. In addition to web design, I have a strong understanding of C/C++, Python, Java, Data Structure and DBMS.
                    </Text>
                </View>
                <View>
                    <Image
                        source={require('../assets/Profile.jpeg')}
                        style={{
                            height: 300,
                            width: '60%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            borderRadius: 5,
                        }}
                    />

                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 500,
                            marginTop: 15,
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}
                    >
                        I <Text style={{ color: '#D32F2F', fontWeight: 600 }}>LOVE</Text> TO CREATE SOMETHING <Text style={{ color: '#2980b9', fontWeight: 600 }}>SIMPLE</Text> AND <Text style={{ color: '#2980b9', fontWeight: 600 }}>CLEAN</Text>
                    </Text>
                    <TouchableOpacity
                        style={{ marginVertical: 10 }}
                        onPress={() => Linking.openURL('https://drive.google.com/file/d/1tJnzgyhucaE9XvcGv-_wktIyaPnikJYf/view?usp=share_link')}

                    >
                        {Platform.OS === 'ios' ?
                            <Text
                                style={{
                                    fontSize: 16,
                                    padding: 5,
                                    color: '#D32F2F',
                                    width: 250,
                                    borderRadius: 3,
                                    marginRight: 'auto',
                                    marginLeft: 'auto',
                                    textAlign: 'center',
                                    borderWidth: 1,
                                    borderColor: '#D32F2F',
                                    textTransform: 'uppercase',
                                    fontWeight: '500',
                                }}
                            >
                                Download Resume
                            </Text> : <Text
                                style={{
                                    backgroundColor: '#D32F2F',
                                    fontSize: 16,
                                    padding: 5,
                                    color: 'white',
                                    width: 250,
                                    borderRadius: 3,
                                    marginRight: 'auto',
                                    marginLeft: 'auto',
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    fontWeight: '400',
                                }}
                            >
                                Download Resume
                            </Text>
                        }
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    )
}

export default HomeComp