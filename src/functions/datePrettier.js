export default function datePrettier(dateUnpretty) {
    const date = new Date(dateUnpretty)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    return [hours, minutes].join(':') + ' ' + [day, month, year].join('.')
}