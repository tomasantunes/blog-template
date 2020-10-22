import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="font-weight-light">{this.props.blog_title}</h1>
                            <p className="lead">{this.props.blog_subtitle}</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;