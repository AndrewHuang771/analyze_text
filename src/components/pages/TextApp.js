import "../../css/main.css"

import AnalysisBoard from "../elements/analysisBoard"
import React from 'react'
import TextEditor from "../elements/editor"
import axios from 'axios';

class TextApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            data: props.data
        }
    }

    analyze = () => {
        const textdata = {
            text: this.state.text,
        };
        axios
            .post('/analyze', textdata)
            .then(response => {
                this.setState({ data: response.data });
            })
            .catch(error => console.error(error));
    }

    onChange = (event) => {
        this.setState({ text: event[0].children[0].text });
    }

    render() {
        return (
            <>
                <TextEditor analyze={this.analyze} onChange={this.onChange}></TextEditor>
                <AnalysisBoard data={this.state.data}></AnalysisBoard>
            </>
        )
    }
}

export default TextApp;
