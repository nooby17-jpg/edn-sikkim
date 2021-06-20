import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Breadcrumbs, Divider, Link, MenuItem, Paper, Typography} from "@material-ui/core";
import {HomeRounded, SpeakerNotesRounded, ViewHeadlineRounded} from "@material-ui/icons";

export class RegularEducationalDetails extends Component {
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
                            <Link color="textPrimary" href="/regularform"  className="BreadcrumbsLink" >
                                <ViewHeadlineRounded className="BreadcrumbsIcon" />
                                Regular Form
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <Paper  className="paper">
                        <Typography color="secondary" variant="h5" className="formHeading">NIOS Educational details</Typography>
                        <br/>
                        <br/>
                        <TextField
                            id="maths_type"
                            name="maths_type"
                            required={true}
                            fullWidth
                            select
                            label="Math's Paper type"
                            value={values.maths_type}
                            onChange={handleChange}
                            helperText="Please select your type of question paper in maths"
                        >
                            <MenuItem value="basic">Basic</MenuItem>
                            <MenuItem value="standard">Standard</MenuItem>
                        </TextField>
                        <br/>
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
                        <br/>
                        <TextField
                            placeholder="Enter your marks of social science"
                            label="Social Science"
                            onChange={handleChange}
                            defaultValue={values.social_science}
                            margin="normal"
                            id="social_science"
                            name="social_science"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <TextField
                            placeholder="Enter your marks of general science"
                            label="General Science"
                            onChange={handleChange}
                            defaultValue={values.general_science}
                            margin="normal"
                            id="general_science"
                            name="general_science"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <TextField
                            id="vernacular_subject"
                            name="vernacular_subject"
                            required={true}
                            fullWidth
                            select
                            label="Vernacular Subject"
                            value={values.vernacular_subject}
                            onChange={handleChange}
                            helperText="Please select your Vernacular subject"
                        >
                            <MenuItem value="bhutia">BHUTIA</MenuItem>
                            <MenuItem value="lepcha">LEPCHA</MenuItem>
                            <MenuItem value="limboo">LIMBOO</MenuItem>
                            <MenuItem value="nepali">NEPALI</MenuItem>
                            <MenuItem value="tamang">TAMANG</MenuItem>
                            <MenuItem value="gurung">GURUNG</MenuItem>
                            <MenuItem value="rai">RAI</MenuItem>
                            <MenuItem value="sherpa">SHERPA</MenuItem>
                            <MenuItem value="hindi">HINDI</MenuItem>
                            <MenuItem value="tibetan">TIBETAN</MenuItem>
                        </TextField>
                        <br/>
                        <br />
                        <TextField
                            placeholder="Enter the marks of Vernacular subject"
                            label="Vernacular"
                            onChange={handleChange}
                            defaultValue={values.vernacular}
                            margin="normal"
                            id="vernacular"
                            name="vernacular"
                            fullWidth
                            inputProps={{maxLength : 3}}
                        />
                        <br />
                        <TextField
                            id="vocational_subject"
                            name="vocational_subject"
                            required={true}
                            fullWidth
                            select
                            label="Vocational Subject"
                            value={values.vocational_subject}
                            onChange={handleChange}
                            helperText="Please select your Vocational subject"
                        >
                            <MenuItem value="fp">FP</MenuItem>
                            <MenuItem value="ttm">TTM</MenuItem>
                            <MenuItem value="msfc">MSFC</MenuItem>
                            <MenuItem value="it">IT</MenuItem>
                        </TextField>
                        <br/>
                        <br />
                        <TextField
                            placeholder="Enter the marks of Vocational subject"
                            label="Vocational"
                            onChange={handleChange}
                            defaultValue={values.vocational}
                            margin="normal"
                            id="vocational"
                            name="vocational"
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

export default RegularEducationalDetails;
