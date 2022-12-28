import React from 'react'

class AnalysisBoard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>Data: {JSON.stringify(this.props.data)}</div>)
    }
}

export default AnalysisBoard;
