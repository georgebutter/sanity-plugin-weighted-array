import {CSSProperties} from 'react'

export const wrapperStyles = (width: number): CSSProperties => ({
  display: 'flex',
  justifyContent: 'center',
  width: `${width}%`,
  whiteSpace: 'nowrap',
})
