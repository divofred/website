import React, { useState } from "react";
import { graphql } from "gatsby";
import GatsbyLink from "gatsby-link";

import BaseLayout from "../../layouts/base";
import { 
  Article,
  BlogContainer,
  TutorialsGrid,
  BookADemoContainer,
  HeroWhyContainer,
  HeaderContainer,
  CodeFieldBorder,
  CodeField,
  Tile,
  TileLink,
  IntegrationsGrid,
  OtherIntegrationsTitle,
  Hr,
  OtherIntegrationsContainer,
} from '../../components/tech-integration/TechIntegration.styled'
import {
  ToolTip,
  ToolTipText,
  CodeFieldText } from "../../components/new-homepage/hero-section/hero.styled"
  import BlogCard from "../../components/blog/components/blog-card"
  import FeaturedBlog from "../../components/blog/components/featured-blog"
  import Button from "../../components/ui/button"
import { 
  description as NextJSIntro,
  title as NextJSTitle
 } from "./nextjs-cms"
 import { 
  description as GatsbyIntro,
  title as GatsbyTitle
 } from "./gatsby-cms"
 import { 
  description as ReactIntro,
  title as ReactTitle
} from "./react-cms"
import { 
  description as VueJSIntro,
  title as VueJSTitle
} from "./vuejs-cms"

import VueJSLogo from "../../assets/vuejs-logotype.svg"
import ReactLogo from "../../assets/react-logotype.svg"
import NextJSLogo from "../../assets/nextjs.svg"
import GatsbyLogo from "../../assets/gatsby.svg"
import featuredImage from "../../assets/webiny-plus-gatsby.png";
import logo from "../../assets/window-gatsby.svg";
import Step1 from "../../assets/step-1.svg";
import Step2 from "../../assets/step-2.svg";
import Step3 from "../../assets/step-3.svg";
import WebinyWindow from "../../assets/window-webiny.svg";

export const title = "Flutter";
export const description = "Gatsby integrates different content, APIs and services seamlessly into one experience.";
export const introduction =
  "Speed up your mobile development workflow by using Webiny Headless CMS as a content store for Flutter.";
const whyThisTech =
  "<p>Flutter is an open source framework from Google that allows developers to build, test and deploy beautiful mobile, web, desktop and embedded apps from a single codebase. Leveraging Webiny Headless CMS as a database and GraphQL API allows you to persist data for use in your Flutter application.</p>";
const integrationCopy =
  "Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase. Combine that with the benefits of Serverless architecture with Webiny to ensure your content is available everywhere, to everyone, all of the time.";
const techBenefits = [
  "Compiles to ARM or Intel machine code as well as JavaScript for fast performance on any device",
  "Deploy from a single codebase to multiple environments including mobile phones, web and embedded devices.",
  "Includes automated testing, developer tooling and other features",
];

