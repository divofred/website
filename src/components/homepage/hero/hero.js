import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Button from '../../ui/button';

import heroBg from './assets/hero-bg.svg';
import gitHubLogo from './assets/github-logo.svg';

const Hero = styled ('section') (
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat left top fixed',
    backgroundSize: 'cover',
    color: '#fff',
    boxSizing: 'border-box',
  },
  mq ({
    textAlign: ['center', 'left'],
    padding: ['100px 20px 25px', '150px 0 25px'],
    height: ['auto', 'calc(100vh - 150px)'],
    minHeight: ['auto', 700],
    maxHeight: ['auto', 768],
  })
);

const Title = styled ('h1') (
  {
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 40,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const LeftSide = styled ('div') (
  {},
  mq ({
    textAlign: ['center', 'left'],
    width: ['100%', 375],
  })
);

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.light,
    lineHeight: '25px',
    marginBottom: 40,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const SemiBold = styled ('span') ({
  fontWeight: theme.fontWeight.semiBold,
});

const Link = styled ('a') ({
  fontSize: 14,
  color: '#FFFFFF',
  textAlign: 'center',
  fontWeight: theme.fontWeight.regular,
  margin: '15px auto 0 auto',
  display: 'block',
  textDecoration: 'none',
  position: 'relative',
  paddingLeft: 10,
  '&:hover': {
    textDecoration: 'underline',
  },
});

const GitHubLogo = styled ('img') ({
  position: 'absolute',
  left: 'calc(50% - 80px)',
  top: 3,
});

export default ({children, ...props}) => (
  <Hero {...props}>
    <ContentContainer>
      <LeftSide>
        <Title data-aos="fade-up" data-aos-delay="300">
          Developer-friendly Serverless CMS powered by GraphQL and React
        </Title>
        <SubText data-aos="fade-up" data-aos-delay="500">
          Webiny is a <SemiBold>serverless open source CMS</SemiBold> that
          allows you to build websites and web applications, both large and
          small, by giving you all the parts you need in a single package which
          is optimized to seamlessly work together in a performant way.
        </SubText>
        <Button link="/pricing" type="fullWidth">
          Get Started
        </Button>
        <Link href="https://github.com/Webiny/webiny-js">
          <GitHubLogo src={gitHubLogo} />
          View Webiny on GitHub
        </Link>
      </LeftSide>
    </ContentContainer>
  </Hero>
);
