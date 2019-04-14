import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Route } from 'react-router-dom';

import AddNew from './AddNew';

export class Main extends Component {


    render() {
        return (
            <div>
                <p>Hola Venezuela</p>
                <Route path='/addNew' render={() => < AddNew />}  />
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
