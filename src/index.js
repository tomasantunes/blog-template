import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Article from "./Article";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.getText();
    }

    async getText() {
        const baconipsum = await axios.get("https://baconipsum.com/api/", {
            params: { type: "meat-and-filler" , paras: 5 }
        });
        console.log(baconipsum.data);
        let text = [];
        for (var i in baconipsum.data) {
            text.push(<p key={i}>{baconipsum.data[i]}</p>);
        }
        this.setState({text: text})
    }

    render() {
        return (
            <div>
                <Header blog_title="Blog Title" blog_subtitle="Blog Subtitle" />
                <div className="container">
                    <Article title="Article 1" author="John Doe" text={this.state.text} />
                    <Article title="Article 2" author="John Doe" text={this.state.text} />
                    <Article title="Article 3" author="John Doe" text={this.state.text} />
                </div>
            </div>
        );
    }
}
    
ReactDOM.render(
    <App />,
    document.getElementById('root')
);