import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = (props) => {
    const { children, to, ...others } = props
    const resolved = useResolvedPath(to)
    const match = useMatch({path: resolved.pathname, end: to === '/' ? true : false})

    const style = {
        color: match ? 'var(--color-active)' : 'white'
    }

    return (
        <Link to={to} style={style} {...others}>
            {children}
        </Link>
    )
}

export default CustomLink