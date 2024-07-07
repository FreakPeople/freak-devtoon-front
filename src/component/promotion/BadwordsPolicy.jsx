import './BadwordsPolicy.css'

export default function BadwordsPolicy(props) {

    const { badwordsPolicy } = props

    return (
        <div className="badwordsPolicyContainer">
            <div className="badwordsContent">
                <div className="badwordsTitleLine">
                    <div id="badwordsPolicyName">비속어 정책</div>
                    <div className="badwordsExplanation">
                        <div id="badwordsElem">{badwordsPolicy['warningThreshold']}번 비속어 경고 시 아이디 정지</div>
                    </div>
                </div>
            </div>
        </div>
    )
}