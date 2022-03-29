import { StyleSheet, TextInput, View, Text, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback , Keyboard } from 'react-native';
import React, {useState} from 'react';


const LoginScreen = ({ navigation }) => {
    const userData = {
        email: null,
        password: null
    }
    
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [user, setUser] = useState(userData)
    

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log("keyboardHide", isShowKeyboard);
    };
    const navigateTo = (dest) => { navigation.navigate(dest) };

    const fetchLogin = () => {
        if (user.email && user.password) {
            keyboardHide()
            console.log("user Login", user);
            setUser(userData)
            navigateTo("HomeScreen")
            
        } else {
            alert("Заполните все поля!")
        }
    };

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require("../assets/images/PhotoBG.jpg")}>
                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.headerTitle}>Войти</Text>

                            </View>

                            <TextInput
                                placeholder='Адрес электронной почты'
                                style={styles.input}
                                onChangeText={(value) => setUser((prevState) => ({ ...prevState, email: value }))}
                                value={user.email}
                                onFocus={()=>setIsShowKeyboard(true)}
                                />
                            <TextInput
                                placeholder='Пароль'
                                style={styles.input}
                                secureTextEntry={true}
                                onChangeText={(value) => setUser((prevState) => ({ ...prevState, password: value }))}   
                                value={user.password}
                                onFocus={()=>setIsShowKeyboard(true)}
                            />
                            <TouchableOpacity style={styles.btn} onPress={fetchLogin}>
                                <Text style={styles.btnText}>Войти</Text>
                            </TouchableOpacity>

                            <View style={{...styles.regLink, marginBottom: isShowKeyboard? 32: 144 }}>
                                <Text style={styles.regLinkText} onPress={() => navigateTo("RegistrationScreen")}>Нет аккаунта? Зарегистрироваться</Text>

                            </View>


                        </View>

                    </KeyboardAvoidingView>


                </ImageBackground>

            </View>

        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc',
    },
    bgImage: {
        flex: 1,
        justifyContent: "flex-end",
    },
    form: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    header: {
        marginTop: 32,
        marginBottom: 32,
        alignItems: "center"
    },
    headerTitle: {
        fontFamily: "RobotoMedium",
        fontSize: 30,

    },
    input: {
        marginHorizontal: 16,
        marginBottom: 16,
        padding: 16,
        height: 50,
        backgroundColor: "#F6F6F6",
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: "RobotoRegular",

    },
    btn: {
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        height: 50,
        paddingBottom: 16,
        paddingTop: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 27,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: "#FFFFFF"
    },
    regLink: {
        alignItems: "center",

    },
    regLinkText: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: "#1B4371",
    }
});

export default LoginScreen;
