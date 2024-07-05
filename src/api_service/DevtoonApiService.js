import axios from "axios";

const BASE_URL = 'http://localhost:8080'

// 로그인 인증 요청
export const loginApiRequest = async (email, password) =>
    await axios({
        method: 'POST',
        url: BASE_URL + '/v1/auth/authenticate',
        data: {
            email: email,
            password: password
        },
    })

// 현재 적용가능한 모든 프로션 조회 요청
export const retrieveAllPromotionsNowApiRequest = async () =>
    await axios({
        method: 'GET',
        url: BASE_URL + '/v1/promotions/now'
    })

// 모든 웹툰 목록 조회하기
export const retrieveAllDevtoonsApiRequest = async () =>
    await axios({
        method: 'GET',
        url: BASE_URL + '/v1/webtoons'
    })

// 댓글 작성 요청하기
export const writeCommentApiRequest = async (webtoonId, commentContent) =>
    await axios({
        method: 'POST',
        url: BASE_URL + '/v1/comments',
        data: {
            webtoonId: webtoonId,
            detailId: '1',
            webtoonViewerId: '1',
            content: commentContent
        }
    })

// 특정 웹툰 조회하기
export const retrieveDevtoonApiRequest = async (webtoonId) =>
    await axios({
        method: 'GET',
        url: BASE_URL + '/v1/webtoons/' + webtoonId
    })

// 특정 웹툰의 댓글 조회하기
export const retrieveAllCommentApiRequest = async (webtoonId) =>
    await axios({
        method: 'GET',
        url: BASE_URL + '/v1/comments?webtoonId=' + webtoonId + '&sort=createdAt,desc'
    })

// 특정 회원 조회
export const retrieveMemberApiRequest = async (memberId) =>
    await axios({
        method: 'GET',
        url: BASE_URL + '/v1/members/' + memberId,
        headers: {
            Authorization: 'Bearer todo token'
        }
    })

// 특정 회원 비속어 카운트 조회
export const retrieveBadWordsWarningCountApiRequest = async (memberId) =>
    await axios({
        method: 'GET',
        url: BASE_URL + '/v1/bad-words-warning-count?webtoonViewerNo=' + memberId
    })

// 특정 회원 쿠키지갑 조회
export const retrieveCookieWalletApiRequest = async (memberId) =>
    await axios({
        method: 'GET',
        url: BASE_URL + '/v1/cookie-wallets?webtoonViewerNo=' + memberId
    })
