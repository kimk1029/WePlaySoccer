import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
export const fbAuth = async () => {
    try {
        let result = null;
        const profile = await LoginManager.logInWithReadPermissions(['public_profile']);
        if (profile.isCancelled) {
            console.log('Login was cancelled')
            return null;
        } else {
            const tokenData = await AccessToken.getCurrentAccessToken();
            const { accessToken } = tokenData
            result = await _fbinitUser(accessToken);
            return result;
        }
        
    } catch (error) {
        console.log(error);
        alert('로그인에 실패하였습니다.')
    }

}

const _fbinitUser = async (token) => {
    try {
        const response = await fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token);
        const res = await response.json();
        // console.log(res)
        let user = {};

        // user.name = res.name
        user.id = res.id
        user.user_friends = res.friends
        user.email = res.email
        user.username = res.name
        user.loading = false
        user.loggedIn = true
        // user.avatar = setAvatar(res.id)
        // console.log(user);
        return user;

    } catch (error) {
        alert('로그인에 실패하셨습니다.')
    }

}