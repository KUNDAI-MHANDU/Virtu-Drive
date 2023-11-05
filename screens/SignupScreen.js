import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { auth, db } from "../Config";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 


export default function SignupScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
  
    const handleSignUp = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        
        // Send email verification
        await sendEmailVerification(user);

        await setDoc(doc(db, "Users", email), {
            Email: email,
            username: username,
            Firstname: null,
            Lastname: null,
            Initials: null,
            licenseNumber: null,
            DiscNumber: null,
            LD_Expire: null,
            LD_Issue: null,
            DL_Expire: null,
            DL_Issue: null,
            
          });
        
        Alert.alert("Success", "A verification email has been sent to your email address.");
        navigation.navigate("Login");
      } catch (error) {
        console.log("Error", error.message);
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
      <View  className="h-full w-full flex justify-around pt-48">
        
        {/* title */}
        <View className="flex items-center">
            <Animated.Text 
                entering={FadeInUp.duration(1000).springify()} 
                className="text-white font-bold tracking-wider text-5xl">
                    Sign Up
            </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-5 space-y-4">
            <Animated.View 
                entering={FadeInDown.duration(1000).springify()} 
                className="bg-white/100 p-5 rounded-2xl w-full">
                <TextInput
                    placeholder="Username"
                    placeholderTextColor={'gray'}
                    onChangeText={(text) => setUsername(text)}
                />
            </Animated.View>
            <Animated.View 
                entering={FadeInDown.delay(200).duration(1000).springify()} 
                className="bg-white/100 p-5 rounded-2xl w-full">
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={'gray'}
                    onChangeText={(text) => setEmail(text)}
                />
            </Animated.View>
            <Animated.View 
                entering={FadeInDown.delay(400).duration(1000).springify()} 
                className="bg-white/100 p-5 rounded-2xl w-full mb-3">
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={'gray'}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
            </Animated.View>

            <Animated.View className="w-full" entering={FadeInDown.delay(600).duration(1000).springify()}>
                <TouchableOpacity className="w-full p-3 rounded-2xl mb-3" style={{backgroundColor: '#1c2732'}} onPress={handleSignUp}>
                    <Text className="text-xl font-bold text-white text-center">SignUp</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View 
                entering={FadeInDown.delay(800).duration(1000).springify()} 
                className="flex-row justify-center">

                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text style={{color: 'white'}}>Login</Text>
                </TouchableOpacity>

            </Animated.View>
        </View>
      </View>
    </View>
  )
}