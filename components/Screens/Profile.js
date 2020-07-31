import React, { useEffect } from 'react';
import { Component, SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableHighlight, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../context';

const Profile = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext);
  return(
      <ScrollView style={styles.homePage}>
          <Text style={styles.name}>Emily Jones</Text>
          <Image style={styles.profilePhoto} source={require('../Images/profilePicDefault.png')} />
          <TouchableHighlight
            onPress={() => alert('Pressed!')}
            style={styles.button}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name='id-card-o' size={40} color='#39A3F4' backgroundColor='white'></Icon>
              <Text style={{color: 'white', fontSize: 20, marginLeft: 10,}}> View Licenses </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => alert('Pressed!')}
            style={styles.button}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name='bookmark' size={40} color='#39A3F4' backgroundColor='white'></Icon>
              <Text style={{color: 'white', fontSize: 20, marginLeft: 10,}}> View Saves </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {signOut()}}
            style={styles.button}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name='sign-out' size={40} color='#39A3F4' backgroundColor='white'></Icon>
              <Text style={{color: 'white', fontSize: 20, marginLeft: 10,}}> Log Out </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => alert('Pressed!')}
            style={styles.button}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name='trash' size={40} color='#39A3F4' backgroundColor='white'></Icon>
              <Text style={{color: 'white', fontSize: 20, marginLeft: 10,}}> Delete Account </Text>
            </View>
          </TouchableHighlight>
      </ScrollView>
  );
    
};


const styles = StyleSheet.create({
    homePage: { 
        backgroundColor: '#10161D',
      },
      name: {
        color: '#39A3F4',
        fontSize: 50,
        alignSelf: 'center',
        paddingTop: 50,
      },
      profilePhoto: {
        backgroundColor: '#151F2A',
        height: 150,
        width: 150,
        margin: 30,
      },
      button: {        
        marginLeft: 30,
        margin: 20,
      },
});

export default Profile