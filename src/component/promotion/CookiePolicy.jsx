import './CookiePolicy.css'

export default function CookiePolicy(props) {

    const { cookiePolicy } = props

    return (
        <div className="cookiePolicyContainer">
            <div className="cookieContent">
                <div className="cookieTitleLine">
                    <div id="cookiePolicyName">쿠키 정책</div>
                    <div className="cookieExplanation">
                        <div id="cookieElem">쿠키 가격 1개당 {cookiePolicy['cookiePrice']}원</div>
                        <div id="cookieElem">쿠키 {cookiePolicy['cookieQuantityPerEpisode']}개당 웹툰 1개 구매가능</div>
                    </div>
                </div>
            </div>
        </div>
    )
}