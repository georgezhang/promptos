import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/PageLayout";
import PageContainer from "../components/PageContainer";
import H2 from "../elements/H2";
import P from "../elements/P";
import OL from "../elements/OL";
import OL1 from "../elements/OL1";
import UL1 from "../elements/UL1";

const TermsOfServicePage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <PageContainer>
        <H2>Terms of Service</H2>

        <P>
          Welcome to Promptos! These Terms of Service ("Terms") govern your
          access to and use of our mobile application and related services
          ("App").
          <b>
            Please read these Terms carefully before using the App. By accessing
            or using the App, you agree to be bound by these Terms. If you do
            not agree to these Terms, you may not use the App.
          </b>
        </P>
        <OL>
          <li>
            Acceptance of Terms By using the App, you affirm that you are at
            least 18 years old and capable of entering into a legally binding
            agreement. If you are using the App on behalf of an organization,
            you represent and warrant that you have the authority to bind that
            organization to these Terms.
          </li>
          <li>
            App Services Our App provides [briefly describe the services or
            functionalities provided by your App]. We reserve the right to
            modify, suspend, or discontinue any or all parts of the App at any
            time without notice or liability.
          </li>
          <li>
            User Accounts To access certain features of the App, you may need to
            create a user account. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account. You agree to provide accurate,
            current, and complete information during the registration process.
            You must immediately notify us of any unauthorized use of your
            account or any other breach of security.
          </li>
          <li>
            User Responsibilities
            <OL1>
              <li>
                Use of the App: You agree to use the App in compliance with all
                applicable laws, regulations, and these Terms. You will not use
                the App for any unlawful or unauthorized purpose or engage in
                any activity that could harm the App, its users, or any third
                parties.
              </li>
              <li>
                Content: You are solely responsible for any content you submit
                or transmit through the App. You represent and warrant that you
                have all necessary rights and permissions to share such content
                and that it does not violate any laws or infringe upon any
                intellectual property rights.
              </li>
              <li>
                Prohibited Conduct: You agree not to:
                <UL1>
                  <li>
                    Use the App to transmit or distribute any harmful, unlawful,
                    or infringing content.
                  </li>
                  <li>
                    Engage in any form of harassment, abuse, or threatening
                    behavior towards others.
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation with any person or entity.
                  </li>
                  <li>
                    Interfere with or disrupt the App's functionality or the
                    servers and networks connected to it.
                  </li>
                  <li>
                    Use any automated means or software to access the App or
                    collect data from it.
                  </li>
                </UL1>
              </li>
            </OL1>
          </li>
          <li>
            Intellectual Property All intellectual property rights in the App,
            including but not limited to trademarks, copyrights, and patents,
            are owned by us or our licensors. You agree not to use, modify,
            reproduce, or distribute any of the App's content without our prior
            written consent.
          </li>
          <li>
            Privacy We respect your privacy and handle your personal information
            in accordance with our Privacy Policy [provide a link to your
            Privacy Policy]. By using the App, you consent to our collection,
            use, and disclosure of your personal information as described in the
            Privacy Policy.
          </li>
          <li>
            Third-Party Links and Services The App may contain links to
            third-party websites, applications, or services that are not owned
            or controlled by us. We are not responsible for the content or
            practices of those third-party resources. Your interactions with any
            third-party website, application, or service are solely between you
            and the third party.
          </li>
          <li>
            Disclaimer of Warranties THE APP IS PROVIDED ON AN "AS IS" AND "AS
            AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
            IMPLIED, OR STATUTORY. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT
            LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </li>
          <li>
            Limitation of Liability TO THE MAXIMUM EXTENT PERMITTED BY
            APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING
          </li>
        </OL>
      </PageContainer>
    </PageLayout>
  );
};

export default TermsOfServicePage;

export const Head: HeadFC = () => <title>Terms of Service</title>;
