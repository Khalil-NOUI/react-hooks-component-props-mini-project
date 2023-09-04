import React from "react";
import Article from "./Article"

function ArticleList(props) {
    return(
        <Article posts = {props.posts} />
    )
}

export default ArticleList;