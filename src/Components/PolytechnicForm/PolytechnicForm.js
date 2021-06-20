import React, { Component } from 'react';
import Success from '../Success/Success';
import PolytechnicPersonalDetails from "./PolytechnicPersonalDetails";
import PolytechnicEducationalDetails from "./PolytechnicEducationalDetails";
import PolytechnicConfirm from "./PolytechnicConfirm";

export default class PolytechnicForm extends Component {
    state = {
        step: 1,
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
            /* let data = SchoolSource.EastSchoolCourseMap[value];*/
            /* this.setState({streams:data});*/
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
