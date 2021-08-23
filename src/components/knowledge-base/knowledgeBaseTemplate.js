import React from "react";
import { graphql, Link } from "gatsby";
import styled from "react-emotion";
import { css, cx } from "emotion";

import "remark-admonitions/styles/classic.css";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import BaseLayout from "../../layouts/base";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ExternalLink from "../utils/ExternalLink";
import Breadcrumb from "../../layouts/components/breadcrumb";
import TableOfContents from "./components/tableOfContents";

const shortcodes = { ExternalLink };

const BlogContainer = styled("div")(
    {
        maxWidth: 960,
    },
    mq({
        margin: [25, "25px auto 100px auto"],
        width: ["auto", "100%"],
        img: {
            width: ["100%", "auto"],
            boxSizing: ["border-box", "border-box"],
            maxWidth: ["100vw", "100%"],
        },
    }),
);

const BlogHeader = styled("div")(
    {
        boxSizing: "border-box",
        width: "100%",
        marginTop: 25,
        margin: "0 auto",
        ".blog-header-inner": {
            width: "100%",
            marginTop: 25,
            a: {
                textDecoration: "none",
                color: theme.color.primaryDark,
                "&:hover": {
                    textDecoration: "underline",
                },
            },
        },
    },
    mq({
        ".blog-header-inner": {
            display: ["block", "none"],
        },
    }),
);

const blogStyles = css(
    {
        "h2, h3": {
            // Add an offset when we jump to a heading by clicking the link from Table of Contents (TOC)
            // The value depends upon the height of sticky header
            // banner height + header height + breadcrumb height - margin top on heading(s)
            scrollMarginTop: 100,
        },
        "h1, h2, h3, p, i, a": {
            color: "rgba(0, 0, 0, 0.84)",
            textRendering: "optimizeLegibility",
        },
        h1: {
            fontSize: "4em",
            fontWeight: theme.fontWeight.bold,
            textAlign: "center",
            margin: "75px 0 50px 0",
            lineHeight: "1em",
        },
        ".blog-post-content": {
            h2: {
                fontSize: "2.3em",
                fontWeight: theme.fontWeight.semiBold,
            },
            h3: {
                fontSize: "1.9em",
                fontWeight: theme.fontWeight.semiBold,
            },
            h4: {
                fontSize: "1.5em",
                fontWeight: theme.fontWeight.semiBold,
            },
            h5: {
                fontSize: "1.3em",
                fontWeight: theme.fontWeight.semiBold,
                margin: "1.2em 0 0.5em",
            },
            h6: {
                fontSize: "1em",
                fontWeight: theme.fontWeight.semiBold,
                margin: "1em 0 0.5em",
            },
            p: {
                lineHeight: "150%",
                fontSize: "1.1em",
            },
            a: {
                textDecoration: "underline",
                color: theme.color.primaryDark,
                "&:hover": {
                    textDecoration: "none",
                },
            },
            img: {
                margin: "0 auto",
                display: "block",
                backgroundColor: "white", //fixes the issue with transparent PNGs
                border: "1px solid rgb(230, 230, 230)",
                boxShadow: "rgba(230, 230, 230, 0.5) 0px 2px 4px 0px !important",
                padding: 10,
                borderRadius: 2,
            },
            iframe: {
                margin: "0 auto",
                display: "block",
                "&.video": {
                    objectFit: "contain",
                },
            },
            hr: {
                display: "block",
                unicodeBidi: "isolate",
                marginBlockStart: "0.5em",
                marginBlockEnd: "0.5em",
                marginInlineStart: "auto",
                marginInlineEnd: "auto",
                overflow: "hidden",
                borderStyle: "inset",
                borderWidth: "1px",
                margin: "50px auto",
                width: "90%",
                borderTop: "none",
                boxShadow: "none",
            },
            "ol, ul": {
                li: {
                    lineHeight: "150%",
                    fontSize: "1.1em",
                    marginBottom: 15,
                    marginLeft: 30,
                    "p, ol li, ul li": {
                        fontSize: "1em",
                    },
                },
            },
            blockquote: {
                fontSize: "1.2em",
                fontStyle: "italic",
                letterSpacing: "-0.36px",
                lineHeight: "1.4em",
                overflowWrap: "break-word",
                margin: "55px 0 33px 0",
                color: "rgba(0, 0, 0, 0.68)",
                padding: "0 0 0 50px",
                borderLeft: "10px solid #ccc",
                "&:before": {
                    color: "#ccc",
                    content: "open-quote",
                    fontSize: "4em",
                    lineHeight: "0.1em",
                    marginRight: "0.25em",
                    verticalAlign: "-0.4em",
                },
            },
            code: {
                background: "rgba(0,0,0,.05)",
                borderRadius: "2px",
                fontSize: "0.9em",
                whiteSpace: "pre-wrap",
                "&.language-text": {
                    fontSize: "0.8em",
                    padding: "3px 5px",
                },
            },
            pre: {
                fontSize: "0.9em",
                display: "block",
                whiteSpace: "pre",
                wordBreak: "break-word",
                background: "rgba(0,0,0,.05)",
                padding: 15,
                marginBottom: 25,
                code: {
                    backgroundColor: "transparent",
                },
            },
            ".twitter-tweet": {
                margin: "0 auto",
            },
        },
    },
    mq({
        fontSize: [14, 18],
        ".blog-post-content": {
            iframe: {
                "&.video": {
                    width: ["100%", 960],
                    height: ["auto", 540],
                },
            },
        },
    }),
);

