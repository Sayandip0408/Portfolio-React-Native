import { Text, ScrollView, Image, TouchableOpacity, Linking, View } from 'react-native'
import React from 'react'

const ContactComp = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            <Image
                source={require('../assets/mail.png')}
                style={{
                    height: 250,
                    width: '90%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 50,
                }}
            />
            <Text
                style={{
                    fontSize: 20,
                    color: '#5352ed',
                    fontWeight: 600,
                    textAlign: 'center',
                }}
            >
                I'm Open to Work
            </Text>
            <Text
                style={{
                    textAlign: 'center',
                    marginTop: 45,
                    fontSize: 17,
                    color: '#57606f',
                    fontWeight: 500,
                }}
            >
                would like to hear from you
            </Text>
            <TouchableOpacity
                style={{
                    marginVertical: 5,
                }}
                onPress={() => Linking.openURL('mailto:adhikarysayandip@gmail.com')}
            >
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        borderWidth: 1,
                        width: '90%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: 4,
                        paddingVertical: 5,
                        textTransform: 'uppercase',
                        color: '#5352ed',
                        borderColor: '#5352ed',
                        fontWeight: 500,
                        backgroundColor: '#F0F0F8'
                    }}
                >
                    adhikarysayandip@gmail.com
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginVertical: 60 }}>
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
        </ScrollView>
    )
}

export default ContactComp