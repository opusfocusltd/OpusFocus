import React from 'react'
import { FormContainer,FormContent,FormH1,FormInputWrapper,FormLabel,FormInput,FormA,FormSpan,Btn,FormP } from './SignupElements'
import useForm from '../../Hooks/useForm'
import validate from '../validate'
import {FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa'

import { SocialIcons,SocialMedia,SocialMediaWrap,SocialIconLink } from './SignupElements'

const FormSignup = ({submitForm}) => {

    const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);

    return (
       <FormContainer>
           <FormContent onSubmit={handleSubmit}>
               <FormH1>Get started with us today! Create your account by filling out the information below.</FormH1>
               <FormInputWrapper>
                   <FormLabel htmlFor='username'>
                       Username
                   </FormLabel>
                   <FormInput type='text' name='username' placeholder='Enter your username' value={values.username} onChange={handleChange}></FormInput>
                   {errors.username && <FormP>{errors.username}</FormP>}
               </FormInputWrapper>
               <FormInputWrapper>
                   <FormLabel htmlFor='email'>
                      Email
                   </FormLabel>
                   <FormInput type='email' name='email' placeholder='Enter your email' value={values.email} onChange={handleChange}></FormInput>
                   {errors.email && <FormP>{errors.email}</FormP>}
               </FormInputWrapper>
               <FormInputWrapper>
                   <FormLabel htmlFor='password'>
                       Password
                   </FormLabel>
                   <FormInput type='password' name='password' placeholder='Enter your password' value={values.password} onChange={handleChange}></FormInput>
                   {errors.password && <FormP>{errors.password}</FormP>}
               </FormInputWrapper>
               <FormInputWrapper>
                   <FormLabel htmlFor='password2'>
                      Confirm Password
                   </FormLabel>
                   <FormInput type='password' name='password2' placeholder='Confirm your password' value={values.password2} onChange={handleChange}></FormInput>
                   {errors.password2 && <FormP>{errors.password2}</FormP>}
               </FormInputWrapper>
               <Btn type='submit'>Sign Up</Btn>
               <FormSpan>
                   Already have an account? Login <FormA to='/signin'>here</FormA>
               </FormSpan>
               <SocialMedia>
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconLink className='i1' href='/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink className='i2' href='/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink className='i3' href='/' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink className='i4' href='/' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
           </FormContent>
       </FormContainer>
    )
}

export default FormSignup
