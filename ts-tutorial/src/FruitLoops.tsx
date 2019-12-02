import React from 'react'

interface FruitLoopsProps {
    fruit: Array<string>
}

const FruitLoops: React.FC<FruitLoopsProps> = (props) => {
    return(
        <ul>
            {props.fruit.map((value, index) => {
                let color: string = value
                return <li key={index} style={{color: color}}>{value}</li>
            })}
        </ul>
    )
}

export default FruitLoops