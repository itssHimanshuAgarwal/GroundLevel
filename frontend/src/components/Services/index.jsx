import React from 'react'
import Icon1 from '../../images/i1.PNG'
import Icon2 from '../../images/i2.PNG'
import Icon3 from '../../images/i3.PNG'
import {ServicesContainer, ServicesH1, ServicesHs,ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>The Team</ServicesH1>
      <ServicesHs>Being a freelancer is a rollercoaster of emotions. We built Slate to keep your 
</ServicesHs>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help your fess and increase your overall revenue.</ServicesP>
        </ServicesCard>
        
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>you can acess our plataform online anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
