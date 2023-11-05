import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Image,
    Button,
    ImageBackground
 } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import Deck from '../components/Deck';
import Cards from '../components/Cards';
import Buttons from '../components/Buttons';
import { connect } from 'react-redux';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Config';


const img = require('../images/apply.jpg');
const img2 = require('../images/apply2.jpg');
const img3 = require('../images/renew2.jpg');
const img4 = require('../images/apply3.jpg');
const img5 = require('../images/renew.jpg');

const mapStateToProps = (state) => {
    return {
      email: state.userReducer.email,
    };
  };


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          data: [],
        };
      }

      componentDidMount() {
        this.fetchDocumentData();
      }
    
      fetchDocumentData = async () => {
        try {
          const { email } = this.props;
          const docRef = doc(db, "Users", email);
          const docSnap = await getDoc(docRef);
      
          if (docSnap.exists()) {
            const userData = docSnap.data();
            // Update DATA array with fetched data
            const updatedData = [
              {
                id: 1,
                title: "Driver's Licence",
                iss: userData.DL_Issue,
                exp: "Exp:",
                edate: userData.DL_Expire,
                title2: "Fname:",
                atitle2: userData.Firstname,
                id_no: "Lname:",
                no: userData.Lastname,
                title3: "ID no: ",
                atitle3: userData.ID_NO,
                title4: "Lice no: ",
                atitle4: userData.licenseNumber,
                title5: ": ",
                atitle5: userData.Firstname
              },
              {
                id: 2,
                title: "Licence Disc",
                iss: userData.LD_Issue,
                exp: "Engine No:",
                edate: userData.Engine_No,
                title2: "License No:",
                atitle2: userData.DiscNumber,
                id_no: "Exp:",
                no: userData.LD_Expire,
                title3: "",
                atitle3: "",
                title4: "",
                atitle4: "",
                title5: "",
                atitle5: ""
              },
            ];
            this.setState({ username: userData.username });
            // Set the updated data in the component state
            this.setState({ data: updatedData });
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      };

 renderCard(item){

    const isCircleCard = item.id === 2;

   return(  
    <View style={[styles.card, isCircleCard ? styles.circleCard : null]}>
    <Text style={styles.text2}>{item.title}</Text>
    <View style={styles.horizontalLine}></View>
   <View style={{ flexDirection: 'row'}}>
   <View style={[styles.leftColumn, isCircleCard ? styles.content2 : null]}>
      <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/virtu-drive.appspot.com/o/1.jpeg?alt=media&token=2f14a8f1-47d4-4c64-ba7c-43d7ce9e40e9&_gl=1*1bbs1jw*_ga*MjA3NDAwOTc1LjE2OTYwOTk2MDg.*_ga_CW55HF8NVT*MTY5OTIwMjczNy4zMi4xLjE2OTkyMDI3OTkuNjAuMC4w'}} 
      style={[styles.profilePicture, isCircleCard ? styles.imgprofile : null]} />
    </View>
    <View style={[styles.rightColumn, isCircleCard ? styles.content : null]}>
      <View style={[{flexDirection: 'row', gap: 6}, isCircleCard ? styles.row : null]}>
        <Text>Iss:</Text>
        <Text>{item.iss}</Text>
      </View>
      <View style={[{flexDirection: 'row', gap: 6}, isCircleCard ? styles.row : null]}>
        <Text>{item.exp}</Text>
        <Text>{item.edate}</Text>
      </View>
      <View style={[{flexDirection: 'row', gap: 6}, isCircleCard ? styles.row : null]}>
        <Text>{item.title2}</Text>
        <Text>{item.atitle2}</Text>
      </View>
      <View style={[{flexDirection: 'row', gap: 6}, isCircleCard ? styles.row : null]}>
        <Text>{item.id_no}</Text>
        <Text>{item.no}</Text>
      </View>
      <View style={[{flexDirection: 'row', gap: 6}, isCircleCard ? styles.row : null]}>
        <Text>{item.title3}</Text>
        <Text>{item.atitle3}</Text>
      </View>
      <View style={[{flexDirection: 'row', gap: 6}, isCircleCard ? styles.row : null]}>
        <Text>{item.title4}</Text>
        <Text>{item.atitle4}</Text>
      </View>

    </View>
   </View>
  </View>
    );
}
    render(){

        return(
            <View style={styles.container}>
                <ImageBackground
                    source={require("../images/unnamed.jpg")}
                    style={styles.map}
                >
                    <View style={styles.col}>
                        <View style={{width:"50%"}}>
                            <Text style={{color: 'white'}}>Hello</Text>
                            <Text style={{color: 'white', fontSize: 24}}>{this.state.username}</Text>
                        </View>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require('../images/user.jpg')}
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <Text style={styles.textDash}>Virtu-Drive</Text>

                    <View style={styles.colContainer}>
                        <Text style={{color: '#6a706e', textAlign: 'center'}}>{"(Swipe Up On Card)"}</Text>
                    </View>
                </ImageBackground>
                <Deck
                    data={this.state.data}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
                <Text style={styles.text}>Features</Text>
                <ScrollView 
                    style={{marginTop:20}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                >
                    <Cards
                        onPress={()=>this.props.navigation.navigate('Licence Application')}
                        icon="md-pulse"
                        title="Apply For Driver's"
                        bg="white"
                        number="LISENCE"
                        source={img}
                    />
                     <Cards
                        onPress={()=>this.props.navigation.navigate('Learners Licence Application')}
                        icon="ios-git-network"
                        title="Apply For Learner's"
                        bg="#FFF"
                        number="LISENCE"
                        source={img2}
                    />
                     <Cards
                        onPress={()=>this.props.navigation.navigate('Licence Application')}
                        icon="ios-heart-dislike"
                        title="Apply For Renewal Of"
                        bg="#FFF"
                        number="LISENCE"
                        source={img3}
                    />
                    <Cards
                        onPress={()=>this.props.navigation.navigate('Licence Disk Application')}
                        icon="ios-heart-dislike"
                        title="Apply For"
                        bg="#FFF"
                        number="LISENCE DISK"
                        source={img4}
                    />
                    <Cards
                        onPress={()=>this.props.navigation.navigate('Licence Disk Application')}
                        icon="ios-heart-dislike"
                        title="Apply For Renewal Of"
                        bg="#FFF"
                        number="LISENCE DISK"
                        source={img5}
                    />
                </ScrollView>
                <View style={{marginBottom:15}}>
                    <Buttons 
                        name="Licence Applications are now"
                        number="R 300"
                    />
                     <Buttons 
                        name="Get Licence Disc For only"
                        number="R 240"
                    />

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1c2732"
    },
    card: {
        width: 300,
        height: 190,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden',
        padding: 10,
        alignSelf: 'center',
        backgroundColor: '#3498db'
      },
      leftColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 5
      },
      rightColumn: {
        flex: 2,
       
      },
      profilePicture: {
        width: 100,
        height: 120,
      },
      horizontalLine: {
          height: 4,
          width: '100%',
          backgroundColor: '#D3D3D3',
          marginTop: 5,
          marginBottom: 5,
      },
      text2: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold'
      },
    title:{
        color:"#6A706E",
        width:100,
        fontSize:12,
        fontWeight:"bold"
    },
    number:{
        color:"#FFF",
        width:100,
        fontSize:15,
        fontWeight:"bold",
        marginTop:-10,
    },
    textCovid:{
        transform:[{ rotate : "-90deg"}],
        color:"#3a4b4f",
        fontSize:17,
        width:90,
        marginLeft:-35,
        fontWeight:'bold',
        marginTop:20
    },
    noCard:{
        marginBottom:10,
        color:'#FFF',
        alignSelf:"center"
    },
    map:{
        height:200,
        paddingTop:25,
        paddingHorizontal:20,
        marginBottom:15
    },
    col:{
        flexDirection:'row'
    },
    minusIcon:{
        marginTop:-20,
        marginLeft:5
    },
    avatarContainer:{
        width:"50%",
        alignItems:'flex-end',
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:20
    },
    textDash:{
        color:"#FFF",
        fontSize:20,
        alignSelf:'center',
        marginTop:15,
        fontWeight:'bold'
    },
    colContainer:{
        flexDirection:"row",
        paddingHorizontal:30,
        marginTop:40,
        alignItems:'center',
    },
    textGlobal:{
        fontWeight:"bold",
        fontSize:16,
        color:"#6a706e"
    },
    textRussia:{
        fontWeight:"bold",
        fontSize:16,
        paddingHorizontal:30,
        color:"#6a706e"
    },
    reloadContainer:{
        backgroundColor:"#FFF",
        elevation:2,
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:"center",
        marginLeft:50
    },
    text: {
        marginTop: 200,
        textAlign: 'center',
        fontSize: 24,
        color: 'white'
    },
    circleCard: {
        borderRadius: 150,
        overflow: 'hidden', 
        height: 190,
        width: 200,
        padding: 20,
        border: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    imgprofile: {
        display: 'none'
    },
    row: {
        justifyContent: "space-between",
    },
    content: {
        width: 200
    },
    content2: {
        display: 'none'
    }

});

export default connect(mapStateToProps)(Home);