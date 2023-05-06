import {ArrayOfPrimitivesInputProps} from 'sanity'

export interface WeightedArrayOptions {
  arrayField: string
  labelField: string
}

// Allow arrays to have a weightedArray option in the schema
declare module '@sanity/types' {
  export interface ArrayOptions {
    weightedArray?: WeightedArrayOptions
  }
}


export type WeightedArrayInputProps = ArrayOfPrimitivesInputProps & {
  weightedArrayOptions: WeightedArrayOptions
};
