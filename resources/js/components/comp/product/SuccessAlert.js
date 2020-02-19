import React, { Component, Fragment } from 'react'

export default class SuccessAlert extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
            <Fragment>
                <div className="alert alert-success mt-4" role="alert">
                    {/* Categorie Added/Updated <strong>!</strong> */}
                    {this.props.message}
                </div>
            </Fragment>
        )
    }
}
