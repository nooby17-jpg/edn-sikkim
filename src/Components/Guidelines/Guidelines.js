import React from "react";
import {
    Avatar, Breadcrumbs, Button,
    Card, CardActions,
    CardContent,
    CardHeader, Divider,
    Grid, Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper, Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {
    HomeRounded,
    NavigateNextRounded,
    SpeakerNotesRounded,
    ArrowRightRounded
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        maxWidth: 580,
        color: theme.palette.text.secondary,
    },
    gridAlign:{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        margin: 0
    },
    gridAlign2:{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        justifySelf: "center",
        width: "auto",
        margin:0
    },
    avatar: {
        backgroundColor: "#0d79d9",
    },
    cardTitle:{
        textAlign: "start",
        fontFamily: '"Oswald", sans-serif',
        fontWeight: 600,
        fontSize: 22,
    },
    cardContent:{
        textAlign: "start",
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 400,
        fontSize: 18,
    },
    cardAlign:{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        justifySelf: "center",
    }

}));

export default function  Guidelines(){
    const classes = useStyles();
        return(
            <>
                <div className="breadcrumbAlign">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/" className="BreadcrumbsLink">
                            <HomeRounded className="BreadcrumbsIcon" />
                            Home
                        </Link>
                        <Link
                            color="textPrimary"
                            href="/notice"
                            className="BreadcrumbsLink"
                        >
                            <SpeakerNotesRounded  className="BreadcrumbsIcon"  />
                            Notice
                        </Link>
                    </Breadcrumbs>
                </div>
                <Grid container>
                    <Grid item xs={12} className={classes.gridAlign}>
                        <Paper variant="elevation" elevation={3} className={classes.paper}>
                            <Typography variant="h4" className="formHeading">NOTICE</Typography>
                            <br/>
                            <Divider/>
                            <br/>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem button>
                                    <ListItemIcon>
                                        <ArrowRightRounded />
                                    </ListItemIcon>
                                    <ListItemText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ArrowRightRounded />
                                    </ListItemIcon>
                                    <ListItemText >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ArrowRightRounded />
                                    </ListItemIcon>
                                    <ListItemText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ArrowRightRounded />
                                    </ListItemIcon>
                                    <ListItemText >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ArrowRightRounded />
                                    </ListItemIcon>
                                    <ListItemText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ArrowRightRounded />
                                    </ListItemIcon>
                                    <ListItemText >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</ListItemText>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={2} className={classes.gridAlign2}>
                    <Grid item xs={12} md={12} lg={3} className={classes.cardAlign}>
                        <Card className={classes.paper}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        N
                                    </Avatar>
                                }
                                className={classes.cardTitle}
                                title="NIOS Registration"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.cardContent}>
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    color="primary"
                                    href="/niosform"
                                    variant="contained"
                                    endIcon={<NavigateNextRounded/>}
                                    size='medium'
                                >
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/*Admission link of Polytechnic registration */}
                    <Grid item xs={12} md={12} lg={3} className={classes.cardAlign}>
                        <Card className={classes.paper}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        P
                                    </Avatar>
                                }
                                className={classes.cardTitle}
                                title="Polytechnic Registration"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.cardContent}>
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    color="primary"
                                    href="/polytechnicform"
                                    variant="contained"
                                    endIcon={<NavigateNextRounded/>}
                                    size='medium'
                                >
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/*Admission link of Regular school registration */}
                    <Grid item xs={12} md={12} lg={3} className={classes.cardAlign}>
                        <Card className={classes.paper}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                className={classes.cardTitle}
                                title="Regular Registration"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.cardContent}>
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    color="primary"
                                    href="/regularform"
                                    variant="contained"
                                    endIcon={<NavigateNextRounded/>}
                                    size='medium'
                                >
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </>
        );

}
