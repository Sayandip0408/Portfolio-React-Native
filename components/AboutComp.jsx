import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Linking } from 'react-native'
import Education from './Education'
import SkillsComp from './SkillsComp'

const AboutComp = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: 'white' }}
        >
            <View
                style={{
                    padding: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: '#D32F2F',
                        fontWeight: 600,
                    }}
                >
                    SHORT STORY ABOUT ME AND THE BEGINING OF MY JOURNEY
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'justify',
                        marginVertical: 10,
                    }}
                >
                    My name is <Text style={{ fontWeight: 600 }}>Sayandip Adhikary</Text>, usually called Sandy,
                    I came from West Bengal, India. Currently I am a
                    recent <Text style={{ fontWeight: 600 }}>Master of Computer Application</Text> graduate from
                    <Text style={{ fontWeight: 600 }}> University of Kalyani</Text> and a frontend developer
                    looking for a opportunity to kick start my career.
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'justify',
                        marginVertical: 10,
                    }}
                >
                    My short term goal is to get palced in a reputed company,
                    which allows me to enhance my skills and knowledge.
                    My long term goal would be to reach a higher position
                    in the same company. My strength is that I can adapt
                    quickly to any environment.
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        marginVertical: 10,
                        textAlign: 'justify'
                    }}
                >
                    My hobbies are photography and playing cricket. I also love watching movies and webseries in my leisure.
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 17,
                        fontWeight: 600,
                    }}
                >
                    Visit my Image Gallery :
                    <TouchableOpacity onPress={() => Linking.openURL('https://sayandip-gallery.netlify.app/')}>
                        <Text style={{ fontSize: 17, fontWeight: 600, color: '#5352ed', textAlign: 'center', }}>sayandip-gallery.netlify.app</Text>
                    </TouchableOpacity>
                </Text>
                <Education />
                <SkillsComp />
            </View>
        </ScrollView>
    )
}

export default AboutComp