import * as React from "react"
import Svg, {Path, Rect} from "react-native-svg"

export const IconSvgPlus = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
        >
            <Path fill="#fff" d="M0 0h24v24H0z" />
            <Rect
                x={3}
                y={3}
                width={18}
                height={18}
                rx={5}
                stroke="#000"
                strokeWidth={1.8}
            />
            <Path
                stroke="#000"
                strokeWidth={1.8}
                strokeLinecap="round"
                d="M12.1 6.9v10.2M6.9 11.8h10.2"
            />
        </Svg>
    )
}
