import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const OnboardingScreen3 = ({ navigation }) => {
    return (
      <View style={[styles.screen, { backgroundColor: 'lavender' }]}>
        <Text style={{fontSize:40,marginTop:100,color:"purple",fontWeight:'bold'}}>Lisence/Learners Registration</Text>
        <LottieView
          source={require('../assets/Animation3.json')}
          autoPlay
          loop
        />
  
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        >
         <LottieView
          source={require('../assets/Animation4.json')}
          autoPlay
          style={{marginTop:150,height:400}}
          onPress={() => navigation.navigate('Login')}
        />
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
    },
  });

  export default OnboardingScreen3