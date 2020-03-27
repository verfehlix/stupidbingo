import React, { useState } from 'react'
import Number from './Number'

const NUMBER_MAX = 75

const StupidBingo: React.FC = () => {
    const [numberStates, setNumberStates] = useState<boolean[]>(
        Array(NUMBER_MAX).fill(false)
    )
    const [latestNumber, setLatestNumber] = useState<number>(0)

    const generateRandomIndex = (): number => {
        return Math.floor(Math.random() * NUMBER_MAX)
    }

    const addNumberButtonClicked = (): void => {
        let flipIndex = generateRandomIndex()

        while (numberStates[flipIndex]) {
            flipIndex = generateRandomIndex()
        }

        const newNumberStates = [...numberStates]
        newNumberStates[flipIndex] = true
        setNumberStates(newNumberStates)
        setLatestNumber(flipIndex + 1)
    }

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h3>Stupid Bingo</h3>
                <h1>{latestNumber}</h1>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {numberStates.map((numberState, index) => {
                    if (index % 15 === 14) {
                        return (
                            <React.Fragment key={index}>
                                <Number
                                    number={index + 1}
                                    numberState={numberState}
                                />
                                <div
                                    style={{ flexBasis: '100%', height: '0' }}
                                ></div>
                            </React.Fragment>
                        )
                    } else {
                        return (
                            <Number
                                key={index}
                                number={index + 1}
                                numberState={numberState}
                            />
                        )
                    }
                })}
            </div>
            <div
                style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <button onClick={addNumberButtonClicked}>Neue Zahl!</button>
            </div>
        </div>
    )
}

export default StupidBingo
