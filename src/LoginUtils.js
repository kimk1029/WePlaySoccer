import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { NaverLogin, getProfile } from 'react-native-naver-login';
import RNKakaoLogins from 'react-native-kakao-logins';
import { Alert } from 'react-native';

// 카카오 로그인 시작.
export const kakaoLogin = async () => {
  console.log('   kakaoLogin-------------->   ');
  return new Promise((resolve, reject) => {
    RNKakaoLogins.login((err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(kakaoGetProfile());
      }
    });
  });
};

const kakaoLogout = () => {
  console.log('   kakaoLogout   ');
  RNKakaoLogins.logout((err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    Alert.alert('result', result);
  });
};

// 로그인 후 내 프로필 가져오기.
const kakaoGetProfile = async () => {
  console.log('getKakaoProfile');
  return new Promise((resolve, reject) => {
    RNKakaoLogins.getProfile((err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }

      // this.props.navigation.navigate('JoinMember');
      // console.log(result);
    });
  });
};

export const fbAuth = async () => {
  try {
    let result = null;
    const profile = await LoginManager.logInWithReadPermissions([
      'public_profile',
      'email',
      'user_age_range',
      'user_gender',
    ]);
    if (profile.isCancelled) {
      console.log('Login was cancelled');
      return null;
    } else {
      const tokenData = await AccessToken.getCurrentAccessToken();
      const { accessToken } = tokenData;
      result = await _fbinitUser(accessToken);
      return result;
    }
  } catch (error) {
    console.log(error);
    Alert.alert('로그인에 실패하였습니다.');
  }
};

const _fbinitUser = async token => {
  try {
    const response = await fetch('https://graph.facebook.com/v3.3/me?fields=email,name&access_token=' + token);
    const res = await response.json();
    // console.log(res)
    let user = {};

    // user.name = res.name
    user.id = res.id;
    user.user_friends = res.friends;
    user.email = res.email;
    user.username = res.name;
    user.loading = false;
    user.loggedIn = true;
    // user.avatar = setAvatar(res.id)
    // console.log(user);
    return user;
  } catch (error) {
    Alert.alert('로그인에 실패하셨습니다.');
  }
};

const initials = {
  kConsumerKey: '6xVHeurv4e1OPyxlG2bY',
  kConsumerSecret: '4fUugu4Jan',
  kServiceAppName: 'WePlaySoccer',
  kServiceAppUrlScheme: 'naverlogin_weplaysoccer', // only for iOS
};
// export const naverLoginStart = async () => {
//   console.log('  naverLoginStart');
//   let result = await NaverLogin.login(initials, async (err, token) => {
//     console.log(initials);
//     console.log(token);
//     if (err) {
//       // console.log(err);
//     }

//     return await getNaverProgile(token);;
//   });

//   return result
// }
export const naverLoginStart = async () => {
  return new Promise((resolve, reject) => {
    NaverLogin.login(initials, (err, token) => {
      if (err) reject(err);
      else resolve(getNaverProgile(token));
    });
  });
};

const getNaverProgile = async token => {
  let result = null;
  try {
    result = await getProfile(token);
  } catch (err) {
    console.log(err);
  }
  console.log(result.response);
  return result;
};

const fetchProfile = async () => {
  const profileResult = await getProfile(this.state.theToken);
  console.log(profileResult);
  if (profileResult.resultcode === '024') {
    Alert.alert('로그인 실패', profileResult.message);
    return;
  }
  this.props.navigation.navigate('Second', {
    profileResult,
  });
};
