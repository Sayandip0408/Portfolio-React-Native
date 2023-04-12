import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Linking } from 'react-native';

const ku = require('../assets/ku.jpg');
const bstm = require('../assets/bstm.jpeg');

const EducationData = [
    {
        "id": "1",
        "image": ku,
        "course": "Master of Computer Application",
        "institute": "Department of Computer Science and Engineering",
        "university": "University of Kalyani",
        "address": "https://klyuniv.ac.in/"
    },
    {
        "id": "2",
        "image": bstm,
        "course": "Bachelor of Computer Application",
        "institute": "Bengal School of Technology and Management",
        "university": "MAKAUT (Formerly WBUT)",
        "address": "https://bstmanagement.in/"
    },
]

const EducationComp = (item) => {
    return (
        <View
            style={{
                marginVertical: 10,
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 5,
                borderRadius: 3,
                backgroundColor: 'white'
            }}
            key={item.id}
        >
            <Image
                source={item.image}
                style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                }}
            />
            <View
                style={{
                    padding: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 17,
                        fontWeight: 600,
                        marginBottom: 5,
                    }}
                >
                    {item.course}
                </Text>
                <Text
                    style={{
                        marginVertical: 5,
                        fontSize: 15,
                    }}
                >
                    {item.institute}
                </Text>
                <Text
                    style={{
                        marginVertical: 5,
                        fontSize: 15,
                    }}
                >
                    {item.university}
                </Text>
                <TouchableOpacity
                    style={{
                        marginVertical: 5,
                    }}
                    onPress={() => Linking.openURL(item.address)}
                >
                    <Text
                        style={{
                            textTransform: 'uppercase',
                            color: '#D32F2F',
                            fontSize: 15,
                            fontWeight: 600,
                        }}
                    >
                        Learn more
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Education = () => {
    return (
        <View
            style={{
                marginTop: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    textTransform: 'uppercase',
                    color: '#D32F2F',
                    fontWeight: 600,
                    textAlign: 'center',
                }}
            >
                Education
            </Text>
            <View
                style={{
                }}
            >
                {
                    EducationData.map(EducationComp)
                }
            </View>
        </View>
    )
}

export default Education