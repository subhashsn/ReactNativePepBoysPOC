import React, {Component} from 'react';
//import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { StackActions, NavigationActions, StackNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation';

export default class Login extends Component {
    static navigationOptions = {
        headerStyle:{
          display:'none',
        },
    };

    constructor(props) {
        super(props)
        this.state= {
            name:'',
            password:'',
            nameValidated:true,
            pwdValidated:true
        }
    }

    validate(text, type)
    {
        validAplphabets=/^.{8,50}$/
        if (type=='username')
        {
            if (validAplphabets.test(text))
            {
                this.setState({
                    nameValidated:true,
                    name: text
                })
            }
            else
            {
                this.setState({
                    nameValidated:false,
                })
            }
        }
        else if (type=='password')
        {
            if (validAplphabets.test(text))
            {
                this.setState({
                    pwdValidated:true,
                    password: text
                })
            }
            else
            {
                this.setState({
                    pwdValidated:false,
                })
            }
        }
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.container} scrollEnabled={false} >
            {/* <KeyboardAvoidingView behavior={'padding'} style={styles.container}> */}
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
                    </View>
                    <View style={styles.infoContainer}>
                        <TextInput style={[styles.input, !this.state.nameValidated? styles.inputError:null ]} 
                        placeholder={'Enter Username/Email'} 
                        placeholderTextColor={'white'} 
                        keyboardType={'email-address'} 
                        returnKeyType={'next'}  
                        autoCorrect={false} 
                        autoCapitalize={'none'} 
                        onChangeText={(text)=> this.validate(text, 'username')}
                        onSubmitEditing={()=> this.refs.txtPassword.focus()}
                        ref={'txtUsername'} />

                        <TextInput style={[styles.input, !this.state.pwdValidated? styles.inputError:null ]} 
                        placeholder={'Enter Password'} 
                        placeholderTextColor={'white'} 
                        secureTextEntry={true} 
                        returnKeyType={'go'} 
                        autoCorrect={false} 
                        autoCapitalize={'none'}
                        onChangeText={(text)=> this.validate(text, 'password')}
                        ref={'txtPassword'} />

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login()}>  
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>
            {/* </KeyboardAvoidingView> */}
            </KeyboardAwareScrollView>
            {/* <View>
            
                <View style={styles.bottomContainer}>
                <Text style={styles.labelText}>If you have not registered yet</Text>
                    <TouchableOpacity style={styles.registerButtonContainer}>  
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                </View>
            </View> */}
            </SafeAreaView>
        )
    }

    login = () =>
    {
        // alert("login to home Screen");
        this.props.navigation.navigate("Home", {screen: "Home"});
        // moveToHome();
        //alert(this.refs.txtUsername._lastNativeText)
        /*this.validate(
            this.refs.txtUsername._lastNativeText,
            'username'
        )
        this.validate(
            this.refs.txtPassword._lastNativeText,
            'password'
        )
        if (this.refs.txtUsername._lastNativeText == null)
        {
            this.refs.txtUsername.focus();
            //alert('Opps')
            return;
        }
        else if (this.refs.txtPassword._lastNativeText == null)
        {
            this.refs.txtPassword.focus();
            return;
        }
         if (this.state.nameValidated && this.state.pwdValidated)
        {
            this.moveToHome()
        } */

        
    }

    moveToHome = () =>
    {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
          });
          this.props.navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(13, 13, 13)',
        flexDirection: 'column'
    },
    kbavcontainer: {
        flex: 1,
        backgroundColor: 'rgb(13, 13, 13)',
        flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 200,
        justifyContent: 'space-between',
        //backgroundColor: 'cyan'
    },
     infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        marginTop: 20,
        height: 200,
        padding: 20,
        //backgroundColor = 'red'    
     },
     bottomContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 30,
        //marginTop: 100,
        height: 100,
        padding: 20,
        justifyContent: 'space-between'
        //backgroundColor = 'red'    
     },
    logo: {
        width: 275,
        height: 131
    }, 
    input: {
        height: 40,
        backgroundColor: 'rgb(23, 23, 23)',
        color: '#FFF',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    inputError: {
        borderWidth: 2,
        borderColor: 'red',
    },
    buttonContainer: {
        backgroundColor: 'rgb(207, 31, 45)',
        color: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40
    },
    registerButtonContainer: {
        backgroundColor: 'rgb(8, 92, 153)',
        color: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    },
    labelText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'normal',
        fontSize: 15,
        paddingVertical:20,
        paddingTop: 20,
    }

})