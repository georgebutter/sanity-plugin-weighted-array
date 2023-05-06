// import styled from 'styled-components';
import {studioTheme} from '@sanity/ui'
import {CSSProperties} from 'react'


export const trackStyle: CSSProperties = {
  height: '8px',
  width: '100%',
  borderRadius: '4px',
  backgroundColor: '#e9e9e9',
  position: 'relative',
}

const colours = [
  studioTheme.color.light.default.spot.cyan,
  studioTheme.color.light.default.spot.blue,
  studioTheme.color.light.default.spot.magenta,
  studioTheme.color.light.default.spot.red,
  studioTheme.color.light.default.spot.orange,
  studioTheme.color.light.default.spot.yellow,
  studioTheme.color.light.default.spot.green,
]

export const segmentStyle = (index: number): CSSProperties => {

  return ({
    borderRadius: '4px',
    backgroundColor: colours[index % colours.length],
    height: '100%',
  })
}

export const handleStyle = (active: boolean): CSSProperties => ({
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '1.6rem',
  height: '1.6rem',
  borderRadius: '100%',
  whiteSpace: 'nowrap',
  outline: 'none',
  border: 'none',
})

