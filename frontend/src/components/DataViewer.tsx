import React, { useEffect, useState } from "react";

type DataViewerProps = {
}

type Data = {
    name: string,
    age: number,
    date: string
}


export const DataViewer = ({ }: DataViewerProps): React.JSX.Element => {
    const [data, setData] = useState<Data>({ name: "Luca", age: 29, date: "Today" })
    useEffect(() => {
        const getData =
            async () => {
                const body = await fetch("/api/data")
                console.log(`${body.status} - ${body.statusText}`)
                const jsonData: Data = await body.json()
                setData(
                    jsonData
                )
            }
        getData()
        return () => { }
    }, [])
    return (
        <div>
            <header className="App-header">
                <h2>Here is your data:</h2>
                {/* Calling a data from setdata for showing */}
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
            </header>
        </div>
    )
}
