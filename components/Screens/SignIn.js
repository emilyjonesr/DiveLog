import React from 'react';
import { Component, SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableHighlight, Button, TextInput, AsyncStorage } from 'react-native';
import { AuthContext } from '../../context';

const SignIn = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false, 
        secureTextEntry: true
    });
    
    const { signIn } = React.useContext(AuthContext);

    const loginHandle = (username, password) => {
        signIn(username, password);
    } 

    const handleUsernameChange = (val) => {
        setData({
            ...data,
            username: val,
        });
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    return(
        <ScrollView style={styles.signInPage}>
            <Text style={styles.title}>Dive Log</Text>
            <Text style={styles.loginText}>Login</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Username'
                onChangeText={(username) => handleUsernameChange({username})}
                autoCapitalize='none'
            />
            <TextInput 
                style={styles.input} 
                placeholder='Password'
                secureTextEntry
                onChangeText={(password) => handlePasswordChange({password})}
                autoCapitalize='none'
            />
            <View style={styles.btnContainer}>
                <Button style={styles.btn} title='Login' onPress={() => {loginHandle(data.username, data.password)}}></Button>
                <Button style={styles.btn} title='Create Account' onPress={() => navigation.navigate('SignUp')}></Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    signInPage: { 
        backgroundColor: '#10161D',
      },
    title: {
        marginTop: '50%',
        fontSize: 50,
        color: '#39A3F4',
        alignSelf: 'center',

    },
    loginText: {
        color: '#39A3F4',
        alignSelf: 'center',
        fontSize: 25,
        margin: 10,
    },
    input: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '70%',
        borderWidth: 2,
        borderColor: '#39A3F4',
        marginBottom: 10,
        padding: 15,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        margin: 10,
    },
});

export default SignIn