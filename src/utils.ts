/**
 * Formats the percentages to a maximum of 2 decimal places
 * @param {number} number - number to format to maximum 2 decimal places
 * @return {string} - formatted number
 */
export function formatPercentage(number: number): string {
  return number.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })
}


export function getValuesFromArray(arr: any[], array: any[]): number[] {
  return arr.map((_item, index) => (100 / array.length) * (index + 1))
}

export function getValuesFromPercentages(percentages: number[]): number[] {
  const vals = percentages.slice(0, -1)
  const values = vals.map((val, index) => {
    if (index === 0) {
      return val
    }
    return vals.reduce((previous, current, i) => {
      if (i > index) {
        return previous
      }
      return previous + current
    })
  })
  return values
}

export function getPercentagesFromValues(values: number[]): number[] {
  const vals = [...values, 100]
  const percentages = vals.map((val, index) => {
    if (index === 0) {
      return val
    }
    if (index === vals.length - 1) {
      return 100 - vals[index - 1]
    }
    return val - vals[index - 1]
  })
  return percentages
}


export function isOdd(number: number): boolean {
  return Math.abs(number % 2) === 1
}

export function isEven(number: number): boolean {
  return number % 2 === 0
}
