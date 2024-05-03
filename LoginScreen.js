import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
      const URL = "https://api.mainecollege.tech/api/v1/auth/authenticate";

      let credentials = {
        email: username + "@maine.edu",
        password: password
      }

      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        });
        
        if (response.ok) {
          let data = await response.json();
          console.log(data);
        }

      } catch (error) {
        //
      }

    }

    return (
      <View sytle={styles.container}>
        <Text style={styles.text}>Email</Text>
        <View
          style={styles.textInputTextContainer}
          >
          <TextInput 
              style={styles.inputUsername}
              placeholder="Username"
              value={username}
              onChangeText={text => setUsername(text)}
          />
          <View
            style={styles.textInputSide}>
            <Text>@maine.edu</Text>
          </View>
        </View>
        <Text style={styles.text}>Password</Text>
        <View
          style={styles.textInputTextContainer}
          >
          <TextInput 
              style={styles.inputPassword}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
          />
        </View>
        <View>
          <TouchableOpacity
          style={styles.button}
            onPress={() => {
              login();
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: 64,
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInputSide: {
      backgroundColor: 'lightgray',
      height: 64,
      width: '30%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopEndRadius: 16,
      borderBottomEndRadius: 16
    },
    inputPassword: {
      width: '100%',
      height: 64,
      borderWidth: 1,
      padding: 10,
      margin: 0,
      backgroundColor: 'white',
      borderRadius: 16,
      borderWidth: 0
    },
    inputUsername: {
      height: 64,
      width: '70%',
      borderWidth: 1,
      padding: 10,
      margin: 0,
      backgroundColor: 'white',
      borderTopLeftRadius: 16,
      borderBottomStartRadius: 16,
      borderWidth: 0
    },
    text: {
      color: '#F5A800',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 16
    },
    button: {
      backgroundColor: '#F5A800',
      padding: 16,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32
    },
    buttonText: {
      color: '#002752',
      fontSize: 16,
      fontWeight: 'bold'
    }
});