import React from 'react'
import { FormContainer,FormH1,BtnWrapper,Button } from './FormElements'

const Form = (dark) => {
    return (
        <FormContainer> 
            <FormH1>Login As</FormH1>
            <BtnWrapper>
                <Button>
                    Recruiter
                </Button>
                <Button>
                    Applicant
                </Button>
            </BtnWrapper>
        </FormContainer>
    )
}

export default Form
