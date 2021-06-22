import React, { Component } from 'react';
import Success from '../Success/Success';
import PolytechnicPersonalDetails from "./PolytechnicPersonalDetails";
import PolytechnicEducationalDetails from "./PolytechnicEducationalDetails";
import PolytechnicConfirm from "./PolytechnicConfirm";
import SchoolSource from "../utils/SchoolSource";

export default class PolytechnicForm extends Component {
    state = {
        step: 1,
        streams:[],
        district:'',
        institution:'',
        course:'',
        passing_year:'',
        board:'',
        prev_school:'',
        student_name:'',
        father_name:'',
        roll_number:'',
        Aadhaar_number:'',
        parent_mobile:'',
        student_mobile:'',
        email:'',
        science:'',
        mathematics:'',
        english:'',
    };
    handleSubmit(e) {
        e.preventDefault();

        let dataObj = {
            streams: this.state.streams,
            district : this.state.district,
            institution:this.state.institution,
            course : this.state.course,
            passing_year:this.state.passing_year,
            board : this.state.board,
            prev_school:this.state.prev_school,
            student_name : this.state.student_name,
            father_name:this.state.father_name,
            roll_number : this.state.roll_number,
            Aadhaar_number:this.state.Aadhaar_number,
            parent_mobile : this.state.parent_mobile,
            student_mobile:this.state.student_mobile,
            email : this.state.email,
            science:this.state.general_science,
            mathematics : this.state.mathematics,
            english:this.state.english,

        }
        console.log(this.state);
        return <Success/>;
    }
    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleDropdown(name, value) {
        if(name === 'schoolName') {
             let data = SchoolSource.EastSchoolCourseMap[value];
             this.setState({streams:data});
        }

    }
    // Handle fields change
    handleChange =(event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        },()=>this.handleDropdown(name,value));
        console.log(name,value);
    };

    render() {
        switch ("district") {
            case "east":
               this.streams = SchoolSource.EastSikkimSchools
                break
            case "west":
                this.streams = SchoolSource.WestSikkimSchool
                break
            case "south":
                this.streams = SchoolSource.SouthSikkimSchool
                break
            case "north":
                this.streams = SchoolSource.NorthSikkimSchool
                break
            default:
                this.streams =  null

        }


        const { step } = this.state;
        const {district, institution, course, passing_year, board, prev_school, student_name, father_name, roll_number, Aadhaar_number, parent_mobile,student_mobile, email, science, english, mathematics} = this.state;
        const values = {district, institution, course, passing_year, board, prev_school, student_name, father_name, roll_number, Aadhaar_number, parent_mobile,student_mobile, email, science, english, mathematics  };

        switch (step) {
            case 1:
                return (
                    <PolytechnicPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PolytechnicEducationalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <PolytechnicConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return <Success />;
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}
