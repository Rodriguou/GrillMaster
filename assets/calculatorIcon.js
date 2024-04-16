import * as React from 'react'
import Svg, { Mask, Rect, Path } from 'react-native-svg'

export default function CalculatorIcon(props) {
    const fillColor = props.selected ? '#fff' : '#5f5f5f'

    return(
        <Svg width='16' height='16' viewBox='0 0 16 16' {...props}>
            <Mask id='mask0_575_9' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='16' height='16'>
                <Rect width='16' height='16' fill='#d9d9d9' />
            </Mask>
            
            <Svg mask='url(#mask0_575_9)'>
                <Path d='M5.33333 12H6.33333V10.6667H7.66667V9.66667H6.33333V8.33333H5.33333V9.66667H4V10.6667H5.33333V12ZM8.66667 11.5H12V10.5H8.66667V11.5ZM8.66667 9.83333H12V8.83333H8.66667V9.83333ZM9.4 7.3L10.3333 6.36667L11.2667 7.3L11.9667 6.6L11.0333 5.63333L11.9667 4.7L11.2667 4L10.3333 4.93333L9.4 4L8.7 4.7L9.63333 5.63333L8.7 6.6L9.4 7.3ZM4.16667 6.13333H7.5V5.13333H4.16667V6.13333ZM3.33333 14C2.96667 14 2.65278 13.8694 2.39167 13.6083C2.13056 13.3472 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13056 2.65278 2.39167 2.39167C2.65278 2.13056 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3472 2.13056 13.6083 2.39167C13.8694 2.65278 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8694 13.3472 13.6083 13.6083C13.3472 13.8694 13.0333 14 12.6667 14H3.33333ZM3.33333 12.6667H12.6667V3.33333H3.33333V12.6667Z' fill={fillColor} />
            </Svg>
        </Svg>
    )
}
