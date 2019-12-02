import React from 'react'

const CustomDate: React.FC = () => {
    const [time, setTime] = React.useState("")

    let getTime = () => {
        setTime(new Date().toTimeString())
    }

    return(
        <div>
            {time}
            <button onClick={getTime}>Get date</button>
        </div>
    )
}

export default CustomDate