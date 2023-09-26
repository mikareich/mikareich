/** Make a number a two digit number */
export default function makeTwoDigitNumber(number: number): string {
  return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
}
