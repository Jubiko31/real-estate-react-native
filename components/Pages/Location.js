import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, TextInput, Image, Text } from "react-native";
import { data } from "../../api/data";
import { Panel } from "../Panel/Panel";

export const Location = () => {
    const [searchName, setSearchName] = useState('');

    return (
        <>
            <TextInput
                style={styles.textInput}
                value={searchName}
                placeholder="Search villas"
                keyboardType="text"
                onChangeText={() => setSearchName(event.target.value)}
            />
            <View style={styles.container} >
                <SafeAreaView style={styles.view}>
                    <ScrollView style={styles.scrollView}>
                        {data.map((item, index) => {
                            const { location } = item
                            if(location.toLowerCase() == searchName) {
                               return (
                                <View key={index}>
                                    <Text>{item.name}</Text>
                                    <Image source={item.image} style={styles.img} />
                                </View>
                            )}
                        })}
                    </ScrollView>
                </SafeAreaView>
            </View>
            <Panel />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      alignItems:'center',
      top: 10,
    },
    view: {
        width:'100%',
        alignItems:'center',
        marginTop: 20,
    },
    textInput: {
        padding: '10px',
        marginTop: 12,
        backgroundColor: '#fff',
        borderColor: '#B2002D',
        borderWidth: 1,
        borderRadius: 30
    },
    scrollView: {
        marginHorizontal: 5,
    },
    img: {
        height: 200,
        width: "310px",
        borderWidth: 0.8,
    },
});