import React from 'react'
import Icon1 from '../../images/resume.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer,ServicesCard,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper } from './ServiceElements'

const Services = () => {
    return (
        <div>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2 style={{fontWeight:'bolder'}}>Resume Generator</ServicesH2>
                        <ServicesP>Recruiters can download the resume of the candidates</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2 style={{fontWeight:'bolder'}}>Apply and post</ServicesH2>
                        <ServicesP>You can apply for jobs as well as post jobs with ease just sign up and go!</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2 style={{fontWeight:'bolder'}}>Premium Benifits</ServicesH2>
                        <ServicesP>Candidates can filter jobs according to their skills and interest</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </div>
    )
}

export default Services
