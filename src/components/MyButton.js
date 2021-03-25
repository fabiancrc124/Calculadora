import React from 'react';
import { Button, Grid  } from '@material-ui/core';

class MyButton extends React.Component {

    getOperation(operation) {
        this.props.editFieldValue(operation);
    }

    render() {
        return (
            <Grid item xs={3} >
                <Button variant="contained" color={this.props.data.color} size="large" onClick={()=>{this.getOperation(this.props.data.operation)}}>
                    {this.props.data.label}
                </Button>
            </Grid>
        );
    }
}

export default MyButton;