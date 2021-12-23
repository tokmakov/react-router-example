import { useNavigate, createSearchParams } from 'react-router-dom'

const PageOne = () => {
    const navigate = useNavigate()
    const params = { from: 'OnePage', now: Date.now().toString() }
    const search = '?' + createSearchParams(params)

    const gotoPageTwo = () => {
        navigate({
            pathname: '/page-two',
            search: search,
        })
    }

    return (
        <>
            <h1>Page One</h1>
            <button onClick={gotoPageTwo}>Go to Page Two</button>
        </>
    )
}

export default PageOne