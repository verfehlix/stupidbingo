/* eslint-disable react/prop-types */
import React from 'react'

import laxLogo from './lax.png'

interface NumberProps {
    number: number
    numberState: boolean
    isClickable?: boolean
    onClick?: () => void
}

const Number: React.FC<NumberProps> = ({
    number,
    numberState,
    isClickable = false,
    onClick,
}) => (
    <div
        onClick={(): void => {
            if (isClickable && onClick) {
                onClick()
            }
        }}
        style={
            numberState
                ? {
                      border: '1px solid black',
                      width: '25px',
                      height: '25px',
                      padding: '1rem',
                      lineHeight: '25px',
                      textAlign: 'center',
                      backgroundColor: 'green',
                      color: 'white',
                  }
                : {
                      border: '1px solid black',
                      width: '25px',
                      height: '25px',
                      lineHeight: '25px',
                      textAlign: 'center',
                      padding: '1rem',
                      color: 'black',
                  }
        }
    >
        {number === 1337 ? (
            <img
                style={{
                    width: '45px',
                    height: '45px',
                    marginTop: '-10px',
                    marginLeft: '-10px',
                }}
                alt="lax"
                src={laxLogo}
            ></img>
        ) : (
            number
        )}
    </div>
)

export default Number
