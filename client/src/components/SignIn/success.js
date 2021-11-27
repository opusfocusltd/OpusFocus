import React from 'react'
import {FormSuccessContainer,FormSuccessImg,FormSuccessH1} from './SuccessElements'

const FormSuccess = () => {

    const img = require('../../images/img-8.svg').default

    return (
        <FormSuccessContainer>
            <FormSuccessH1>
                We have received your request!
            </FormSuccessH1>
            <FormSuccessImg src={img}></FormSuccessImg>
        </FormSuccessContainer>
    )
}

export default FormSuccess
