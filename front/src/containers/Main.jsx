import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import ShareButton from "./ShareButton."

export class Main extends Component {


    render() {
        return (
            <div>
                <ShareButton/>
            </div>
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
