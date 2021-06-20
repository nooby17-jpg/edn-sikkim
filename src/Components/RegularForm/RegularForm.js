import React, { Component } from 'react';
import Success from '../Success/Success';
import RegularPersonalDetails from "./RegularPersonalDetails";
import RegularEducationalDetails from "./RegularEducationalDetails";
import RegularConfirm from "./RegularConfirm";

export default class RegularForm extends Component {
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
        general_science:'',
        social_science:'',
        mathematics:'',
        maths_type:'',
        english:'',
        vernacular_subject:'',
        vernacular:'',
        vocational_subject:'',
        vocational:'',
    };
    handleSubmit(e) {
        e.preventDefault();

        let dataObj = {
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
            general_science:this.state.general_science,
            social_science : this.state.social_science,
            maths_type:this.state.maths_type,
            mathematics : this.state.mathematics,
            english:this.state.english,
            vernacular_subject : this.state.vernacular_subject,
            vernacular:this.state.vernacular,
            vocational_subject : this.state.vocational_subject,
            vocational:this.state.vocational,

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
        const {district, institution, course, passing_year, board, prev_school, student_name, father_name, roll_number, Aadhaar_number, parent_mobile,student_mobile, email, general_science, social_science, mathematics, maths_type, english, vernacular_subject,vernacular,vocational_subject,vocational } = this.state;
        const values = {district, institution, course, passing_year, board, prev_school, student_name, father_name, roll_number, Aadhaar_number, parent_mobile,student_mobile, email,general_science, social_science, mathematics, maths_type, english, vernacular_subject,vernacular,vocational_subject,vocational };

        switch (step) {
            case 1:
                return (
                    <RegularPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <RegularEducationalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <RegularConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleSubmit={this.handleSubmit}
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
