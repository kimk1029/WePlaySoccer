import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    Dimensions,
    Image,
    TouchableOpacity,
    NativeButton,
    Alert
} from 'react-native';
import RNKakaoLogins from 'react-native-kakao-logins';
import {NaverLogin, getProfile} from 'react-native-naver-login';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
const instructions = Platform.select({
    ios: 'IOS',
    android:
        'android'
});

const initials = {
    kConsumerKey: '6xVHeurv4e1OPyxlG2bY',
    kConsumerSecret: '4fUugu4Jan',
    kServiceAppName: 'WePlaySoccer',
    kServiceAppUrlScheme: 'naverlogin_weplaysoccer', // only for iOS
};

const joinEmail = 'Weplay를 처음 방문하셨다면?? 회원가입을 클릭하세요';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isKakaoLogging: false,
            token: 'token has not fetched',
        };
    }

    // 카카오 로그인 시작.
    kakaoLogin() {
        console.log('   kakaoLogin-------------->   ');
        RNKakaoLogins.login((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            Alert.alert('result', result.token);
        });
    }

    kakaoLogout() {
        console.log('   kakaoLogout   ');
        RNKakaoLogins.logout((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            Alert.alert('result', result);
        });
    }

// 로그인 후 내 프로필 가져오기.
    getProfile() {
        console.log('getKakaoProfile');
        RNKakaoLogins.getProfile((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            Alert.alert('result', result);
        });
    }

    async fetchProfile() {
        const profileResult = await getProfile(this.state.theToken);
        console.log(profileResult);
        if (profileResult.resultcode === '024') {
            Alert.alert('로그인 실패', profileResult.message);
            return;
        }
        this.props.navigation.navigate('Second', {
            profileResult,
        });
    }

    async naverLoginStart() {
        console.log('  naverLoginStart  ed');
        NaverLogin.login(initials, (err, token) => {
            console.log(initials);
            console.log(token);
            if (err) {
                // console.log(err);
            }
        });
    }
    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then((result)=>{
            if(result.isCancelled) {
                console.log('Login was cancelled')
            }else{
                console.log(result.grantedPermissions.toString());
            }
        }, (err)=>{
            console.log("err"+err);
        })
    }

    render() {
        return (
            <View Style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Image style={logo.logoIcon} source={require('../img/loginpage/bitmap2x.png')}/>
                <Image style={logo.logoTxt} source={require('../img/loginpage/logo2x.png')}/>

                <TouchableOpacity
                    onPress={() =>this._fbAuth()}>
                <Image style={btnImg.facebookJoinBtn} source={require('../img/loginpage/facebook2x.png')}/>
                </TouchableOpacity>
                {/* <NativeButton>ddd</NativeButton> */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('JoinMember')}>
                    <Image style={btnImg.naverJoinBtn} source={require('../img/loginpage/naver2x.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.naverLoginStart()}>
                    <Image style={btnImg.naverJoinBtn} source={require('../img/loginpage/naver2x.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.kakaoLogin()}>
                    <Image style={btnImg.kakaoJoinBtn} source={require('../img/loginpage/kakao2x.png')}/>
                </TouchableOpacity>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text style={styles.joinEmail}>{joinEmail}</Text>
            </View>
        );
    }
}


const logo = StyleSheet.create({
    logoIcon: {
        marginTop: 80
    },
    logoTxt: {
        marginTop: 30,
        marginBottom: 200,
        height: 23
    }

});

const btnImg = StyleSheet.create({
    facebookJoinBtn: {
        height: 48,
        marginBottom: 10,

    },
    naverJoinBtn: {
        height: 48,
        marginBottom: 10
    },
    kakaoJoinBtn: {
        height: 48,
        marginBottom: 10
    }

});

const styles = StyleSheet.create({

    joinEmail: {
        color: "grey",
        textAlign: "center"
    },

    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column'
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 45
    },

});
