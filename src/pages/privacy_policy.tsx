import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/PageLayout";
import PageContainer from "../components/PageContainer";
import H2 from "../elements/H2";
import P from "../elements/P";
import OL from "../elements/OL";
import OL1 from "../elements/OL1";
import P1 from "../elements/P1";

const Privacy: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <PageContainer>
        <H2>Privacy Policy</H2>
        <P>
          This Privacy Policy ("Policy") describes how "Prompto APP"
          collects, uses, and discloses personal information when you use our
          mobile application ("App"). Please read this Policy carefully before
          using the App. By accessing or using the App, you consent to the
          collection, use, and disclosure of your personal information as
          described in this Policy. If you do not agree with this Policy, please
          do not use the App.
        </P>
        <OL>
          <li>
            Information We Collect
            <OL1>
              <li>
                Personal Information: When you create an account or use certain
                features of the App, we may collect personal information, such
                as your name, email address, contact information, and any other
                information you voluntarily provide to us.
              </li>
              <li>
                Usage Information: We may collect information about how you use
                the App, including your device information, IP address, mobile
                operating system, and App usage data. This information is
                collected using cookies, log files, and similar technologies.
              </li>
            </OL1>
          </li>
          <li>
            Use of Information
            <OL1>
              <li>
                We use the information we collect to provide, maintain, and
                improve the App's functionality and user experience.
              </li>
              <li>
                Personal information may be used to communicate with you,
                respond to your inquiries, and provide customer support.
              </li>
              <li>
                We may use aggregated and anonymized data for analytical
                purposes, to understand user preferences, and to improve our
                services.
              </li>
              <li>
                We may use your email address to send you promotional materials,
                newsletters, and other information about our products or
                services. You can opt-out of receiving these communications at
                any time.
              </li>
            </OL1>
          </li>
          <li>
            Sharing of Information
            <OL1>
              <li>
                We may share personal information with third-party service
                providers who assist us in operating the App and providing our
                services. These service providers are obligated to protect your
                information and may only use it for the purposes specified by
                us.
              </li>
              <li>
                We may disclose personal information if required by law, court
                order, or government regulation, or if we believe that such
                disclosure is necessary to protect our rights, property, or
                safety, or the rights, property, or safety of others.
              </li>
              <li>
                In the event of a merger, acquisition, or sale of all or a
                portion of our assets, personal information may be transferred
                to the acquiring entity.
              </li>
            </OL1>
          </li>
          <li>
            Data Security
            <P1>
              We implement reasonable security measures to protect the
              confidentiality and integrity of your personal information.
              However, please note that no method of transmission or storage
              over the Internet is completely secure. Therefore, we cannot
              guarantee the absolute security of your information.
            </P1>
          </li>
          <li>
            Third-Party Links and Services
            <P1>
              The App may contain links to third-party websites, applications,
              or services that are not owned or controlled by us. We are not
              responsible for the privacy practices or content of those
              third-party resources. Your interactions with any third-party
              website, application, or service are solely between you and the
              third party.
            </P1>
          </li>
          <li>
            Children's Privacy
            <P1>
              The App is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under the
              age of 13. If you believe we have inadvertently collected
              information from a child under 13, please contact us immediately,
              and we will take steps to remove the information.
            </P1>
          </li>
          <li>
            Changes to this Policy
            <P1>
              We reserve the right to modify or update this Policy at any time.
              We will notify you of any material changes by posting the revised
              Policy on the App or by other means prior to the changes taking
              effect. Please review this Policy periodically for any updates.
            </P1>
          </li>
          <li>
            Contact Us
            <P1>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at
              george.jx.zhang@mainnote.com .
            </P1>
          </li>
        </OL>
        <P>Effective Date: November 10, 2025</P>
      </PageContainer>
    </PageLayout>
  );
};

export default Privacy;

export const Head: HeadFC = () => <title>Privacy</title>;
