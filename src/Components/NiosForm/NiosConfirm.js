import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import {Divider, Paper, Typography} from "@material-ui/core";


export class NiosConfirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: {district, institution, course, passing_year, board, prev_school, student_name, father_name, roll_number, Aadhaar_number, parent_mobile,student_mobile, email, subject1, subject2, subject3,subject4,subject5,subject6,subject7,marks1, marks2,marks3,marks4,marks5,marks6,marks7  }
        } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <div className="breadcrumbAlign">
                        {/*<Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" className="BreadcrumbsLink">
                                <HomeRounded className="BreadcrumbsIcon" />
                                Home
                            </Link>
                            <Link
                                color="inherit"
                                href="/"
                                className="BreadcrumbsLink"
                            >
                                <SpeakerNotesRounded  className="BreadcrumbsIcon"  />
                                Notice
                            </Link>
                            <Link color="textPrimary" href="/"  className="BreadcrumbsLink" >
                                <ViewHeadlineRounded className="BreadcrumbsIcon" />
                                Nios Form
                            </Link>
                        </Breadcrumbs>*/}
                    </div>
                    <Paper
                        className="paper"
                    >
                        <Typography color="secondary" variant="h5" className="formHeading">Review your details</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Student's Name" secondary={student_name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="District" secondary={district} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Institution Name" secondary={institution} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Course" secondary={course} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Passing Year" secondary={passing_year} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Board" secondary={board} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Previous School" secondary={prev_school} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Father's Name" secondary={father_name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Roll Number" secondary={roll_number} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Aadhaar Number" secondary={Aadhaar_number} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Parent's Mobile Number" secondary={parent_mobile} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Student's Mobile Number" secondary={student_mobile} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email Address" secondary={email} />
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary="Student's Academic Details"  />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={subject1} secondary={marks1} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={subject2} secondary={marks2} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={subject3} secondary={marks3} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={subject4} secondary={marks4} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={subject5} secondary={marks5} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={subject6} secondary={marks6} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={subject7} secondary={marks7} />
                            </ListItem>

                        </List>
                        <br />
                        <br/>
                        <Divider/>
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
                        >Confirm & Continue</Button>
                    </Paper>
                </>
            </MuiThemeProvider>
        );
    }
}

export default NiosConfirm;
