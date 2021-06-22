import React, {useState} from 'react';
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

const rows = SchoolSource.SouthSikkimSchool
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

    }
});

export default function SouthSchoolList() {
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
                        href="/southschoollist"
                        className="BreadcrumbsLink"
                    >
                        <ListAltRounded  className="BreadcrumbsIcon"  />
                        South Sikkim School List
                    </Link>
                </Breadcrumbs>
            </div>
            <TableContainer component={Paper} className={classes.containerAlign}>
                <br/>
                <Typography variant="h4" className="formHeading">SOUTH SIKKIM SCHOOL LIST</Typography>
                <br/>
                <Divider/>
                <br/>
                <TextField
                    className={classes.searchBar}
                    type="text"
                    variant="outlined"
                    placeholder="Search School..."
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >School Name</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.schoolName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell >{row.schoolName}</StyledTableCell>
                            </StyledTableRow>
                        ))
                        }
                    </TableBody>
                </Table>
                <br/>
                <Divider/>
                <br/>
                <Typography variant="subtitle2" className="footerlist">Check different district school's list by clicking the button below:</Typography>
                <br/>
                <Divider/>
                <br/>
                <div className="buttonGroup">
                    <Button href="/eastschoollist" variant="contained" color="primary">East Sikkim School</Button>
                    <Button href="/westschoollist" variant="contained"  color="primary">West Sikkim School</Button>
                    <Button href="/northschoollist" variant="contained" color="primary">North Sikkim School</Button>
                </div>
                <br/>
            </TableContainer>
        </>
    );
}
