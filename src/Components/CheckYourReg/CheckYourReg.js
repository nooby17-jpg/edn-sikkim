import React,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SchoolSource from "../utils/SchoolSource";
import {Breadcrumbs, Divider, Link, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {HomeRounded, ListAltRounded} from "@material-ui/icons";
import JSONDATA from "../../MOCK_DATA.json"

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        maxWidth: 900,
    },
    containerAlign:{
        maxWidth: 900,
        margin: "auto"
    },
    searchBar:{
        padding: 10,
        width: 240,

    },
    buttonGroup:{
        display: "flex",
        margin: "auto",
        textAlign: "center",
        alignContent: "center",
    },
    footerlist:{
        fontFamily: "'Oswald', serif",
        fontSize: 14,
        paddingLeft: 20,
    }
});


export default function CheckYourReg() {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <div className="breadcrumbAlign">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" className="BreadcrumbsLink">
                        <HomeRounded className="BreadcrumbsIcon" />
                        Home
                    </Link>
                    <Link
                        color="textPrimary"
                        href="/eastschoollist"
                        className="BreadcrumbsLink"
                    >
                        <ListAltRounded  className="BreadcrumbsIcon"  />
                        East Sikkim School List
                    </Link>
                </Breadcrumbs>
            </div>
            <TableContainer component={Paper} className={classes.containerAlign}>
                <br/>
                <Typography variant="h4" className="formHeading">CHECK YOUR REGISTRATION</Typography>
                <br/>
                <Divider/>
                <br/>
                <TextField
                    className={classes.searchBar}
                    type="text"
                    variant="outlined"
                    placeholder="Search Roll Number..."
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Sl. No.</StyledTableCell>
                            <StyledTableCell >Student Name</StyledTableCell>
                            <StyledTableCell >Father Name </StyledTableCell>
                            <StyledTableCell >Student Email</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {JSONDATA.filter((val) => {
                            if (searchTerm == "") {
                                return null
                            } else if (val.credit.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map((val, key) => (
                            <StyledTableRow key={val.id}>
                                <StyledTableCell >{val.id}</StyledTableCell>
                                <StyledTableCell >{val.full_name}</StyledTableCell>
                                <StyledTableCell >{val.company}</StyledTableCell>
                                <StyledTableCell >{val.email}</StyledTableCell>

                            </StyledTableRow>
                        ))
                        }
                    </TableBody>
                </Table>
                <br/>
                <Divider/>
                <br/>
                <Typography variant="subtitle2" className={classes.footerlist}>
                    Not register yet ?
                    <br/>
                    Looking for admission links ?
                    <br/>
                    click on link below to register yourself.
                </Typography>
                <br/>
                <Divider/>
                <br/>
                <div className={classes.buttonGroup}>
                    <Button href="/notice" variant="contained" color="primary" className={classes.buttonGroup}>Register yourself here !</Button>
                </div>
                <br/>
            </TableContainer>
        </>
    );
}