const HorizontalLine = styled("div")({
    width: "100%",
    height: 1,
    marginTop: 32,
    marginBottom: 24,
    backgroundColor: theme.color.darkGray,
});

const TagList = styled("div")(
    {
        "& .tag": {
            boxSizing: "border-box",
            padding: "2px 10px",
            border: "1px solid #EAEAEA",
            backgroundColor: "#FAFAFC",
            textTransform: "uppercase",
            fontSize: 9,
            fontWeight: theme.fontWeight.semiBold,
            color: "#313097",
            marginRight: 8,
            marginBottom: 5,
            display: "inline-block",
            cursor: "pointer",
            transition: "transform 200ms ease-in",

            "&:hover": {
                transform: "translateY(-2px)",
            },
        },
    },
    mq({
        "& .text": {
            fontSize: [theme.fontSize.base, theme.fontSize.xl],
            display: ["block", "inline-block"],
            marginRight: [0, 16],
            marginBottom: [8, 0],
        },
        "& .tag": {
            fontSize: [9, 12],
            marginRight: [8, 12],
            letterSpacing: ["0", "0.025em"],
        },
    }),
);

const wrapperGridStyle = css(
    {
        display: "flex",
        maxWidth: 1200,
        margin: "0 auto",

        "& .sidebar": {
            width: 240,
        },
        "& .content": {
            flexGrow: 1,
            boxSizing: "border-box",
        },
    },
    mq({
        paddingTop: [30, 0],
        "& .sidebar": {
            display: ["none", "block"],
        },
        "& .content": {
            maxWidth: ["100%", "calc(min(100% - 240px, 1140px))"],
            padding: ["0px 16px", "0px 16px 0px 24px"],
        },
    }),
);

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const {
        mdx: { frontmatter, body, tableOfContents },
    } = data; // data.markdownRemark holds your post data

    // handle image transformation exceptions
    let featureImage = frontmatter.featureImage.publicURL;
    if (frontmatter.featureImage.childImageSharp !== null) {
        featureImage = frontmatter.featureImage.childImageSharp.fluid.src;
    }

    const breadcrumbs = [
        { link: "/", text: "Home" },
        { link: "/serverless-knowledge-base", text: "Serverless Knowledge Base" },
        { text: frontmatter.title },
    ];

    return (
        <BaseLayout
            title={frontmatter.title}
            description={frontmatter.description}
            fixedHeader={false}
            image={featureImage}
        >
            <Breadcrumb theme="dark" breadcrumbs={breadcrumbs} />
            <div className={wrapperGridStyle}>
                <div className="sidebar">
                    <TableOfContents tableOfContents={tableOfContents} />
                </div>
                <div className={cx("content", blogStyles)}>
                    <BlogHeader>
                        <div className="blog-header-inner">
                            <Link to="/serverless-knowledge-base">← Serverless Knowledge Base</Link>
                        </div>
                        <h1>{frontmatter.title}</h1>
                    </BlogHeader>
                    <BlogContainer>
                        <div className="blog-post">
                            <div className="blog-post-content">
                                <MDXProvider components={shortcodes}>
                                    <MDXRenderer>{body}</MDXRenderer>
                                </MDXProvider>
                            </div>
                        </div>
                        <HorizontalLine />
                    </BlogContainer>
                </div>
            </div>
        </BaseLayout>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            body
            frontmatter {
                author
                slug
                title
                description
                tags
                date(formatString: "MMMM DD, YYYY")
                featureImage {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            tableOfContents(maxDepth: 2)
        }
    }
`;
