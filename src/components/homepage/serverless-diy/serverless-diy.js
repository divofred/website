import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import orangeBg from './assets/orange-bg.svg';
import circleCheckImg from './assets/circle-check.svg';
import circleCrossImg from './assets/cricle-cross.svg';
import webinyLogoImg from './assets/webiny.svg';
import diyImg from './assets/diy.svg';

const wrapperClass = css(
    {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    mq({
        padding: ['0 15px 25px 15px', '75px 0 25px 0']
    })
);

const contentContainerClass = css(
    {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1200,
        boxSizing: 'border-box'
    },
    mq({
        width: ['100%', '100%'],
        height: ['100%', 'auto'],
        padding: ['0px 0px 60px', '16px 0px 80px']
    })
);

const SubTitle = styled('h2')({
    fontSize: 36,
    fontWeight: 700,
    color: theme.color.black,
    textAlign: 'center',
    maxWidth: 379,
    margin: '0px auto 60px'
});

const TitleHighlight = styled('span')({
    backgroundImage: 'url(' + orangeBg + ')',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat'
});

const BenefitBox = styled('div')(
    {
        display: 'flex',
        justifyContent: 'center',
        '& .content-wrapper': {
            position: 'relative'
        }
    },
    mq({
        flexDirection: ['column', 'row'],
        alignItems: ['center', 'flex-start']
    })
);

const vsClass = css({
    color: theme.color.dark,
    fontSize: 50,
    fontWeight: 700,
    margin: '0px 10px'
});

const CircleIcon = styled('img')({
    width: 20,
    height: 20
});

const DIYContent = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 4,

    '& .text-content': {
        fontSize: 16,
        padding: 10,
        color: theme.color.dark
    },
    '& .icon': {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.color.white,
        padding: 10,
        borderBottomRightRadius: '50%',
        borderTopRightRadius: '50%',
        border: '1px solid #ECECEC',
        borderLeft: 0
    }
});

const WebinyContent = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 4,

    '& .text-content': {
        fontSize: 16,
        padding: 10,
        color: theme.color.white
    },
    '& .icon': {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.color.white,
        padding: 10,
        height: 43,
        borderBottomLeftRadius: '50%',
        borderTopLeftRadius: '50%',
        border: '1px solid #ECECEC',
        borderRight: 0
    }
});

const BackgroundWrapper = styled('div')({
    backgroundColor: theme.color.lightGray,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    marginLeft: -40
});

const WebinyBackgroundWrapper = styled('div')({
    background: 'linear-gradient(90deg, #FA5A28, #FF8965)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    marginLeft: 41
});

const DIYImg = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 40,
    '& img': {
        width: 64,
        height: 64
    }
});

const WebinyImg = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 40,
    '& img': {
        width: 64,
        height: 64
    }
});

const DIY_CONTENT_TEXT = [
    'Time consuming',
    'Increases the project cost',
    'Several attempts to get it right',
    'High risk of failing',
    'Need to figure out the right architecture',
    'Need to implement security best practices',
    'Hire additional staff with right expertise',
    'Need to create custom tooling',
    'Fear of the unknown',
    'Hard to test and debug',
    'Lack of know-how'
];

const WEBINY_CONTENT_TEXT = [
    'Faster time to market',
    'Much lower TCO',
    'Abstracts away all the serverless complexities',
    'Developers focus on their application logic from day one',
    'Reduces the risk of adopting serverless',
    'Proven performance and scale',
    'No need to reinvent the wheel',
    'Comes with already made products',
    'Deployment CLI with support for multiple environments',
    'Comes with an admin theme with over 30 React components',
    'Built in server side rendering',
    'Foundation for building dynamic serverless sites and apps',
    'Multi cloud support (coming soon)'
];

class ServerlessDIY extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <SubTitle>
                        How does it compare to&nbsp;
                        <TitleHighlight>DIY approach?</TitleHighlight>
                    </SubTitle>
                    <BenefitBox>
                        <div className={'content-wrapper'}>
                            <BackgroundWrapper/>
                            <DIYImg>
                                <img src={diyImg} alt={'do it yourself'}/>
                            </DIYImg>
                            {DIY_CONTENT_TEXT.map((text, index) => (
                                <DIYContent key={index}>
                                    <div className={'text-content'}>{text}</div>
                                    <div className={'icon'}>
                                        <CircleIcon src={circleCrossImg} alt={"red cross icon"}/>
                                    </div>
                                </DIYContent>
                            ))}
                        </div>
                        <p className={vsClass}>VS</p>
                        <div className={'content-wrapper'}>
                            <WebinyBackgroundWrapper/>
                            <WebinyImg>
                                <img src={webinyLogoImg} alt={''}/>
                            </WebinyImg>
                            {WEBINY_CONTENT_TEXT.map((text, index) => (
                                <WebinyContent key={index}>
                                    <div className={'icon'}>
                                        <CircleIcon src={circleCheckImg} alt={"green check icon"}/>
                                    </div>
                                    <div className={'text-content'}>{text}</div>
                                </WebinyContent>
                            ))}
                        </div>
                    </BenefitBox>
                </ContentContainer>
            </section>
        );
    }
}

export default ServerlessDIY;
