import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Breadcrumbs, Divider, Link, MenuItem, Paper, Typography} from "@material-ui/core";
import {HomeRounded, SpeakerNotesRounded, ViewHeadlineRounded} from "@material-ui/icons";

export class PolytechnicEducationalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <div className="breadcrumbAlign">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" className="BreadcrumbsLink">
                                <HomeRounded className="BreadcrumbsIcon" />
                                Home
                            </Link>
                            <Link
                                color="inherit"
                                href="/notice"
                                className="BreadcrumbsLink"
                            >
                                <SpeakerNotesRounded  className="BreadcrumbsIcon"  />
                                Notice
                            </Link>
                            <Link color="textPrimary" href="/polytechnicform"  className="BreadcrumbsLink" >
                                <ViewHeadlineRounded className="BreadcrumbsIcon" />
                                Polytechnic Form
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <Paper  className="paper">
                        <Typography color="secondary" variant="h5" className="formHeading">NIOS Educational details</Typography>
                        <br/>
                        <br/>
                        <TextField
                            id="board"
                            name="board"
                            required={true}
                            fullWidth
                            select
                            label="Select Board"
                            value={values.board}
                            onChange={handleChange}
                            helperText="Please select your board"
                        >
                            <MenuItem value="cbse">CBSE</MenuItem>
                            <MenuItem value="icse">ICSE</MenuItem>
                            <MenuItem value="other">Other</MenuItem>

                        </TextField>
                        <TextField
                            placeholder="Enter the name of your previous school"
                            label="Previous School's Name"
                            onChange={handleChange}
                            defaultValue={values.prev_school}
                            margin="normal"
                            id="prev_school"
                            required={true}
                            name="prev_school"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your roll number"
                            label="Roll Number"
                            onChange={handleChange}
                            defaultValue={values.roll_number}
                            margin="normal"
                            id="roll_number"
                            required={true}
                            name="roll_number"
                            fullWidth
                            inputProps={{ type: 'tel' , maxLength : 15,}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of Mathematics"
                            label="Mathematics"
                            onChange={handleChange}
                            defaultValue={values.mathematics}
                            margin="normal"
                            id="mathematics"
                            name="mathematics"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of Science"
                            label="Science"
                            onChange={handleChange}
                            defaultValue={values.science}
                            margin="normal"
                            id="science"
                            name="science"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of English"
                            label="English"
                            onChange={handleChange}
                            defaultValue={values.english}
                            margin="normal"
                            id="english"
                            name="english"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <br/>
                        <Divider/>
                        <br/>
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Back</Button>
                        &ensp;&ensp;
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Continue</Button>
                    </Paper>
                </>
            </MuiThemeProvider>
        );
    }
}

export default PolytechnicEducationalDetails;
