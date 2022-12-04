import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, StyleSheet ,StatusBar, TouchableOpacity, View, Image} from "react-native";
import { confirmBooking } from '../Alerts/confirmBooking';
import Icon from 'react-native-vector-icons/Ionicons';

export const DetailsPage = ({ route })  => {
    const { price, description, bedroom, totalArea, image } = route.params
    const navigation = useNavigation();

    useLayoutEffect(() => {
            navigation.setOptions({
            headerRight: () => (
                <Text style={styles.price}>Price ${price}</Text>
            ),
            });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image style={{ width: '100%', height: 300 }} source={image} />
            <View style={styles.displayRow} >
                <Text style={{ fontSize: 18,color: '#828282' }} >Amiantus</Text>
                <Text style={styles.details} >Details</Text>
                <Text style={{ fontSize: 18 }} >Reviews</Text>
            </View>
            <View  style={styles.displayRow} >
                <Text style={{ fontSize: 16, color: 'gray' }} >BEDROOM</Text>
                <Text style={{ fontSize: 18, color: 'gray' }}>{bedroom}</Text>
            </View>
            <View  style={styles.displayRow} >
                <Text style={{ fontSize: 16, color: 'gray' }} >TOTAL AREA</Text>
                <Text style={{ fontSize: 18, color: 'gray' }} >{totalArea} sq ft({Math.round(totalArea / 10.7)} m2)</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.shareBtn}>
                    <Text style={{ color: '#828282', fontWeight: 'bold', marginRight: 20 }}>SHARE THIS</Text>
                    <Icon style={styles.shareIcon} name="arrow-up-circle" size={30} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.bookBtn}  
                    onPress={() => { confirmBooking(route) }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', marginRight: '50%' }}>Book</Text>
                    <Icon style={styles.bookIcon} name="arrow-up-circle" size={30} color="#fff" />
                </TouchableOpacity>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      alignItems:'center',
    },
    price: {
        fontSize: 19,
        marginRight: 20,
        fontWeight: 600,
        color:"#B2002D",
    },
    description: {
      fontSize: 25,
      textAlign:'center',
      marginTop:30,
    },
    details: {
        textAlign:'center',
        fontSize: 21,
        color: "#B2002D",
    },
    displayRow: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:30,
    },
    btnContainer:{
        height: 100,
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        bottom: 0,
        marginTop:30,
    },
    shareBtn: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 200,
        borderRadius: 30,
        backgroundColor: "#ffffff",
    },
    bookBtn: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 200,
        borderRadius: 30,
        color: '#FFF',
        backgroundColor: "#B2002D",
    },
    shareIcon: {
        position: "absolute", 
        right: 20, 
        color: '#828282' 
    },
    bookIcon: {
        position: "absolute", 
        marginRight: '15%', 
        transform: "rotate(90deg)",
    }
});
