import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import { Switch, Route, Link } from 'react-router-dom';
import Register from './Register';
import SignIn from './SignIn';
import Button from "@material-ui/core/Button";

export class Main extends Component {

    render() {
        return (
            <div>
                <Register history={history} />
                <SignIn history={history} />
            </div >
        )
    }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    setLogin: user => dispatch(setLogin(user)),
})

export default compose(firebaseConnect([
    'rooms']),
    connect(mapStateToProps, mapDispatchToProps))(Main)
