import { useParams } from 'react-router-dom'
import { articles } from './BlogData.js'
import NotFound from '../pages/NotFound.js'

const BlogArticle = () => {
    const {id} = useParams()
    const article = articles.find(article => article.id == id)
    return article ? <h2>{article.title}</h2> : <NotFound />
}

export default BlogArticle