import "../../css/main.css"

import AnalysisBoard from "../elements/analysisBoard"
import ClearButton from "../elements/clearButton";
import React from 'react'
import SubmitButton from "../elements/submitButton";
import axios from 'axios';

class TextApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            data: props.data,
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
        this.setState({ text: event.target.value });
    }

    clear = () => {
        this.setState({ text: "" });
    }

    populateEditor = (text) => {
        this.setState({ text: text });
    }

    render() {
        return (
            <div className="textApp">
                <SubmitButton onClick={this.analyze}></SubmitButton>
                <ClearButton onClick={this.clear}></ClearButton>
                <div className="text-container">
                    <textarea id="text-editor" className="text-editor" placeholder="Paste your story here" value={this.state.text} onChange={this.onChange} />
                </div>
                <AnalysisBoard data={this.state.data} populateEditor={this.populateEditor}></AnalysisBoard>
            </div>
        )
    }
}

export default TextApp;
