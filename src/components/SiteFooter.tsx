import React from "react";
import { Footer } from "flowbite-react";

const SiteFooter = () => {
  return (
    <Footer container={true}>
      <Footer.Copyright
        href="/"
        by="Mainnote Limited"
        year={new Date().getFullYear()}
      />
      <Footer.LinkGroup>
        <Footer.Link href="/remove_account">
          Remove account request
        </Footer.Link>
        <Footer.Link href="/about">
          About
        </Footer.Link>
        <Footer.Link href="/privacy_policy">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="/tos">
          Terms Of Service
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default SiteFooter;
