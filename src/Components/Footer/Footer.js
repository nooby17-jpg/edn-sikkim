import React from "react";
import {Grid, Link, Typography} from "@material-ui/core";


export default function Footer(){
    return(
        <React.Fragment>
            <div className="footer">
                <Grid container >
                    <Grid item xs={12}>
                        <Typography className="footerText">&copy; Copyright {new Date().getFullYear()}
                          &ensp;
                            <Link component="a" href="https://boldsinnovation.com/" className="bolds">Bolds </Link>
                          Innovation - All Rights Reserved
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
