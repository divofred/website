import React from "react";

export const mainTitle = (
    <>
        <span>Here is how Webiny stands out</span> from other competitive CMS solutions
    </>
);

const productFundamentals = [
    {
        label: "Self hosted",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Open source",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Serverless",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "yes",
            text: "(kind of)",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "yes",
            text: "(kind of)",
        },
        sanity: {
            image: "yes",
            text: "(kind of)",
        },
        webflow: {
            image: "yes",
            text: "(kind of)",
        },
        height: "58px",
    },
    {
        label: "Headless CMS",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "yes",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "yes",
        },
        sanity: {
            image: "yes",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Website builder",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "yes",
        },
        height: "38px",
    },
    {
        label: "Multi-tenancy / multi-project / multi-site",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "yes",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "yes",
        },
        sanity: {
            image: "yes",
        },
        webflow: {
            image: "yes",
        },
        height: "38px",
    },
];

const pricingPlansData = [
    {
        label: "Free version available?",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "yes",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "yes",
        },
        webflow: {
            image: "yes",
        },
        height: "38px",
    },
    {
        label: "Free version limits",
        webiny: {
            text: "Unlimited",
        },
        contentful: {
            text: "5 users",
        },
        strapi: {
            text: "Up to 3 default roles",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            text: "3 non-admin users",
        },
        webflow: {
            text: (
                <div className="text-center">
                    50 CMS items
                    <br />1 GB bandwidth
                </div>
            ),
        },
        height: "56px",
    },
    {
        label: "Subscription plan - monthly cost",
        webiny: {
            text: "$9 - $27 /user",
        },
        contentful: {
            text: "$489 - $2,874",
        },
        strapi: {
            text: "$9 - $29  /user",
        },
        storyblok: {
            text: "€90 - €411",
        },
        sanity: {
            text: "$99 - $949",
        },
        webflow: {
            text: "$12 - $36 /user",
        },
        height: "38px",
    },
    {
        label: "Consumption or tier-based",
        webiny: {
            text: "Pay per user",
        },
        contentful: {
            text: "Tiered approach",
        },
        strapi: {
            text: "Pay per user",
        },
        storyblok: {
            text: "Tiered approach",
        },
        sanity: {
            text: "Tiered approach",
        },
        webflow: {
            text: "Pay per user",
        },
        height: "38px",
    },
    {
        label: "Users limit",
        webiny: {
            text: "Unlimited",
        },
        contentful: {
            text: "Up to 25",
        },
        strapi: {
            text: "Unlimited",
        },
        storyblok: {
            text: "Up to 40",
        },
        sanity: {
            text: "Unlimited",
        },
        webflow: {
            text: "Up to 9",
        },
        height: "38px",
    },
];

const contentManagmentData = [
    {
        label: "API type",
        webiny: {
            text: "GraphQL",
        },
        contentful: {
            text: "GraphQL, Rest",
        },
        strapi: {
            text: "GraphQL, Rest",
        },
        storyblok: {
            text: "GraphQL, Rest",
        },
        sanity: {
            text: "GraphQL, Rest",
        },
        webflow: {
            text: "Rest",
        },
        height: "38px",
    },
    {
        label: "Publishing workflows",
        webiny: {
            image: "yes",
        },
        contentful: {
            text: "[Launch feature]",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "yes",
        },
        webflow: {
            image: "yes",
            text: (
                <div className="text-center">
                    (customizable in <br /> higher paid plans)
                </div>
            ),
        },
        height: "76px",
    },
    {
        label: "CMS records limit",
        webiny: {
            text: "Unlimited",
        },
        contentful: {
            text: "25k / 50k",
        },
        strapi: {
            text: "Unlimited",
        },
        storyblok: {
            text: "10k",
        },
        sanity: {
            text: "1 million",
        },
        webflow: {
            text: "10k",
        },
        height: "38px",
    },
    {
        label: "Performance and cost management",
        webiny: {
            text: "(coming soon)",
        },
        contentful: {
            text: "Usage dashboard",
        },
        strapi: "",
        storyblok: "",
        sanity: "",
        webflow: "",
        height: "38px",
    },
    {
        label: "Content versioning and rollback",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            text: "In early alpha",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Content model definitions",
        webiny: { text: "Via UI, API and Code" },
        contentful: { text: "?" },
        strapi: "",
        storyblok: "",
        sanity: "",
        webflow: "",
        height: "38px",
    },
    {
        label: "Ability to customize the UI for content input",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Ability to introduce custom business logic to the API",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
        tabletHeight: "56px",
    },
    {
        label: "Ability to create custom field types",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Ability to pull content and data from 3rd party sources",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "56px",
    },
];

const websiteBuilding = [
    {
        label: "No code website builder",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "yes",
        },
        height: "38px",
    },
    {
        label: "Support for dynamic pages",
        webiny: {
            text: "(coming soon)",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "yes",
        },
        height: "38px",
    },
    {
        label: "Form builder",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "yes",
        },
        height: "38px",
    },
    {
        label: "Ability to create custom page elements",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Ability to introduce custom business logic",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Ability to render the content inside 3rd party apps and devices",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "56px",
    },
    {
        label: "Full control over the theme and layout",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Ability to expand and change the built-in elements",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
];

const customizationAbilities = [
    {
        label: "Use to build custom applications and APIs ",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Customize user authentication process",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Ability to brand and white label",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "yes",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
    {
        label: "Ability to have nested tenant hierarchy",
        webiny: {
            image: "yes",
        },
        contentful: {
            image: "no",
        },
        strapi: {
            image: "no",
        },
        storyblok: {
            image: "no",
        },
        sanity: {
            image: "no",
        },
        webflow: {
            image: "no",
        },
        height: "38px",
    },
];

const data = [
    {
        label: "Product fundamentals",
        arr: productFundamentals,
    },
    {
        label: "Pricing Plans",
        arr: pricingPlansData,
    },
    {
        label: "Content managment",
        arr: contentManagmentData,
    },
    {
        label: "Website building",
        arr: websiteBuilding,
    },
    {
        label: "Customization abilities",
        arr: customizationAbilities,
    },
];

export const cmsCompareData = [
    { label: "Contentful", link: "#" },
    { label: "Strapi", link: "#" },
    { label: "Storyblok", link: "#" },
    { label: "Sanity", link: "#" },
    { label: "Webflow", link: "#" },
];

export const cmsNames = ["Webiny", "Contentful", "Strapi", "Storyblok", "Sanity", "Webflow"];

export default data;
