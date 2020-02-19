import React, { Component, Fragment} from 'react'

export default class ErrorAlert extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
        <Fragment>
            <div className="alert alert-danger" role="alert">
                {this.props.message}
            </div>
        </Fragment>
        )
    }
}
