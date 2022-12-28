import { bradburyExample, dostoyevskyExample, fitzgeraldExample, hemmingwayExample2, joyceExample, kafkaExample, tolkienExample } from "../../examples/examples";

import React from 'react'

class AnalysisBoard extends React.Component {

    constructor(props) {
        super(props);
        this.populateEditor = this.props.populateEditor;
    }

    render() {
        let toRender = (
            <>
                <h1>Text Analyzer</h1>
                <h3>Paste your story into the editor and hit "Analyze"</h3>
                <p>This tool will read through your story and generate statistics like average sentence length, average word length, and more.</p>
                <br></br>
                <p>Hopefully this'll give you some insight on how to write like your favorite authors!</p>
                <br></br>
                <p>Don't have a story to analyze? Try some of these examples:</p>
                <br></br>
                <div className="button" onClick={() => this.populateEditor(hemmingwayExample2.replace(/\n/g, " "))}>Hemmingway</div>
                <br></br>
                <div className="button" onClick={() => this.populateEditor(fitzgeraldExample.replace(/\n/g, " "))}>F. Scott Fitzgerald</div>
                <br></br>
                <div className="button" onClick={() => this.populateEditor(dostoyevskyExample.replace(/\n/g, " "))}>Fyodor Dostoyevsky</div>
                <br></br>
                <div className="button" onClick={() => this.populateEditor(bradburyExample.replace(/\n/g, " "))}>Ray Bradbury</div>
                <br></br>
                <div className="button" onClick={() => this.populateEditor(tolkienExample.replace(/\n/g, " "))}>J. R. R Tolkien</div>
                <br></br>
                <div className="button" onClick={() => this.populateEditor(joyceExample.replace(/\n/g, " "))}>James Joyce</div>
                <br></br>
                <div className="button" onClick={() => this.populateEditor(kafkaExample.replace(/\n/g, " "))}>Franz Kafka</div>
            </>
        )
        if (this.props.data) {
            toRender = JSON.stringify(this.props.data);
        }
        return (<div className="analysisBoard">{toRender}</div>)
    }
}

export default AnalysisBoard;
