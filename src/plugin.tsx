import React from 'react'
import {definePlugin} from 'sanity'
import WeightedArrayInput from './WeightedArrayInput/WeightedArrayInput'
import {WeightedArrayInputProps} from './types'
// import {WeightedArrayConfig} from './types'

export const weightedArray = definePlugin(() => ({
  name: 'sanity-plugin-weighted-array',
  form: {
    components: {
      input: (props) => {
        if (props.schemaType.jsonType === 'array' && props.schemaType.options?.weightedArray) {
          const weightedArrayOptions = props.schemaType.options.weightedArray

          return (
            <WeightedArrayInput
              {...(props as unknown as WeightedArrayInputProps)}
              weightedArrayOptions={weightedArrayOptions}
            />
          )
        }
        return props.renderDefault(props)
      }
    }
  }
}))
