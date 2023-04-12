import { View, Text } from 'react-native'
import React from 'react'

const skillsData = [
    {
        "id": "1",
        "sub": "C/C++",
        "known": "95%"
    },
    {
        "id": "2",
        "sub": "Python",
        "known": "85%"
    },
    {
        "id": "3",
        "sub": "Java",
        "known": "80%"
    },
    {
        "id": "4",
        "sub": "HTML/CSS",
        "known": "95%"
    },
    {
        "id": "5",
        "sub": "JavaScript",
        "known": "85%"
    },
    {
        "id": "6",
        "sub": "ReactJS",
        "known": "82%"
    },
    {
        "id": "7",
        "sub": "NodeJS",
        "known": "80%"
    },
    {
        "id": "8",
        "sub": "MySQL",
        "known": "90%"
    },
    {
        "id": "9",
        "sub": "MongoDB",
        "known": "93%"
    },
    {
        "id": "10",
        "sub": "DSA",
        "known": "95%"
    },
    {
        "id": "11",
        "sub": "OOP",
        "known": "93%"
    },
]

const SkillFun = (item) => {
    return (
        <View key={item.id}>
            <Text style={{ color: '#57606f', fontWeight: 600 }}>{item.sub}</Text>
            <View style={{
                backgroundColor: '#dfe4ea',
                height: 7,
                borderRadius: 5,
                marginVertical: 5,
            }}>
                <View style={{
                    backgroundColor: '#5352ed',
                    height: 7,
                    borderRadius: 5,
                    width: item.known
                }}>
                </View>
            </View>
        </View>
    )
}

const SkillsComp = () => {
    return (
        <View style={{
            marginTop: 20,
        }}
        >
            <Text style={{
                fontSize: 20,
                textTransform: 'uppercase',
                color: '#D32F2F',
                fontWeight: 600,
                textAlign: 'center',
            }}>
                Skills
            </Text>
            {/* skills-section */}
            <View>
                {
                    skillsData.map(SkillFun)
                }
            </View>
        </View>
    )
}

export default SkillsComp