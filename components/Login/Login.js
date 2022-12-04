import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Image,
} from 'react-native';

export const Login = () => {
    const navigation = useNavigation();
    const [credentials, setCredentials] = useState({ email: 'admin', password: 'Password'});
    const [hidePassword, setHidePassword] = useState(true);
    const { email, password } = credentials;

    const logIn = () => {
        if (email == "admin" && password == "Password") {
            navigation.navigate('Home', { name: email });
            setCredentials({ email: '', password: ''});
        }
    }
    console.log(hidePassword) // true by default
    const managePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.loginAccount}>Login Account</Text>
            <View style={styles.loginForm}>
                <Text style={styles.text}>Email</Text>
                <TextInput 
                    style={styles.loginInput}
                    type="email"
                    value={email}
                    onChangeText={() => setCredentials({ ...credentials, email: event.target.value })} 
                    placeholder="Enter your email"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Password</Text>
                <TextInput 
                    style={styles.loginInput}
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    secureTextEntry={hidePassword}
                    enablesReturnKeyAutomatically
                    onChangeText={() => setCredentials({ ...credentials, password: event.target.value })} 
                />
                <TouchableOpacity
                  style={styles.eyeBtn}
                  onPress={managePasswordVisibility}>
                  <Image
                    source={
                      hidePassword
                        ? require('../../assets/eye.png')
                        : require('../../assets/hidden.png')
                    }
                  />
                </TouchableOpacity>
            </View>

            <TouchableHighlight 
                style={styles.loginBtn} 
                onPress={logIn}
            >
                <Text style={{ color: '#FFF', fontWeight: 600 }}>LOGIN</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={{ color: '#B2002D', fontWeight: 600 }}>FORGOT PASSWORD </Text>
            </TouchableHighlight>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        top: "10%",
    },
    loginAccount: {
        fontFamily: 'Montserrat',
        fontWeight: 800,
        fontSize: 28,
        justifyContent: 'flex-start',
        marginRight: '80px',
    },
    loginForm: {
        flexDirection: 'column',
        marginTop: 20,
    },
    eyeBtn: {
        position: 'absolute',
        right: 9,
        height: 25,
        width: 25,
        padding: 0,
        marginTop: 21,
    },
    loginInput: {
        paddingLeft: 15,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    loginBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 250,
        marginBottom: 15,
        borderRadius: 30,
        backgroundColor: "#B2002D",
    }
});