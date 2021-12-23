import { useSearchParams } from 'react-router-dom'

const PageTwo = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const params = []
    const search = {}
    for (let entry of searchParams.entries()) {
        params.push(entry[0] + '=' + entry[1])
        search[entry[0]] = entry[1]
    }

    const appendParam = () => {
        setSearchParams({...search, rand: Math.random()})
    }

    return (
        <>
            <h1>Page Two</h1>
            <ul>
                {params.map(item => <li key={item}>{item}</li>)}
            </ul>
            <button onClick={appendParam}>Append param</button>
        </>
    )
}

export default PageTwo