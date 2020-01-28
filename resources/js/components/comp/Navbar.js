import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
                {/* <Link className="navbar-brand" to='/'><img src='/logo.svg'/></Link> */}
                <Link className="navbar-brand" to='/'><i id='logo' className="fa fa-warehouse"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Product <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/cart'>
                            <ButtonContainer>
                                <i className="fa fa-shopping-cart mr-2"></i>
                                my cart
                            </ButtonContainer>
                        </Link>
                    </li>
                    </ul>
                </div>
                </NavWrapper>
            </Fragment>
        )
    }
}

const NavWrapper = styled.nav`

// background: var(--mainBlue) !important;
.nav-link{
    // color:var(--mainWhite) !important;
    font-size: 1.3rem !important;
    // text-transform: capitalize ;

}

`
