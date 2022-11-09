import { createAsyncThunk } from "@reduxjs/toolkit";
import { membersApis } from "../../api/instance"
import axios from 'axios';
// import { delCookie } from "../../cookie/cookie"


export const __kakaoLogin = (code) => {
    return function (dispatch, getState) {
        // membersApis.loginAX(code)
        axios.get(`http://54.180.151.168/user/kakao/callback?code=${code}`)
            .then((res) => {
                console.log("넘어온 값", res); // 토큰이 넘어올 것임
                const Access_Token = res.headers.access_token;
                localStorage.setItem("token", Access_Token);
                localStorage.setItem("nickName", res.data.data.accountName);
                localStorage.setItem("profileImage", res.data.data.profileImage);
                localStorage.setItem("ageRange", res.data.data.ageRange);
                localStorage.setItem("email", res.data.data.email);
                localStorage.setItem("gender", res.data.data.gender);
                // // 토큰 받았고 로그인됐으니 메인으로 화면 전환시켜줌
                window.location.replace("/")
            })
            .catch((error) => {
                console.log("소셜로그인 에러", error);
                window.alert("로그인에 실패하였습니다.");
                // 로그인 실패하면 로그인 화면으로 돌려보냄
                window.location.replace("/login");
            })
    }
};


// //로그아웃 Thunk
// export const __logout = createAsyncThunk(
//     "members/__logout",
//     async (payload, thunkAPI) => {
//         try {
//             loginApis.logoutAX()
//                 .then((res) => {
//                     if (res.data.status === 200) {
//                         delCookie("Access_Token")
//                         delCookie("nickname")
//                         alert("로그아웃 되었습니다")
//                         window.location.replace("/")
//                     }
//                 })
//                 .catch((error) => {
//                     if (error.response.data.status === 400) {
//                         delCookie("Access_Token")
//                         delCookie("nickname")
//                         alert("로그아웃 되었습니다")
//                         window.location.replace("/")
//                     }

//                 })

//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// )

