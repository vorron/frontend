export default function testData(value1: number, value2: number) {
  return {
    calculationTime: new Date(),
    result: `The sum of the number ${value1} and the number ${value2} is ${value1 + value2}!`,
    flag: true
  }
}
