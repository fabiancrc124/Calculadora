import React from 'react';
import { Grid  } from '@material-ui/core';

class BlankButton extends React.Component {

    constructor(props) {
        super(props);
        console.log("Log desde MyButton");
    }

    render() {
        return (
            <Grid item xs={3}>
            </Grid>
        );
    }
}

export default BlankButton;