const VueCMS = ({ data }) => {
  const hasOnlyOneArticle = data?.allMdx?.edges?.length === 1
  const [copyButtonState, setCopyButtonState] = useState(false);
  return (
    <BaseLayout title={`${title} CMS`} description={description} fixedHeader={false} image={featuredImage}>
      <Article>
        <HeroWhyContainer>
          <HeaderContainer>
            <h1>
              Integrate {title} with <span className="hilightText">Webiny Headless CMS</span>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: introduction }} />
          </HeaderContainer>
        </HeroWhyContainer>
        <BlogContainer>
          <div className="why why-tech">
            <div className="content">
              <h3>
                <span className="hilightText">Why</span> {title}?
              </h3>
              <div dangerouslySetInnerHTML={{ __html: whyThisTech }} />
            </div>
            <img src={logo} alt={`Stylized ${title} logo`} />
          </div>
          </BlogContainer>
          <Hr />
          <BlogContainer>
          <div className="why why-webiny">
            <div className="content">
              <h3>
                <span className="hilightText">Why</span> Webiny?
              </h3>
              <p>
              <GatsbyLink to="/enterprise-serverless-cms/headless-cms" className="hilightText">Webiny Headless CMS</GatsbyLink> contains everything an
                enterprise needs to build, manage and deliver content at scale.
              </p>
              <p>
                Webiny doesn't just manage your content, it also allows you to manage all of your
                projects centrally using built-in internationalization and multi-site features, and
                use advanced processes that support organization-wide collaboration.
              </p>
            </div>
            <img src={WebinyWindow} alt="Stylized Webiny logo" />
          </div>
          <h2>
            <span className="hilightText">{title} + Webiny</span> integration
          </h2>
          <p dangerouslySetInnerHTML={{ __html: integrationCopy }} />
          <div className="benefits">
            <div className="col1">
              <h3>
                {title} <span className="hilightText">Benefits</span>
              </h3>
              <ul>
                {techBenefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="col2">
              <h3>
                Webiny Headless CMS <span className="hilightText">Benefits</span>
              </h3>
              <ul>
                <li>Keep your data in your cloud, under your own security perimeter</li>
                <li>
                  Unlock greater performance by storing and delivering content closer to your users
                </li>
                <li>
                  Webiny runs on highly-scalable fault-tolerant serverless services that scale in
                  and out in seconds
                </li>
                <li>
                  Marketing teams have full control to create and manage content, landing pages,
                  files, and forms across multiple web properties
                </li>
                <li>
                  Webiny is open source, released under an MIT license, and architected for
                  extensibility
                </li>
              </ul>
            </div>
          </div>
        </BlogContainer>
        <div className="body">
        <BlogContainer>
          <h2>
            Building a Frontend With <span className="hilightText">{title}</span>
          </h2>
          <p className="lead">
            Learn how to build a frontend for Webiny Headless CMS using React.{" "}
          </p>
          <div className="step">
            <img src={Step1} alt="Step 1" className="step-icon" />
            <div className="content">
              <span className="hilightText">
                <h4>Install and Deploy Webiny</h4>
              </span>
              <p>
                Skip this step if you already have Webiny installed and deployed. Be sure to check
                out the{" "}
                <a href="https://www.webiny.com/docs/get-started/install-webiny#prerequisites">
                  prerequisites
                </a>{" "}
                for installing Webiny on your local machine.
              </p>
              <p>Then, create a new Webiny project by running the following command. If you get stuck or for more details,{" "}
                <a href="https://www.webiny.com/docs/get-started/install-webiny">
                  please see our documentation.
                </a>
              </p>
            </div>
            <div className="action">
              <CodeFieldBorder>
                    <CodeField>
                        <CodeFieldText>npx create-webiny-project my-webiny-project</CodeFieldText>
                        <ToolTip
                            onClick={() => {
                                setCopyButtonState(true);
                                setTimeout(() => setCopyButtonState(false), 2000);
                                navigator.clipboard.writeText(
                                    "npx create-webiny-project my-webiny-project",
                                );
                            }}
                            className={copyButtonState ? "stiky-tooltip" : ""}
                        >
                            <ToolTipText>{copyButtonState ? "Copied" : "Copy"}</ToolTipText>
                        </ToolTip>
                    </CodeField>
                </CodeFieldBorder>
            </div>
          </div>
          <div className="step">
            <img src={Step2} alt="Step 2" className="step-icon" />
            <div className="content">
              <span className="hilightText">
                <h4>Create a new {title} site</h4>
              </span>
              <p>
                First, <a href="https://docs.flutter.dev/get-started/install">download and install Flutter</a>, then run the following command to initialize a new application.
              </p>
              <p><a href="https://flutter.dev/learn">Visit the Flutter docs site for more information</a>.</p>
            </div>
            <div className="action">
              <CodeFieldBorder>
                        <CodeField>
                            <CodeFieldText>flutter create my-app</CodeFieldText>
                            <ToolTip
                                onClick={() => {
                                    setCopyButtonState(true);
                                    setTimeout(() => setCopyButtonState(false), 2000);
                                    navigator.clipboard.writeText(
                                        "flutter create my-app",
                                    );
                                }}
                                className={copyButtonState ? "stiky-tooltip" : ""}
                            >
                                <ToolTipText>{copyButtonState ? "Copied" : "Copy"}</ToolTipText>
                            </ToolTip>
                        </CodeField>
                    </CodeFieldBorder>
            </div>
          </div>
          <div className="step">
            <img src={Step3} alt="Step 3" className="step-icon" />
            <div className="content">
              <span className="hilightText">
                <h4>Add and Configure GraphQL</h4>
              </span>
              <p>
                Add the Flutter wrapper for graphql/client.dart and <a href="https://pub.dev/packages/graphql_flutter">follow the instructions in the docs</a> to configure it to connect to Webiny's GraphQL API using your API Token.
              </p>
              <p>
                <a href="https://www.webiny.com/docs/headless-cms/basics/using-graphql-api">
                  Webiny API instructions →
                </a>
              </p>
            </div>
            <div className="action">
              <CodeFieldBorder>
                      <CodeField>
                          <CodeFieldText>flutter pub add graphql_flutter</CodeFieldText>
                          <ToolTip
                              onClick={() => {
                                  setCopyButtonState(true);
                                  setTimeout(() => setCopyButtonState(false), 2000);
                                  navigator.clipboard.writeText(
                                      "npm install --save vue-apollo graphql apollo-boost",
                                  );
                              }}
                              className={copyButtonState ? "stiky-tooltip" : ""}
                          >
                              <ToolTipText>{copyButtonState ? "Copied" : "Copy"}</ToolTipText>
                          </ToolTip>
                      </CodeField>
                  </CodeFieldBorder>
            </div>
          </div>
        </BlogContainer>
        </div>
        {data.allMdx.edges.length > 0 && (
          <div className="postbody">
            <BlogContainer>
              <h2>
                Check out these tutorials on using<br/>
                <span className="hilightText">Webiny + {title}</span> on our blog
              </h2>
              {hasOnlyOneArticle ? (
                  <FeaturedBlog data={data.allMdx.edges[0].node.frontmatter} />
              ) : (
                <TutorialsGrid>
                  {data.allMdx.edges.map(({node}) => (
                  <BlogCard {...node.frontmatter} key={node.id} />
                ))}
                </TutorialsGrid>
              )}
            </BlogContainer>
          </div>
        )}
        <BlogContainer>
          <BookADemoContainer>
            <h2>Working on a larger project that requires a Headless CMS?</h2>
            <Button type="purple" link="https://site.webiny.com/forms/product-demo/">Book a Demo</Button>
          </BookADemoContainer>
        </BlogContainer>
        <OtherIntegrationsContainer>
          <BlogContainer>
            <OtherIntegrationsTitle>Other <span className="hilightText">Integrations</span></OtherIntegrationsTitle>
            <p className="integrations-lead">Webiny also supports other frontend technologies.</p>
            <IntegrationsGrid>
                <Tile>
                  <img src={GatsbyLogo} alt="Gatsby logo" />
                  <div className="content">
                    <h3 className="tiletitle">{GatsbyTitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: GatsbyIntro }}/>
                    <TileLink to="/integrations/gatsby-cms">Discover more &rarr;</TileLink>
                  </div>
                </Tile>
                <Tile>
                  <img src={NextJSLogo} alt="Gatsby logo" />
                  <div className="content">
                    <h3 className="tiletitle">{NextJSTitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: NextJSIntro }}/>
                    <TileLink to="/integrations/nextjs-cms">Discover more &rarr;</TileLink>
                  </div>
                </Tile>
                <Tile>
                  <img src={ReactLogo} alt="Gatsby logo" />
                  <div className="content">
                    <h3 className="tiletitle">{ReactTitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: ReactIntro }}/>
                    <TileLink to="/integrations/react-cms">Discover more &rarr;</TileLink>
                  </div>
                </Tile>
                <Tile>
                  <img src={VueJSLogo} alt="Vue logo" />
                  <div className="content">
                    <h3 className="tiletitle">{VueJSTitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: VueJSIntro }}/>
                    <TileLink to="/integrations/vuejs-cms">Discover more &rarr;</TileLink>
                  </div>
                </Tile>
              </IntegrationsGrid>
          </BlogContainer>
        </OtherIntegrationsContainer>
      </Article>
    </BaseLayout>
  );
};

export default VueCMS;

export const pageQuery = graphql`
  query TechFlutterQuery {
      allMdx(filter: {frontmatter: {tech: {in: "flutter"}}}) {
        edges {
          node {
            id
            frontmatter {
              author
              description
              slug
              title
              featureImage {
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
  }
`;
