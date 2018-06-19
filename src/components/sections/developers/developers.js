import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'

import Features from './components/features'
import TechTools from './components/tech-tools'
import ShowMeCode from './components/show-me-code'

import bg from './assets/developers-bg.svg'
import devIcon from './assets/developers-icon.svg'

const DevelopersContainer = styled('section')({
  background: 'url(' + bg + ') no-repeat left top',
  backgroundSize: 'cover',
  width: '100%',
  paddingTop: 50,
})

const Icon = styled('img')({
  display: 'block',
  margin: '0 auto',
})

const SubTitle = styled('h2')({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.white,
  textAlign: 'center',
  paddingTop: 25,
  marginTop: 0,
})

const SubText = styled('p')({
  fontSize: theme.fontSize.subText,
  fontWeight: theme.fontWeight.regular,
  color: theme.color.white,
  textAlign: 'center',
  margin: '0 20%',
  lineHeight: '150%',
  marginBottom: 50,
})

class Developers extends React.Component {
  render() {
    return (
      <DevelopersContainer>
        <Icon src={devIcon} />
        <SubTitle>Made for Developers</SubTitle>
        <SubText>
          Developers are the heroes behind every website. Webiny wants to make
          complex things easier for you, so you spend less time coding, and more
          time with friends and family.
        </SubText>
        <Features />
        <TechTools />
        <ShowMeCode />
      </DevelopersContainer>
    )
  }
}

export default Developers
