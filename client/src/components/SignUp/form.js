import React,{useState} from 'react'
import FormSignup from './signup'
import FormSuccess from './success'
import { FormContain,FormContent,FormImg,FormSpan,FormL } from './FormElements'


const Form = () => {

    const img = require('../../images/img-2.svg').default


    const [isSubmitted,setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true)
    }

    return (
       <>
       <FormContain>
           <FormSpan><FormL to='/'>×</FormL></FormSpan>
           <FormContent className='d1'>
               <FormImg src={img}></FormImg> 
           </FormContent>
           {!isSubmitted ? (<FormSignup submitForm={submitForm} className='d2'/>) : (<FormSuccess className='d2'/>)}
       </FormContain>
        </>
    )
}

export default Form


