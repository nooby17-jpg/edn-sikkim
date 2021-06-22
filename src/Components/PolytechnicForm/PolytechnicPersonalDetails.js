import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Breadcrumbs, Divider, Link, MenuItem, Paper,Typography} from "@material-ui/core";
import {HomeRounded, SpeakerNotesRounded, ViewHeadlineRounded} from "@material-ui/icons";

export default class PolytechnicPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                    <Paper
                        className="paper"
                    >

                        <Typography color="secondary" variant="h5" className="formHeading">Polytechnic Personal details</Typography>
                        <br/>
                        <br/>
                        <TextField
                            id="district"
                            name="district"
                            required={true}
                            fullWidth
                            select
                            label="District"
                            value={values.district}
                            onChange={handleChange}
                            helperText="Please select your district"
                        >
                            <MenuItem value="east">East Sikkim</MenuItem>
                            <MenuItem value="west">West Sikkim</MenuItem>
                            <MenuItem value="north">North Sikkim</MenuItem>
                            <MenuItem value="south">South Sikkim</MenuItem>
                        </TextField>
                        <br/>
                        <TextField
                            id="institution"
                            name="institution"
                            required={true}
                            fullWidth
                            select
                            label="Institution"
                            value={values.institution}
                            onChange={handleChange}
                            helperText="Please select your institution"
                        >
                            <MenuItem key={values.institution} value={values.institution}>
                                {values.institution}
                            </MenuItem>

                        </TextField>
                        <br/>
                        <TextField
                            id="course"
                            name="course"
                            required={true}
                            fullWidth
                            select
                            label="Select Course"
                            value={values.course}
                            onChange={handleChange}
                            helperText="Please select your course"
                        >
                            <MenuItem key={values.course} value={values.course}>
                                {values.course}
                            </MenuItem>
                        </TextField>
                        <TextField
                            placeholder="Enter the year you passed your class X"
                            label="Passing Year"
                            onChange={handleChange}
                            id="passing_year"
                            required={true}
                            name="passing_year"
                            defaultValue={values.passing_year}
                            margin="normal"
                            fullWidth
                        />
                        <br/>

                        <TextField
                            placeholder="Enter your name"
                            label="Student's Name"
                            onChange={handleChange}
                            defaultValue={values.student_name}
                            margin="normal"
                            id="student_name"
                            required={true}
                            name="student_name"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter your father name"
                            label="Father's Name"
                            onChange={handleChange}
                            defaultValue={values.father_name}
                            margin="normal"
                            id="father_name"
                            required={true}
                            name="father_name"
                            fullWidth
                        />
                        <br />

                        <TextField
                            placeholder="Enter your Aadhaar number"
                            label="Aadhaar Number"
                            onChange={handleChange}
                            defaultValue={values.Aadhaar_number}
                            margin="normal"
                            id="Aadhaar_number"
                            required={true}
                            name="Aadhaar_number"
                            fullWidth
                            inputProps={{ type: 'tel' , maxLength : 12, minLength: 12}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your parent's phone number"
                            label="Parent's Number"
                            onChange={handleChange}
                            defaultValue={values.parent_mobile}
                            margin="normal"
                            id="parent_mobile"
                            required={true}
                            name="parent_mobile"
                            fullWidth
                            inputProps={{ type: 'tel' , maxLength : 10, minLength: 10}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your phone number"
                            label="Student's Number"
                            onChange={handleChange}
                            defaultValue={values.student_mobile}
                            margin="normal"
                            id="student_mobile"
                            required={true}
                            name="student_mobile"
                            fullWidth
                            inputProps={{ type: 'tel' , maxLength : 10, minLength: 10}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your email address"
                            label="Email"
                            onChange={handleChange}
                            defaultValue={values.email}
                            margin="normal"
                            id="email"
                            type="email"
                            required={true}
                            name="email"
                            fullWidth
                            inputProps={{ type: 'email' , maxLength : 50}}
                        />
                        <br />
                        <br/>
                        <Divider/>
                        <br/>
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
