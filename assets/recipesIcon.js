import * as React from 'react'
import Svg, { Mask, Rect, Path } from 'react-native-svg'

export default function RecipesIcon(props) {
    const fillColor = props.selected ? '#fff' : '#5f5f5f'

    return(
        <Svg width='17' height='16' viewBox='0 0 17 16' {...props}>
            <Mask id='mask0_575_15' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='16'>
                <Rect x='0.671875' width='16' height='16' fill='#5f5f5f' />
            </Mask>
            
            <Svg mask='url(#mask0_575_15)'>
                <Path d='M2.67188 14V2H11.3385L14.6719 5.33333V14H2.67188ZM4.00521 12.6667H13.3385V6H10.6719V3.33333H4.00521V12.6667ZM5.33854 11.3333H12.0052V10H5.33854V11.3333ZM5.33854 6H8.67188V4.66667H5.33854V6ZM5.33854 8.66667H12.0052V7.33333H5.33854V8.66667Z' fill={fillColor} />
            </Svg>
        </Svg>
    )
}
