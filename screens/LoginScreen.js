import { View, Text, Image, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { auth } from "../Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from '../Redux/actions';

export default function LoginScreen() {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { email } = useSelector(state => state.userReducer);
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword( auth, email, password);
        if (userCredential.user.emailVerified) {
         
            navigation.navigate('Main')
        } else {
          Alert.alert('Email Verification', 'Please verify your email first.');
        }
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };

  return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light" />
        <Image className="h-100 w-full absolute" source={require('../assets/images/background.png')} />

        {/* lights */}
        <View className="flex-row justify-around w-full absolute">
            <Animated.Image 
                entering={FadeInUp.delay(200).duration(1000).springify()} 
                source={require('../assets/images/light.png')} 
                className="h-[225] w-[90]" 
            />
            <Animated.Image 
                entering={FadeInUp.delay(400).duration(1000).springify()} 
                source={require('../assets/images/light.png')} 
                className="h-[160] w-[65] opacity-75" 
            />
        </View>

        {/* title and form */}
        <View className="h-full w-full flex justify-around pt-40 pb-10">
            
            {/* title */}
            <View className="flex items-center">
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className="text-white font-bold tracking-wider text-5xl">
                        Login
                </Animated.Text>
            </View>

            {/* form */}
            <View className="flex items-center mx-5 space-y-4">
                <Animated.View 
                    entering={FadeInDown.duration(1000).springify()} 
                    className="bg-white/100 p-5 rounded-2xl w-full">

                    <TextInput
                        style={{color: 'black'}}
                        placeholder="Email"
                        placeholderTextColor={'gray'}
                        onChangeText={(text) => dispatch(setEmail(text))}
                    />
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(200).duration(1000).springify()} 
                    className="bg-white/100 p-5 rounded-2xl w-full mb-3">

                    <TextInput
                        style={{color: 'black'}}
                        placeholder="Password"
                        placeholderTextColor={'grey'}
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                    />
                </Animated.View>

                <Animated.View 
                    className="w-full" 
                    entering={FadeInDown.delay(400).duration(1000).springify()}>

                    <TouchableOpacity className="w-full p-3 rounded-2xl mb-3" style={{backgroundColor: '#1c2732'}} onPress={handleLogin}>
                        <Text className="text-xl font-bold text-white text-center">Login</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="flex-row justify-center">

                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                        <Text style={{color: 'white'}}>SignUp</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    </View>
  )
}