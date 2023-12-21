import { useParams } from "react-router-dom";

function Article () {
    const {id} = useParams ()
    return <h1>Hello Article {id}</h1>
}

export default Article;