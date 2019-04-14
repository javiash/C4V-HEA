import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class AddNew extends React.Component {
    constructor(props) {
        super(props)

        this.state = {};

    }

    handleChange(name) {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        console.log('EL ESTADOOOOO', this.state)
        return (
            <div>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    onChange={() => this.handleChange('titulo')}
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-full-width"
                    label="Uncontrolled"
                    className={classes.textField}
                    onChange={() => this.handleChange('contenido')}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    setLogin: user => dispatch(setLogin(user)),
})

AddNew.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(firebaseConnect([
    'rooms']),
    connect(mapStateToProps, mapDispatchToProps))(withStyles(styles)(AddNew))