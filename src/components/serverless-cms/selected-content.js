import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import mq from "../utils/breakpoints";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "../ui/button";
import theme from "../utils/theme";

import HeadlessMain from "./assets/headless/bitmap.svg";
import arrowIcon from "./assets/btn-white-arrow.svg";
import head1 from "./assets/headless/icon1.svg";
import head2 from "./assets/headless/icon2.svg";
import head3 from "./assets/headless/icon3.svg";
import head4 from "./assets/headless/icon4.svg";

import PageMain from "./assets/page-builder/bitmap.svg";
import page1 from "./assets/page-builder/icon1.svg";
import page2 from "./assets/page-builder/icon2.svg";
import page3 from "./assets/page-builder/icon3.svg";
import page4 from "./assets/page-builder/icon4.svg";

import FormMain from "./assets/form-builder/bitmap.svg";
import form1 from "./assets/form-builder/icon1.svg";
import form2 from "./assets/form-builder/icon2.svg";
import form3 from "./assets/form-builder/icon3.svg";
import form4 from "./assets/form-builder/icon4.svg";

import FileMain from "./assets/file-manager/bitmap.svg";
import file1 from "./assets/file-manager/icon1.svg";
import file2 from "./assets/file-manager/icon2.svg";
import file3 from "./assets/file-manager/icon3.svg";
import file4 from "./assets/file-manager/icon4.svg";

const Data = [
    {
        id: 1,
        mainImg: HeadlessMain,
        title: 'GraphQL based headless CMS with powerful content modeling features.',
        relatedItems: [
            {text: 'Robust GraphQL API', img: head1},
            {text: 'Fine-grain permission control', img: head2},
            {text: 'Content localization and versioning', img: head3},
            {text: 'Powered by DynamoDB and Elasticsearch', img: head4},
        ],
        buttonText: 'Check out Webiny Headless cms'
    },
    {
        id: 2,
        mainImg: PageMain,
        title: 'For when you need a quick landing page created without any coding.',
        relatedItems: [
            {text: 'Drag&drop page builder', img: page1},
            {text: 'Build pages using interactive React elements', img: page2},
            {text: 'Expand using custom plugins', img: page3},
            {text: 'SEO optimized', img: page4},
        ],
        buttonText: 'Check out Webinybage builder'
    },
    {
        id: 3,
        mainImg: FormMain,
        title: 'Create forms using a drag&drop interface and track how they convert.',
        relatedItems: [
            {text: 'No-code form builder', img: form1},
            {text: 'Input validation control', img: form2},
            {text: 'Webhook support', img: form3},
            {text: 'ReCAPTCA protected', img: form4},
        ],
        buttonText: 'Check out Webiny form builder'
    },
    {
        id: 4,
        mainImg: FileMain,
        title: 'Upload, categorise, search and edit your files.',
        relatedItems: [
            {text: 'Asset management', img: file1},
            {text: 'Image editor built-in', img: file2},
            {text: 'Powered by S3 and Elasticsearch', img: file3},
            {text: 'Image delivery API with CDN caching', img: file4},
        ],
        buttonText: 'Check out Webiny File Manager '
    },
]

const containerClass = css(
  {
    position: "relative",
  }
);

const SlideSection = styled("div")(
  {
    height: 700, 

    ".fade-enter": {
        opacity: 0,
    },
    ".fade-enter.fade-enter-active": {
        opacity: 1,
        transition: "opacity 200ms ease-in",
        transitionDelay: "200ms",
    },
    ".fade-exit": {
        opacity: 1,
    },
    ".fade-exit.fade-exit-active": {
        opacity: 0,
        transition: "opacity 200ms ease-in",
    },
    ".fade-exit-done": {
        opacity: 0,
    },
  }
)

const SelectedItem = styled("div")(
  {
    zIndex: 1,
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    textAlign: "center",

    "& img.main-image": {
        maxWidth: 670,
        margin: "0 auto"
    },

    "& h4": {
        margin: "15px 0 0",
        fontWeight: theme.fontWeight.bold,
        fontSize: 24,
        lineHeight: "40px",
        color: theme.color.black
    }
  },
  mq({
    maxWidth: [450, "100%"],
    margin: ["10px auto 0", 0],
    flexDirection: ["column", "column"],
    padding: ["24px", "24px 36px"],
    position: ["relative", "absolute"],
  })
)

const RelatedItems = styled("div")(
    {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "30px 40px",
        margin: "20px 0",

        "& .related-item": {
            display: "flex",
            alignItems: "center",

            "&.reverse": {
                flexDirection: "row-reverse",

                "& img": {
                    marginLeft: 20
                }
            },

            "& p": {
                margin: 0,
                fontWeight: theme.fontWeight.bold,
                fontSize: 18,
                lineHeight: "23px"
            },

            "&:not(.reverse)": {
                "& img": {
                    marginRight: 20
                }
            },
            
            "& img": {
                minWidth: 40
            }
        }
    }
)

const ctaBtn = css({
    maxWidth: 360,
    width: "360px !important",
    backgroundColor: theme.color.primaryDark + "!important",
    margin: "0 auto",

    "& img": {
        marginLeft: 15
    }
})

const SelectedContent = (props) => {
    const selectedNav = props.selectedNav
    const selectedContent = Data.find(item => item.id === selectedNav.id)
    return (
        <SlideSection>
            <TransitionGroup className={containerClass}>
                <CSSTransition key={selectedNav.id}  timeout={600} classNames={"fade"}>
                    <SelectedItem>
                        <img src={selectedContent.mainImg} alt="" className="main-image"/>
                        <h4 className="main-title">{selectedContent.title}</h4>
                        <RelatedItems>
                            {
                                selectedContent.relatedItems.map((item, index) => (
                                    <div className={`related-item ${index % 2 ? "" : "reverse"}`}>
                                        <img src={item.img} alt=""/>
                                        <p>{item.text}</p>                                        
                                    </div>
                                ))
                            }
                        </RelatedItems>
                        <Button type="primary" className={ctaBtn}>
                            {selectedContent.buttonText} <img src={arrowIcon} alt="" className="icon" />
                        </Button>
                    </SelectedItem>
                </CSSTransition>
            </TransitionGroup>
        </SlideSection>    
    )
}

export default SelectedContent