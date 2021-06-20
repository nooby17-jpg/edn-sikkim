import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Breadcrumbs, Divider, Link, Paper, Typography} from "@material-ui/core";
import {HomeRounded, SpeakerNotesRounded, ViewHeadlineRounded} from "@material-ui/icons";

export class NiosEducationalDetails extends Component {
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
                            <Link color="textPrimary" href="/niosform"  className="BreadcrumbsLink" >
                                <ViewHeadlineRounded className="BreadcrumbsIcon" />
                                Nios Form
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <Paper  className="paper">
                        <Typography color="secondary" variant="h5" className="formHeading">NIOS Educational details</Typography>
                        <br/>
                        <br/>
                        <TextField
                            placeholder="Enter the name of respective subject"
                            label="Subject 1"
                            onChange={handleChange}
                            defaultValue={values.subject1}
                            margin="normal"
                            id="subject1"
                            required={true}
                            name="subject1"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of your respective subject"
                            label="Marks of Subject 1"
                            onChange={handleChange}
                            defaultValue={values.marks1}
                            margin="normal"
                            type="tel"
                            id="marks1"
                            required={true}
                            name="marks1"
                            fullWidth
                            inputProps={{ maxLength : "3"}}


                        />
                        <br />
                        <TextField
                            placeholder="Enter the name of respective subject"
                            label="Subject 2"
                            onChange={handleChange}
                            defaultValue={values.subject2}
                            margin="normal"
                            id="subject2"
                            required={true}
                            name="subject2"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of your respective subject"
                            label="Marks of Subject 2"
                            onChange={handleChange}
                            defaultValue={values.marks2}
                            margin="normal"
                            id="marks2"
                            type="tel"
                            required={true}
                            name="marks2"
                            fullWidth
                            iinputProps={{ maxLength : "3"}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter the name of respective subject"
                            label="Subject 3"
                            onChange={handleChange}
                            defaultValue={values.subject3}
                            margin="normal"
                            id="subject3"
                            required={true}
                            name="subject3"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of your respective subject"
                            label="Marks of Subject 3"
                            onChange={handleChange}
                            defaultValue={values.marks3}
                            margin="normal"
                            id="marks3"
                            required={true}
                            name="marks3"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter the name of respective subject"
                            label="Subject 4"
                            onChange={handleChange}
                            defaultValue={values.subject4}
                            margin="normal"
                            id="subject4"
                            required={true}
                            name="subject4"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of your respective subject"
                            label="Marks of Subject 4"
                            onChange={handleChange}
                            defaultValue={values.marks4}
                            margin="normal"
                            id="marks4"
                            required={true}
                            name="marks4"
                            fullWidth
                            inputProps={{ maxLength : 3}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter the name of respective subject"
                            label="Subject 5"
                            onChange={handleChange}
                            defaultValue={values.subject5}
                            margin="normal"
                            id="subject5"
                            required={true}
                            name="subject5"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of your respective subject"
                            label="Marks of Subject 5"
                            onChange={handleChange}
                            defaultValue={values.marks5}
                            margin="normal"
                            id="marks5"
                            required={true}
                            name="marks5"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter the name of respective subject"
                            label="Subject 6"
                            onChange={handleChange}
                            defaultValue={values.subject6}
                            margin="normal"
                            id="subject6"
                            name="subject6"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of your respective subject"
                            label="Marks of Subject 6"
                            onChange={handleChange}
                            defaultValue={values.marks6}
                            margin="normal"
                            id="marks6"
                            name="marks6"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter the name of respective subject"
                            label="Subject 7"
                            onChange={handleChange}
                            defaultValue={values.subject7}
                            margin="normal"
                            id="subject7"
                            name="subject7"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of your respective subject"
                            label="Marks of Subject 7"
                            onChange={handleChange}
                            defaultValue={values.marks7}
                            margin="normal"
                            id="marks7"
                            name="marks7"
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

export default NiosEducationalDetails;
