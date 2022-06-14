import React from "react";
import { graphql } from "gatsby";
import BaseLayout from "../layouts/base";
import ServerlessKnowledgeBase from "../components/knowledge-base/serverlessKnowledgeBase";

export default ({ data, location }) => {
    const knowledgeBasePosts = data.knowledgeBase.nodes;

    return (
        <BaseLayout title="Serverless Knowledge Base">
            <ServerlessKnowledgeBase data={knowledgeBasePosts} location={location} />
        </BaseLayout>
    );
};

export const listBlogsQuery = graphql`
    query AllServerlessKnowledgeBaseMdxQuery {
        knowledgeBase: allMdx(
            limit: 1000
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { slug: { regex: "/serverless-knowledge-base/" } } }
        ) {
            nodes {
                id
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    author
                    description
                    slug
                    title
                    tags
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
