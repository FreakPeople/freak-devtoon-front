import axios from "axios";

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

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

// 특정 회원 조회
export const retrieveMemberApiRequest = (memberId) =>
    apiClient.get('/v1/members/' + memberId)

// 특정 회원 비속어 카운트 조회
export const retrieveBadWordsWarningCountApiRequest = (memberId) =>
    apiClient.get('/v1/bad-words-warning-count?webtoonViewerNo=' + memberId)

// 특정 회원 쿠키지갑 조회
export const retrieveCookieWalletApiRequest = (memberId) =>
    apiClient.get('/v1/cookie-wallets?webtoonViewerNo=' + memberId)