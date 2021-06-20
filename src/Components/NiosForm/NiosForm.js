import React, { Component } from 'react';
import Success from '../Success/Success';
import NiosPersonalDetails from "./NiosPersonalDetails";
import NiosEducationDetails from "./NiosEducationDetails";
import NiosConfirm from "./NiosConfirm";

export default class NiosForm extends Component {
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
        subject1:'',
        marks1:'',
        subject2:'',
        marks2:'',
        subject3:'',
        marks3:'',
        subject4:'',
        marks4:'',
        subject5:'',
        marks5:'',
        subject6:'',
        marks6:'',
        subject7:'',
        marks7:'',
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
        const {district, institution, course, passing_year, board, prev_school, student_name, father_name, roll_number, Aadhaar_number, parent_mobile,student_mobile, email, subject1, subject2, subject3,subject4,subject5,subject6,subject7,marks1, marks2,marks3,marks4,marks5,marks6,marks7 } = this.state;
        const values = {district, institution, course, passing_year, board, prev_school, student_name, father_name, roll_number, Aadhaar_number, parent_mobile,student_mobile, email, subject1, subject2, subject3,subject4,subject5,subject6,subject7,marks1, marks2,marks3,marks4,marks5,marks6,marks7  };

        switch (step) {
            case 1:
                return (
                    <NiosPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <NiosEducationDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <NiosConfirm
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
