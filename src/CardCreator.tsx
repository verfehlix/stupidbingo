/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Number from './Number'

const NUMBER_MIN = 1
const NUMBER_MAX = 75
const NUMBERS_IN_GRID = 25

const CardCreator: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([])

    const generateRandomNumber = (): number => {
        return Math.floor(Math.random() * NUMBER_MAX) + NUMBER_MIN
    }

    useEffect(() => {
        const newNumbers: number[] = []

        for (let index = 0; index < NUMBERS_IN_GRID; index++) {
            let randomNumber = generateRandomNumber()

            while (newNumbers.includes(randomNumber)) {
                randomNumber = generateRandomNumber()
            }

            newNumbers.push(randomNumber)
        }

        newNumbers[12] = 1336

        setNumbers(newNumbers)
    }, [])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            <h1>Bingo Card Creator!</h1>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                }}
            >
                {numbers.map((number, index) => {
                    if (index % 5 === 4) {
                        return (
                            <React.Fragment key={number + 1}>
                                <Number number={number} numberState={false} />
                                <div
                                    style={{ flexBasis: '100%', height: '0' }}
                                ></div>
                            </React.Fragment>
                        )
                    } else {
                        return (
                            <Number
                                key={number + 1}
                                number={number + 1}
                                numberState={false}
                            />
                        )
                    }
                })}
            </div>
            <em>Drück F5 um eine neue Bingokarte zu generieren!</em>
        </div>
    )
}

export default CardCreator
