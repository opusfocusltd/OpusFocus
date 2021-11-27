import React from 'react'
import { FormContainer,FormContent,FormH1,FormInputWrapper,FormLabel,FormInput,FormA,FormSpan,Btn,FormP } from './SigninElements'
import useForm from '../../Hooks/useFormin'
import validate from '../validate1'
import {FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa'

import { SocialIcons,SocialMedia,SocialMediaWrap,SocialIconLink,Hr,FormDiv } from './SigninElements'

const FormSignin = ({submitForm}) => {

    const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);

    return (
       <FormContainer>
           <FormContent onSubmit={handleSubmit}>
               <FormH1>Get started with us today! Login to your account</FormH1>
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
               <Btn type='submit'>Sign In</Btn>
               <FormDiv>
               <FormSpan>
                  Or
                  <Hr></Hr>
               </FormSpan>
               </FormDiv>
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

export default FormSignin
