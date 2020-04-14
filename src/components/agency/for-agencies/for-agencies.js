import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../../ui/content-container';

import forAgenciesBg from './assets/agencies-bg.svg'
import checkBoxIcon from './assets/check.svg';
import highlightedBg from './assets/highlight-title.svg';

const wrapperClass = css (
  {
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: 'url(' + forAgenciesBg + ')',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  mq ({
    paddingTop: [40, 0],
    paddingBottom: [40, 0],
    marginBottom: [24, 0]
  })
);

const contentContainerClass = css (
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    maxWidth: 1200
  },
  mq ({
    paddingTop: [100, 180],
    paddingBottom: [100, 180],
    marginBottom: [24, 0]
  })
);

const TextWrapper = styled ('div') (
  {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto'
  },
  mq ({
    padding: ['0px 16px', 0]
  })
);

const Title = styled ('h2') (
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 28,
  }
);


const SubTitle = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 20,
    maxWidth: 890
  }
);

const SubText = styled ('p') (
  {
    fontSize: 24,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 0,
    margin: 0
  },
  props => ({
    fontSize: props.size
  })
);

const SolutionsWrapper = styled ('div') (
  {
    display: 'flex',
    paddingTop: 125,
    paddingBottom: 70
  },
  mq ({
    flexDirection: ['column', 'row'],
    flexWrap: ['nowrap', 'wrap', 'nowrap'],
    justifyContent: ['flex-start', 'space-around']
  })
);

const SolutionCard = styled ('div') (
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 240,
    minHeight: 240,
    background: theme.color.white,
    boxShadow: '2px 3px 15px rgba(100, 100, 100, 0.239216)',
    borderRadius: 8,
    padding: '0px 16px 32px',
    '& p': {
      fontSize: 18,
      color: theme.color.dark
    },
    '&:last-child' : {
      marginBottom: 0
    }
  },
  mq ({
    maxWidth: [280, 480, 280],
    marginRight: [0, 0, 30],
    marginBottom: [75, 0],
    '&:nth-child(3)' : {
      marginTop: [0, 75, 0],
    },
    '&:last-child' : {
      marginTop: [0, 75, 0],
      marginRight: [0, 0, 0],
    },
    flex: ['0 0 0', '1 0 40%', '1']
  })
);

const CheckBoxImage = styled ('img') (
  {
    position: 'relative',
    marginTop: -50,
    marginBottom: 20
  }
);


const HighlightedBg = styled ('span') (
  {
    backgroundImage: 'url(' + highlightedBg + ')',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat',
  }
);

class ForAgencies extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <ContentContainer className={contentContainerClass}>
          <TextWrapper>
            <Title>
              We are looking for web agencies to give <br />
              Webiny a try.
            </Title>
            <SubTitle>
              Webiny is 100% free and open-source and on top of that, our dev team is on standby to help your in-house team - all free of cost. We want you to give Webiny a try on a project and let us know your feedback on how we can make it even better.
            </SubTitle>
            <SubText>
              For you as a web agency Webiny solves:
            </SubText>
            <SolutionsWrapper>
              <SolutionCard>
                <CheckBoxImage src={checkBoxIcon} alt='check mark'/>
                <p>
                  A unified technology stack regardless if you are building a small website, a heavy-duty web application or a super-scaleable API.
                </p>
              </SolutionCard>
              <SolutionCard>
                <CheckBoxImage src={checkBoxIcon} alt='check mark'/>
                <p>
                  A foundation for your projects that has you back when it comes to uptime and handling any demand you put in front of it - no need to check if the client's site is up and running.
                </p>
              </SolutionCard>
              <SolutionCard>
                <CheckBoxImage src={checkBoxIcon} alt='check mark'/>
                <p>
                  A product with no-lock it - it's open-source and you host it on your own AWS cloud. You can customize it and adapt it in any way that is suits your project's requirements.
                </p>
              </SolutionCard>
              <SolutionCard>
                <CheckBoxImage src={checkBoxIcon} alt='check mark'/>
                <p>
                  It's a CMS where you can communicate directly to the team that has built it.
                </p>
              </SolutionCard>

            </SolutionsWrapper>
            <SubText size={28}>
                Get ahead of your competition by adopting <HighlightedBg>
                serverless and Webiny.
              </HighlightedBg>
            </SubText>
          </TextWrapper>
        </ContentContainer>
      </section>
    );
  }
}

export default ForAgencies;
