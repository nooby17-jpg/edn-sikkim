import React, {useState} from "react";
import {Button, TextField,Snackbar,  Card, CardHeader, Divider, Grid, Typography} from "@material-ui/core";
import {db} from './firebase'
import MuiAlert from '@material-ui/lab/Alert';


export default function Content(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false)



    const handleClose = (e, reason) =>{
        if (reason === 'clickaway'){
            return(
                console.log("working")
            )
        }
        setOpen(false)
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant='filled' {...props} />;
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        db.collection('contact').add({
            name: name,
            email:email,
            message :message,
        })
            .then(() => {
                setOpen(true);
            })
            .catch((error) =>{
                alert(error.message)
            })

        setName("")
        setEmail("")
        setMessage("")

    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant='filled' {...props} />;
    }
        return(
            <>
                <Grid container>
                    <Grid item xs={12} lg={8}>
                        <Grid item xs={3}>

                        </Grid>
                        <Grid item xs={6}>
                            MESSAGE
                        </Grid>
                        <Grid item xs={3}>

                        </Grid>
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
                        <Grid item xs={12}  lg={4}>
                            <Card>
                                <CardHeader title="TO-DO"/>
                                <Divider/>
                                <div className="buttonGroup">
                                    <Button href="/">
                                        View School List
                                    </Button>
                                    <Button href="/">Check Your Registration</Button>
                                    <Button href="/notice">Admission Link</Button>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid item xs={12}>
                        {/*<Card>
                            <CardHeader title="Contact Us"/>
                            <Divider/>
                        </Card>*/}
                        <Grid container item>
                            <TextField
                                require={true}
                                id='name'
                                label='Name'
                                variant='outlined'
                                autoComplete='new-name'
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={message}
                                variant='outlined'
                                onChange={(e) => setMessage(e.target.value)}
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
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity='success'>
                        message submitted successfully!
                    </Alert>
                </Snackbar>
            </>
        );
}
