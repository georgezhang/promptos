import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/PageLayout";
import PageContainer from "../components/PageContainer";
import H2 from "../elements/H2";
import P from "../elements/P";
import OL from "../elements/OL";
import STRONG from "../elements/STRONG";

const RemoveAccountPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <PageContainer>
        <H2>
          Account Deletion - Promptos AI Photo Editor
        </H2>

        <P><STRONG>Delete Your Promptos Account</STRONG></P>

        <P><STRONG>In your mobile app, click on the "Settings" tab, then click on "Delete Account". Your private data will be deleted immediately.</STRONG></P>

        <P>If you wish to permanently delete your Promptos account and all associated data without accessing the mobile app, please follow the steps outlined below. We value your privacy and make the account deletion process straightforward and transparent.</P>

        <P><STRONG>How to Request Account Deletion:</STRONG></P>
        <P>
          <OL>Send an email to <STRONG>george.jx.zhang@mainnote.com</STRONG> with the subject line "Account Deletion Request"</OL>
          <OL>Include your registered email address and the following information in your request:
            <OL>Full name associated with the account</OL>
            <OL>Username (if applicable)</OL>
            <OL>A brief confirmation that you want to permanently delete your account</OL>
          </OL>
          <OL>We will process your deletion request within 30 days of receipt</OL>
          <OL>You will receive a confirmation email once the deletion is complete</OL>
        </P>

        <P><STRONG>Data That Will Be Deleted:</STRONG></P>
        <P>Upon account deletion, we will permanently remove the following data:</P>
        <P>
          <OL>Your user profile information (name, email, username)</OL>
          <OL>All uploaded photos and images from your account</OL>
          <OL>Your personal AI prompt library and creative instructions</OL>
          <OL>Account settings and preferences</OL>
          <OL>Usage history and activity logs</OL>
        </P>

        <P><STRONG>Data Retention:</STRONG></P>
        <P>
          <OL><STRONG>Anonymous Usage Data:</STRONG> We may retain anonymized usage statistics for analytical purposes, but these cannot be linked to your identity.</OL>
          <OL><STRONG>Legal Compliance:</STRONG> Certain data may be retained for the period required by law or for legitimate business purposes, such as fraud prevention or legal disputes.</OL>
          <OL><STRONG>Backup Systems:</STRONG> Residual copies may remain in our backup systems for a limited time (up to 90 days) before being permanently destroyed.</OL>
        </P>

        <P><STRONG>Important Notes:</STRONG></P>
        <P>
          <OL>Account deletion is permanent and cannot be undone</OL>
          <OL>You will lose access to all your saved prompts and edited photos</OL>
          <OL>Any purchased credits or subscriptions will be forfeited</OL>
          <OL>We may retain certain information as required by applicable laws</OL>
        </P>

        <P><STRONG>Contact Information:</STRONG></P>
        <P>If you have any questions about the account deletion process or need assistance, please contact us at:</P>
        <P>
          <OL>Email: <STRONG>george.jx.zhang@mainnote.com</STRONG></OL>
          <OL>Subject: "Account Deletion Request"</OL>
        </P>

        <P>Thank you for using Promptos. We respect your decision and will process your request promptly.</P>

      </PageContainer>
    </PageLayout>
  );
};

export default RemoveAccountPage;

export const Head: HeadFC = () => <title>Delete Account - Promptos</title>;