import { Text, StyleSheet, View ,TouchableOpacity,StatusBar} from "react-native";
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign';
import { Panel } from "../Panel/Panel";

export const More = () => {
    const navigation = useNavigation();
    const navigate = (location) => {
        navigation.navigate(location)
    }

    return (
        <>
            <View style={styles.container}>
                <Icon 
                    style={{ position: 'absolute',  top: 10, right: 10 }}
                    name="close" 
                    onPress={() => navigate('Home')} 
                    size={30} 
                    color="#B2002D"  
                />
                <View style={styles.card}>
                    <View style={styles.list}>
                        <Icon name="flag" size={30} color="gray"  />
                        <Text style={styles.text}>Booking Address</Text>
                        <Icon style={styles.arrow} name="rightcircle" size={30} color="gray" />
                        <View style={styles.line} />
                    </View>
                    <View style={styles.list}>
                        <Icon name="creditcard" size={30} color="gray"  />
                        <Text style={styles.text}>Payment Method</Text>
                        <Icon style={styles.arrow} name="rightcircle" size={30} color="gray" />
                        <View style={styles.line} />
                    </View>
                    <View style={styles.list}>
                        <Icon name="wallet" size={30} color="gray" />
                        <Text style={styles.text}>Currency</Text>
                        <Icon style={styles.arrow} name="rightcircle" size={30} color="gray" />
                        <Text style={{ marginLeft: '50px', color: 'gray', }}>USD</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.list}>
                        <Icon name="translate" size={30} color="gray"  />
                        <Text style={styles.text}>Language</Text>
                        <Icon style={styles.arrow} name="rightcircle" size={30} color="gray" />
                        <Text style={{ marginLeft: '50px', color: 'gray', }}>English</Text>
                    </View>
                </View>
                <TouchableOpacity  onPress={() => navigate('Login')}>
                    <Text style={{ fontSize:18, color: "#B2002D",  marginTop: '100px', fontWeight: 'bold' }}>
                        LOG OUT
                    </Text>
                </TouchableOpacity>
            </View>
            <Panel />
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 25,
        marginTop: 70,
        padding: 10,
    },
    list: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    line: {
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        bottom: 0,
        right: 20,
        height: 1,
        width: '80%',
    },
    text: {
        fontSize: 16,
        marginLeft: 30,
        color: 'gray',
    },
    arrow: {
        position: 'absolute',
        right: 30,
    }
});