/* eslint-disable react/display-name, react/prop-types */
import React, {useState, useEffect} from 'react'
import {Card, Stack} from '@sanity/ui'
import get from 'lodash/get'
import {WeightedArrayInputProps} from '../types'
import {PatchEvent, set, useFormValue} from 'sanity'
import {useRanger} from 'react-ranger'

import {getPercentagesFromValues, getValuesFromArray} from '../utils'
import {handleStyle, segmentStyle, trackStyle} from './WeightedArrayInput.styles'
import {WeightedArrayLabel} from '../WeightArrayLabel/WeightedArrayLabel'

const WeightedArrayInput: React.FC<WeightedArrayInputProps> = function ({
  weightedArrayOptions,
  onChange,
  value
}) {
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const {arrayField, labelField} = weightedArrayOptions
  const formValue = useFormValue([])
  const array = get(formValue, arrayField) || []
  const [percentages, setPercentages] = useState<Array<number>>([100])
  const [values, setValues] = useState<Array<number>>([])
  const {getTrackProps, segments, handles} = useRanger({
    min: 0,
    max: 100,
    stepSize: 1,
    values,
    onChange: setValues,
    onDrag: (vals) => {
      if (
        vals[activeIndex - 1] >= vals[activeIndex] ||
        vals[activeIndex + 1] <= vals[activeIndex]
      ) {
        return
      }
      setValues(vals)
    }
  })

  useEffect(() => {
    const arr = Array.from({length: array.length - 1})
    if (arr.length < 1) {
      return
    }

    setValues(getValuesFromArray(arr, array))
  }, [array])

  useEffect(() => {
    setPercentages(getPercentagesFromValues(values))
  }, [values])

  useEffect(() => {
    onChange(PatchEvent.from([set(percentages)]))
  }, [percentages])

  return array ? (
    <Stack space={4}>
      <WeightedArrayLabel
        percentages={percentages}
        array={array}
        labelField={labelField}
        alternate="odd"
      />
      <div
        {...getTrackProps({
          style: trackStyle
        })}
      >
        {segments.map(({getSegmentProps}, i) => {
          const props = getSegmentProps({
            style: segmentStyle(i)
          })
          return <div {...props} key={props.key} />
        })}
        {handles.map(({active, getHandleProps}, i) => {
          const props = getHandleProps({
            style: handleStyle(active)
          })
          return (
            <button
              type="button"
              {...props}
              onMouseDown={function onMouseDown(e) {
                setActiveIndex(i)
                props.onMouseDown(e)
              }}
              key={props.key}
            />
          )
        })}
      </div>
      <WeightedArrayLabel
        percentages={percentages}
        array={array}
        labelField={labelField}
        alternate="even"
      />
    </Stack>
  ) : (
    <Card>The asscoiated array field is missing</Card>
  )
}

export default WeightedArrayInput

/* eslint-enable react/display-name, react/prop-types */
