import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";

import heroBg from "./assets/hero-bg.svg";
import webinyBg from "./assets/webiny-hallmark.svg";

const HeroSection = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + heroBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundSize: ["cover", "auto", "100%"],
        padding: ["0px 0px 110px", "0"]        
    }),
);

const ctaButton = css(
    {
        maxWidth: 320,
        margin: "0 auto"
    }
)

const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", 525],
        padding: ["75px 0px 0px", "85px 0px 0px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

const HeroSectionWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 880,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 20,
        marginTop: 40,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const SubTitle = styled("h3")(
    {
        maxWidth: 880,
        fontSize: theme.fontSize["2xl"],
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 0,
        marginBottom: 26,
        color: theme.color.white,
        textAlign: "center",
    },
    mq({        
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: 1,
        top: 0,
    },
    mq({
        width: ["auto", "100%"],
        height: ["100%", 756],
        left: ["-45%", 0],
    }),
);

const HeroComponent = () => {
    return (
        <HeroSection>
            <ContentContainer className={heroContainerClass}>
                <WebinyHallMarkImage src={webinyBg} alt={""} />
                <HeroSectionWrapper>
                    <Title>The framework for building enterprise-grade serverless solutions</Title>
                    <SubTitle>
                        Webiny provides organisations with the technology, processes, knowledge and support to successfully 
                        build and deliver solutions on top of serverless infrastructure.
                    </SubTitle>
                    <Button type="secondary" className={ctaButton}>
                        Talk to Us
                    </Button>
                </HeroSectionWrapper>
            </ContentContainer>
        </HeroSection>
    );
};

export default HeroComponent;
