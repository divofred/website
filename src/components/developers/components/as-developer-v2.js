import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';

import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import asDevTitle from '../assets/as-developer-title.svg';
import groupOfPeople from '../assets/as-dev-group-of-people.svg';
import boostProductivity from '../assets/boost-productivity.svg';
import buildMore from '../assets/build-more.svg';
import powerfulEditing from '../assets/powerful-editing.svg';
import quickStart from '../assets/quick-start.svg';
import scale from '../assets/scale.svg';
import winningTeam from '../assets/winning-team.svg';

const TitleImg = styled ('img') ({
  display: 'block',
  margin: '20px auto',
});

const AsDevContainer = styled ('div') (
  {
    padding: '50px 0 0 0',
  },
  mq ({
    backgroundColor: [theme.color.white, 'transparent'],
  })
);

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq ({
    margin: ['0 20px 20px', '0 20% 40px 20%'],
  })
);

const FlexContainer = styled ('div') (
  {
    flexWrap: 'wrap',
  },
  mq ({
    display: ['block', 'flex'],
  })
);

const FlexBox = styled ('div') (
  {
    boxSizing: 'border-box',
    display: 'flex',
  },
  mq ({
    width: ['100%', '540px'],
    padding: [20, 0],
    flexDirection: ['column', 'row'],
    textAlign: ['center', 'left'],
    img: {
      marginRight: [0, 25],
    },
    marginBottom: [10, 25],
    '&:nth-child(odd)': {
      marginRight: [0, 10],
    },
    '&:nth-child(even)': {
      marginLeft: [0, 10],
    },
  })
);

const Desc = styled ('div') ({
  h3: {
    textTransform: 'uppercase',
    fontWeight: theme.fontWeight.bold,
    fontSize: 18,
  },
});

const GroupOfPeople = styled ('img') (
  {
    display: 'block',
  },
  mq ({
    width: ['80%', '100%'],
    margin: ['0 auto', 'auto'],
  })
);

const QuoteWrapper = styled ('div') (
  {
    position: 'relative',
  },
  mq ({
    marginBottom: [140, 0],
  })
);

const QuoteBase = css (
  {
    textAlign: 'left',
    fontStyle: 'italic',
    fontSize: 18,
    color: theme.color.grayText,
    position: 'absolute',
    right: 0,
    boxSizing: 'border-box',
  },
  mq ({
    top: [150, 25],
    width: ['100%', 320],
  })
);

const Quote = styled ('p') (QuoteBase);

const QuoteAuthor = styled ('p') (
  QuoteBase,
  {
    textAlign: 'right',
  },
  mq ({
    marginTop: [100, 90],
    right: [10, 0],
  })
);

class AsDeveloper extends React.Component {
  render () {
    return (
      <AsDevContainer>
        <TitleImg alt="As Developer" src={asDevTitle} />
        <SubText>
          you can expect to benefit from Webiny in the following ways:
        </SubText>
        <ContentContainer>
          <FlexContainer>
            <FlexBox>
              <img src={quickStart} />
              <Desc>
                <h3>Quick start</h3>
                <p>
                  It takes only a minute or two to install Webiny, or just a few
                  seconds, if you use the hosted version. Your project will be
                  up and running in no time.
                </p>
              </Desc>
            </FlexBox>
            <FlexBox>
              <img src={powerfulEditing} />
              <Desc>
                <h3>Powerful Content Editing</h3>
                <p>
                  Easily build anything from a landing page, blog post to product
                  pages and much more with the integrated page editor. No need to
                  constantly meddle with HTML and CSS to get stuff done.
                </p>
              </Desc>
            </FlexBox>
            <FlexBox>
              <img src={buildMore} />
              <Desc>
                <h3>BUILD MORE THAN WEBSITES</h3>
                <p>
                  Webiny isn't just about websites, the underlying platform is
                  open and designed for developing custom apps and plugins.
                </p>
              </Desc>
            </FlexBox>
            <FlexBox>
              <img src={boostProductivity} />
              <Desc>
                <h3>Boost productivity</h3>
                <p>
                  Because Webiny is designed as a set of numerous components
                  working seamlessly together, you will experience less bugs and
                  less problems while developing. Your clients will be happy,
                  and you will have a peace of mind.
                </p>
              </Desc>
            </FlexBox>
            <FlexBox>
              <img src={scale} />
              <Desc>
                <h3>Worry Free Scale</h3>
                <p>
                  Whether you're building a small website, or already serving millions of users, Webiny has your back.
                </p>
              </Desc>
            </FlexBox>
            <FlexBox>
              <img src={winningTeam} />
              <Desc>
                <h3>It's a Winning Team</h3>
                <p>
                  Work with the latest industry-proven technology stack. Use React to create client interface, webpack to bundle your project into a deployable package, Node and GraphQL to build the server-side API and utilize the NoSQL database to store and query your data.
                </p>
              </Desc>
            </FlexBox>
          </FlexContainer>
        </ContentContainer>
      </AsDevContainer>
    );
  }
}

export default AsDeveloper;
