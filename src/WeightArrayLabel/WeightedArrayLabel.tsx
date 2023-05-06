import React from 'react'
import {Flex, Label} from '@sanity/ui'
import {wrapperStyles} from './WeightedArrayLabel.styles'
import {formatPercentage, isEven, isOdd} from '../utils'

export const WeightedArrayLabel: React.FC<{
  percentages: Array<number>
  array: Array<any>
  labelField: string
  alternate: 'odd' | 'even'
}> = ({percentages, array, labelField, alternate = 'odd'}) => {
  return (
    <Flex>
      {percentages.map((percent, index) => {
        const item = array[index]
        const show = () => {
          if (!item) {
            return false
          }
          if (alternate === 'odd') {
            return isOdd(index)
          }
          return isEven(index)
        }
        const label = item?.[labelField]
        return (
          <div style={wrapperStyles(percent)} key={item?._key}>
            {show() ? (
              <Label>{`${label ? `${label} - ` : ''}${formatPercentage(percent)}%`}</Label>
            ) : null}
          </div>
        )
      })}
    </Flex>
  )
}
