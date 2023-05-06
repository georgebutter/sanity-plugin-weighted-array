import {WeightedArrayOptions} from './types'

// Allow arrays to have a weightedArray option in the schema
declare module '@sanity/types' {
  export interface ArrayOptions {
    weightedArray?: WeightedArrayOptions
  }
}

export type {WeightedArrayOptions} from './types'

export {weightedArray} from './plugin'
