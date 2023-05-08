import {ArrayOfPrimitivesInputProps} from 'sanity'
export interface WeightedArrayOptions {
  arrayField: string
  labelField: string
}

export type WeightedArrayInputProps = ArrayOfPrimitivesInputProps<number> & {
  weightedArrayOptions: WeightedArrayOptions
};
