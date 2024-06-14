
function Promotion(props) {

    const promotionCard = {
        border: '1px solid black'
    }

    const {promotion} = props;

    return (
        <div style={promotionCard}>
            <p>{promotion['promotionId']}</p>
            <p>{promotion['description']}</p>
            <p>{promotion['discountType']}</p>
            <p>{promotion['discountRate']}</p>
            <p>{promotion['discountQuantity']}</p>
            <p>{promotion['isDiscountDuplicatable']}</p>
            <p>{promotion['startDate']}</p>
            <p>{promotion['endDate']}</p>
        </div>
    )
}

export default Promotion;