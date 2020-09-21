import React from "react";
import { graphql } from "gatsby";
import BaseLayout from "../layouts/base";
import Blogs from "../components/blog/blog";

export default ({ data }) => {
    const blogPosts = data.allMarkdownRemark.nodes;

    return (
        <BaseLayout title="Webiny Serverless Blog">
            <Blogs data={blogPosts} />
        </BaseLayout>
    );
};

export const listBlogsQuery = graphql`
    query MyQuery {
        allMarkdownRemark(limit: 1000) {
            nodes {
                id
                frontmatter {
                    author
                    description
                    slug
                    title
                    featureImage {
                        name
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
