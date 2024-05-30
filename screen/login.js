import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import Inpt from "../components/inpt";
import { LinearGradient } from 'expo-linear-gradient';
import Btn from "../components/Btn";
import { useState } from "react";




export default function Login({ navigation }) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <LinearGradient colors={['#D2FFC7', '#FFFFFF']} style={{ flex: 1 }}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}>
                      
                    <View style={{ flex: 1 }}>
                        <View style={styles.Formcontainer}>
                            <Text style={styles.txt}>Email</Text>


                            <Inpt Ph="email"
                                mt={10}
                                mb={30}
                                mr={30}
                                ml={30}
                                v={email}
                                change={setEmail}
                            />
                            <Text style={styles.txt}>Password</Text>
                            <Inpt
                                Ph="Password"
                                ST={true}
                                mt={10}
                                mb={30}
                                mr={30}
                                ml={30}
                                v={password}
                                change={setPassword}
                            />


                            <TouchableOpacity>
                                <Text style={styles.smalltxt}>Forget Password</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btncontainer}>
                            <Btn title={'login'} press={()=> navigation.navigate("homeApp")} W={260}/>
                        </View>
                        <View style={styles.registercontainer}>
                            <Text style={styles.rgtxt}  >Dont have an account?</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('signup') }}  >
                                <Text style={[styles.rgtxt, { color: 'blue' }]} >Register</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
            

                </LinearGradient>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    Formcontainer: {
        flex: 1,
        justifyContent: "center",
        marginTop: 100,


    },
    smalltxt: {
        fontSize: 10,
        textAlign: "right",
        marginRight: 30,
        color: '#727272', fontFamily: 'regular'
    },
    txt: {

        fontSize: 20,
        marginLeft: 30, fontFamily: 'regular'
    },
    btncontainer: {
        flex: 0.5,
    },
    registercontainer: {
        flexDirection: 'row',
        justifyContent: "center",

    },
    rgtxt: {
        marginRight: 5,
        fontSize: 14,
        marginBottom: 5, fontFamily: 'regular'
    }

})
