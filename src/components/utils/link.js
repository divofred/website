import React from "react";
import GatsbyLink, { navigate } from "gatsby-link";

export default ({ children, ...props }) => {
    if (props.to !== null && (props.to.startsWith("/docs/") || props.to.startsWith("http"))) {
        return (
            <a key={props.key} className="link" rel="prerender" href={props.to}>
                {children}
            </a>
        );
    } else if (props.to !== null) {
        return (
            <GatsbyLink key={props.key} className={"link"} rel="prerender" to={props.to}>
                {children}
            </GatsbyLink>
        );
    } else {
        return (
            <a key={props.key} className="link" rel="prerender" href="#">
                {children}
            </a>
        );
    }
};