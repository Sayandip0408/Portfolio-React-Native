import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, FlatList, Linking } from 'react-native'

const amazkart = require('../assets/amazkart.png');
const lockeKey = require('../assets/lockeKey.png');
const vrppc = require('../assets/vrppc.png');
const tictactoe = require('../assets/tictactoe.png');
const quizbuzz = require('../assets/quizbuzz.png');
const codepen = require('../assets/codepen.png');


const projectData = [
    {
        "projectName": "AmazKart Ecommerce (MERN)",
        "image": amazkart,
        "projectDesc": "AmazKart is a MERN stack ecommerce website, it has featurse like category wised products, cart system, order process, admin dashboard, add new product, update stocks etc.",
        "technologies": "React JS, Node JS, MongoDB, Express, HTML, CSS, JavaScript, Redux",
        "url": "https://breakable-blue-poncho.cyclic.app/"
    },
    {
        "projectName": "Locke & Key (MERN)",
        "image": lockeKey,
        "projectDesc": "Locke & Key is a password manager MERN website to store new password securely, show all your saved passwords, also generates extremely strong passwords.",
        "technologies": "React JS, Node JS, MongoDB, Express, HTML, CSS, JavaScript",
        "url": "https://plain-pinafore-worm.cyclic.app/"
    },
    {
        "projectName": "Vehicle Routing Problem With Private Fleet And Common Carrier",
        "image": vrppc,
        "projectDesc": "The vehicle-routing problem with private fleet and common carrier (VRPPC) is a variant of the VRP in which customers can be subcontracted at a customer-dependent cost if the privately-owned capacity is insufficient to serve all customers, or if doing so is beneficial from a cost point of view.",
        "technologies": "C++",
        "url": "https://github.com/Sayandip0408/VRPPC"
    },
    {
        "projectName": "Tic Tac Toe",
        "image": tictactoe,
        "projectDesc": "Tic Tac Toe game is very famous among us, it doesn't need much explanation I guess.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://tictactoe-sayandip.netlify.app/"
    },
    {
        "projectName": "Quiz-Buzz",
        "image": quizbuzz,
        "projectDesc": "A website to play MCQ quiz on subjects like C/C++, Database, Data Structure HTML/CSS, JavaScript, Python, Java etc.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://quiz-buzz-sayandip.netlify.app/"
    },
    {
        "projectName": "Codepen Clone",
        "image": codepen,
        "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this Codepen Clone Website using React JS.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://codepen-by-sayandip.netlify.app/"
    },
]

const ProjectDataComp = (item) => {
    return (
        <View
            style={{
                width: '90%',
                marginVertical: 10,
                marginRight: 'auto',
                marginLeft: 'auto',
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation: 5,
                backgroundColor: 'white',
                borderRadius: 3,
            }}
            key={item.url}
        >
            <Image
                source={item.image}
                style={{
                    width: '100%',
                    height: 230,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                }}
            />
            <View
                style={{
                    padding: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#D32F2F'
                    }}
                >
                    {item.projectName}
                </Text>
                <Text
                    style={{
                        color: '#57606f',
                        marginVertical: 5,
                    }}
                >
                    {item.projectDesc}
                </Text>
                <TouchableOpacity>
                    <Text
                        style={{
                            textTransform: 'uppercase',
                            color: '#D32F2F',
                            marginVertical: 5,
                        }}
                        onPress={() => Linking.openURL(item.url)}
                    >
                        Learn more
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ProjectComp = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height: '100%',
                backgroundColor: 'white',
            }}
        >
            <View style={{ flex: 1, paddingTop: 10 }}>
                <Text
                    style={{ fontSize: 20, fontWeight: 600, textAlign: 'center', color: '#1e90ff' }}
                >
                    Projects done by me...
                </Text>

                {
                    projectData.map(ProjectDataComp)
                }

                <View
                    style={{
                        width: '90%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginVertical: 10,
                        flexDirection: 'row',
                        gap: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >
                        <Text
                            style={{
                                color: '#D32F2F',
                                fontWeight: 700,
                            }}
                        >
                            ***
                        </Text> find more interesting projects on my
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: '#D32F2F',
                                fontWeight: 700,
                                fontSize: 16,
                            }}
                        >
                            GitHub
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProjectComp