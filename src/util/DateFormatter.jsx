
// "2024-07-07T19:33:41.597413" ->  예: "2024년 7월 7일 오후 07:33"
export default class DateFormatter {
    static format(dateTimeString) {
        if (!dateTimeString) {
            return null
        }
        let date = new Date(dateTimeString)

        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };

        const formattedDate = new Intl.DateTimeFormat('default', options).format(date);
        return formattedDate;
    }
}