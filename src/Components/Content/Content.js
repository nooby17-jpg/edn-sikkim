import React from "react";
import {TextField,Paper,    Divider, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import acs from '../../Assets/Images/acs.jpg'
import mmm from '../../Assets/Images/m.jpg'
import con from '../../Assets/Images/undraw_contact_us_15o2.svg'

const useStyles =makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    MessageTop:{
        display: "flex",
        flexDirection: "row"
    },
    Paper: {
        padding: theme.spacing(2),
        maxWidth: 700,
        margin:"auto"
    },
    ContactPaper:{
        padding: theme.spacing(2),
        maxWidth: 500,
        margin: "auto"

    },
    containerAlign:{
        marginTop: 120
    },
    ImageDiv:{
      display: "flex",
      justifyContent: "center",
        alignContent:"center",
        alignItems:"center",
        margin:"auto"
    },
    contactImage:{
        width:320,
        maxWidth:500,
        [theme.breakpoints.up('xs')]:{
            width:340,
            maxWidth:340,
        },
    },
    Text:{
        textAlign: "center",
        marginTop: 200
    },
    ImageBody:{
        textAlign: "center",
        fontFamily:"'Merriweather', serif",
        fontSize: 8,
        fontWeight:600
    },
    ImageName:{
        textAlign: "center",
        fontFamily:"'Oswald', sans-serif",
        fontSize: 10,
        fontWeight:900
    },
    contactHeading:{
        padding: theme.spacing(1),
        fontFamily:"'Oswald', sans-serif",
        fontSize: 24,
        fontWeight:700
    }
}));


export default function Content(){
    const classes = useStyles();

        return(
            <>
                <Grid container className={classes.containerAlign}>
                    <Grid item xs={12} lg={12}>
                        <Paper className={classes.Paper}>
                            <div className={classes.MessageTop}>
                                <Grid item xs={3} lg={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Shri Kunga Nima Lepcha"
                                                height="140"
                                                image={mmm}
                                                title="Shri Kunga Nima Lepcha"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.ImageName}>
                                                    Shri Kunga Nima Lepcha
                                                </Typography>
                                                <br/>
                                                <Divider/>
                                                <br/>
                                                <Typography variant="body2" color="textSecondary" component="p" className={classes.ImageBody}>
                                                    Hon'ble Minister, Education Department
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                    <Typography variant="h4" color="textPrimary" className={classes.Text}>MESSAGE</Typography>
                                </Grid>
                                <Grid item xs={3} lg={3}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Shri G.P. Upadhyaya"
                                                height="140"
                                                image={acs}
                                                title="Shri G.P. Upadhyaya"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.ImageName}>
                                                    Shri G.P. Upadhyaya
                                                </Typography>
                                                <br/>
                                                <Divider/>
                                                <br/>
                                                <Typography variant="body2" color="textSecondary" component="p" className={classes.ImageBody}>
                                                    Additional Chief Secretary, Education Department
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </div>
                            <br/>
                            <Divider/>
                            <br/>
                            <Grid item xs={12} >
                                <Typography component="p" color="textPrimary">
                                    We are aware about the COVID-19 pandemic which has
                                    spread all over the world. Together with the nation,
                                    our State is also gripped in the clutches of this pandemic
                                    which has led us to follow lockdown in our State as per
                                    the guidelines of disaster management authority.
                                    <br/>
                                    Since the class X results of school have been already
                                    declared by all boards, ensuring continuity of teaching
                                    learning process without any obstacle is our priority.
                                    We have, however, the priority also to follow strictly
                                    the mandatory safety protocol to be maintained during the pandemic.
                                    The authorities in the Education Department have decided that apart
                                    from the ongoing online classes, admission in
                                    Class XI should also be done online.
                                    <br/>
                                    Keeping all the facts in view, the Education Department has
                                    initiated the process of online admission in all the senior
                                    secondary schools of all the districts. Students seeking
                                    admission in Class XI are therefore requested to read
                                    the general instructions carefully and apply for admission
                                    in class XI latest by 5<sup>th</sup> August 2021.
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <br/>
                <Divider/>
                <br/>

                <Grid item xs={12}  lg={12}>
                    <Paper className={classes.Paper}>
                        <Card>
                            <Typography className={classes.contactHeading} variant="h4" color="textPrimary">TO - DO:</Typography>
                            <Divider/>
                            <br/>

                            <div className="buttonGroup">
                                <Button href="/" variant="contained"  color="primary">View School List</Button>
                                <Button href="/" variant="contained"  color="primary">Check Your Registration</Button>
                                <Button href="/notice" variant="contained" color="primary">Admission Link</Button>
                            </div>
                            <br/>
                        </Card>
                    </Paper>
                </Grid>

                <br/>
                <Divider/>
                <br/>


                <Grid item xs={12} className={classes.Paper} >
                    <Paper  elevation={2} className={classes.Paper}>
                        <Typography className={classes.contactHeading} variant="h4" color="textPrimary">Contact Us:</Typography>
                        <br/>
                        <Divider/>
                        <br/>
                        <div className={classes.ContactPaper}>
                            <Grid container item>
                                <TextField
                                    require={true}
                                    id='name'
                                    label='Name'
                                    variant='outlined'
                                    autoComplete='new-name'
                                    fullWidth
                                />
                            </Grid>
                            <br />
                            <br />
                            <Grid container item>
                                <TextField
                                    required
                                    id='email'
                                    label='Email'
                                    variant='outlined'
                                    autoComplete='new-email'
                                    fullWidth
                                />
                            </Grid>
                            <br />
                            <br />
                            <Grid container item>
                                <TextField
                                    required
                                    id='message'
                                    label='Message'
                                    fullWidth
                                    multiline
                                    rows={4}
                                    variant='outlined'
                                />
                            </Grid>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Grid container item>
                                <Button
                                    variant='contained'
                                    fullWidth
                                    color='primary'
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </div>
                        <div className={classes.ImageDiv}>
                            <img src={con} alt="con" className={classes.contactImage}/>
                        </div>
                    </Paper>
                </Grid>
            </>
        );
}
