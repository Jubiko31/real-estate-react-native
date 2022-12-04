import { Text, StyleSheet, View, Image} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { Panel } from '../Panel/Panel';

export const Profile = () => {
    return (
        <view>
            <View style={styles.container}>
                <View style={{ width:'90%' }}>
                    <View style={styles.header}>
                        <View>
                            <Image source={require('../../assets/profile.jpg')} style={styles.tinyLogo} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 32, color: 'gray', fontWeight: 'bold' }}>Jane Doe</Text>
                            <Text style={{ fontSize: 16, color: 'gray', marginTop: 16 }}>janedoe123@gmail.com</Text>
                            <View style={styles.editBtn}>
                                <Text style={{ fontSize: 18, color: 'gray', fontWeight: 700 }}>EDIT PROFILE</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.list}>
                            <Icon name="bars" size={30} color="gray"  />
                            <Text style={styles.text}>All My Booking</Text>
                            <Icon style={styles.arrowIcon} name="rightcircle" size={20} color="gray" />
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.list}>
                            <Icon name="balloon" size={30} color="gray"  />
                            <Text style={styles.text}>Pending Visits</Text>
                            <Icon style={styles.arrowIcon} name="rightcircle" size={20} color="gray" />
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.list}>
                            <Icon name="wallet" size={30} color="gray" />
                            <Text style={styles.text}>Pending Payments</Text>
                            <Icon style={styles.arrowIcon} name="rightcircle" size={20} color="gray" />
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.list}>
                            <Icon name="feedback" size={30} color="gray"  />
                            <Text style={styles.text}>Feedback</Text>
                            <Icon style={styles.arrowIcon} name="rightcircle" size={20} color="gray" />
                        </View>
                    </View>
                </View>
            </View>
            <Panel />
        </view>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        alignItems: 'center',
    },
    header:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    editBtn: {
        width:150,
        height:40,
        borderColor:'#828282',
        borderWidth:1,
        borderRadius:100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
    },
    tinyLogo: {
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    card:{
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 20,
        marginTop:50,
    },
    list:{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    arrowIcon:{
        position: 'absolute',
        right: 20,
    },
    line:{
        position: 'absolute',
        bottom: 0,
        right: 20,
        height: 1,
        width: '70%',
        backgroundColor: '#f2f2f2',
    },
    text:{
        fontSize: 18,
        color: 'gray',
        marginLeft:30,
    },
});