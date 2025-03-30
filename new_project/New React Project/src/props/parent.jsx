import React, { useState } from 'react'
import Child from './child';

export default function Parent() {

    const [data, setData] = useState(100);

    return (
        <>
            {/* <h1>parent</h1> */}

            <Child value={data}/>

        </>
    )
}
