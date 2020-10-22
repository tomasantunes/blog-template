import React from "react";
import "./Article.css";

class Article extends React.Component {
    render() {
        return (
            <div className="article">
                <div className="article-header">
                    <h1>{this.props.title}</h1>
                    <small>{this.props.author}</small>
                </div>
                <div>{this.props.text}</div>
            </div>
        );
    }
}

export default Article;