import React, { Component } from 'react'
import { Confirmation } from './Confirmation'
import { PersonalDetails } from './PersonalDetails'
import { Success } from './Success'
import { UserDetails } from './UserDetails'

export default class SingUp extends Component {
    state = {
        step: 1,
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        country: '',
        levelOfEducation: ''
    }

    //Go back to the previous step
    prevStep = () => this.setState({step: this.state.step-1})

    // Go to the next step
    nextStep = () => this.setState({step: this.state.step+1})

    //Handle field change 
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const {email, username, password, firstName, lastName, country, levelOfEducation} = this.state
        const values = {email, username, password, firstName, lastName, country, levelOfEducation}

        switch(this.state.step){
            case 1: 
                return (
                    <UserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <PersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3: 
                return (
                    <Confirmation 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Success />
                )
            default: 
        }
    }
}
