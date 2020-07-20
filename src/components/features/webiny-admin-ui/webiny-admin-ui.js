import React, { Fragment } from "react";
import styled from "react-emotion";

import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import webinyAdminBg from "./assets/webiny-admin-ui-bg.svg";
import rectangleBg from "./assets/admin-ui-rectangle.svg";
import videoPreviewBg from "./assets/video-bg.svg";
import connectorImg from "./assets/connectors.svg";

import YTVideoComponent from "../../ui/layout/yt-video";
import PageBuilderDemoImg from "../../why-webiny/overview/assets/why-webiny-video-cover.png";

import { WEBINY_ADMIN_UI_FEATURES } from "./webiny-ui-data";
import {
    FeatureCard,
    FeaturesWrapper,
    ImageWrapper,
    videoPreviewClass,
    overviewContainerClass,
    TitleHighlight,
    Title,
    SubTitle,
    OverviewSectionWrapper
} from "../features-styles";

const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundImage: "url(" + webinyAdminBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom"
    },
    mq({
        backgroundSize: ["cover", "auto", "100%"],
        padding: ["0px 15px 0px", "0px 15px 110px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0
        }
    })
);

const CLIHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + rectangleBg + ")"
});

const WebinyAdminUI = props => {
    return (
        <Fragment>
            <Section {...props}>
                <ContentContainer className={overviewContainerClass}>
                    <OverviewSectionWrapper>
                        <Title>
                            Webiny <CLIHighlight>Admin UI</CLIHighlight>
                        </Title>
                        <SubTitle>
                            A user interface with a set of reusable React components.
                        </SubTitle>
                    </OverviewSectionWrapper>
                    <ImageWrapper>
                        <div className={videoPreviewClass}>
                            <img src={videoPreviewBg} alt={""} />
                        </div>
                        <YTVideoComponent img={PageBuilderDemoImg} id={"odotdrOOvJE"} />
                    </ImageWrapper>
                    <FeaturesWrapper>
                        {WEBINY_ADMIN_UI_FEATURES.map(feature => (
                            <FeatureCard
                                key={feature.id}
                                className={feature.includeConnectors ? "connectors" : ""}
                            >
                                {feature.includeConnectors && (
                                    <img
                                        className={"feature-card__connector"}
                                        src={connectorImg}
                                        alt={""}
                                    />
                                )}
                                <img
                                    className={"feature-card__img"}
                                    src={feature.imageURL}
                                    alt={feature.imageAltText}
                                />
                                <h4 className={"feature-card__title"}>{feature.title}</h4>
                                {typeof feature.body === "function" ? (
                                    feature.body()
                                ) : (
                                    <p className={"feature-card__body"}>{feature.body}</p>
                                )}
                            </FeatureCard>
                        ))}
                    </FeaturesWrapper>
                </ContentContainer>
            </Section>
        </Fragment>
    );
};

export default WebinyAdminUI;
