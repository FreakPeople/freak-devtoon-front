import axios from "axios";

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

let jwtToken = '';

apiClient.interceptors.request.use(
    (config) => {
        if (jwtToken) {
            config.headers.Authorization = jwtToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const setJwtToken = (token) => {
    jwtToken = token;
};

// 로그인 인증 요청
export const loginApiRequest = (email, password) =>
    apiClient.post(
        '/v1/auth/authenticate',
        {
            email: email,
            password: password
        }
    )

// 현재 적용가능한 모든 프로션 조회 요청
export const retrieveAllPromotionsNowApiRequest = ()=>
    apiClient.get('/v1/promotions/now')

// 모든 웹툰 목록 조회하기
export const retrieveAllDevtoonsApiRequest = () =>
    apiClient.get('/v1/webtoons')

// 댓글 작성 요청하기
export const writeCommentApiRequest = (webtoonId, commentContent) =>
    apiClient.post(
        '/v1/comments',
        {
            webtoonId: webtoonId,
            detailId: '1',
            webtoonViewerId: '1',
            content: commentContent
        }
    )

// 특정 웹툰 조회하기
export const retrieveDevtoonApiRequest = (webtoonId) =>
    apiClient.get('/v1/webtoons/' + webtoonId)

// 특정 웹툰의 댓글 조회하기
export const retrieveAllCommentApiRequest = (webtoonId) =>
    apiClient.get('/v1/comments?webtoonId=' + webtoonId + '&sort=createdAt,desc')

// 나의 회원 정보 조회
export const retrieveMemberApiRequest = () =>
    apiClient.get('/v1/members/my')

// 나의 비속어 카운트 조회
export const retrieveBadWordsWarningCountApiRequest = () =>
    apiClient.get('/v1/bad-words-warning-count/my')

// 나의 쿠키지갑 조회
export const retrieveCookieWalletApiRequest = () =>
    apiClient.get('/v1/cookie-wallets/my')

// 게시글(데브툰) 작성 요청
export const registerDevtoonApiRequest = (formData) =>
    apiClient.post(
        '/v1/webtoons',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );

