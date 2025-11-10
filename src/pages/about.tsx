import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../components/PageLayout";
import PageContainer from "../components/PageContainer";
import H2 from "../elements/H2";
import P from "../elements/P";
import OL from "../elements/OL";
import STRONG from "../elements/STRONG";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <PageContainer>
        <H2>
          Promptos: Transform Your Photos with AI – Effortlessly!
        </H2>

        <P><STRONG>AI Photo Editor – Edit, Create, and Share with Prompts!</STRONG></P>

<P>Bring your photos to life with the power of AI! Our app isn’t just another photo editor – it’s a creative companion that transforms your ideas into stunning images using intelligent AI technology. Whether you want to enhance your selfies, create artistic masterpieces, or experiment with unique visual styles, our app makes it effortless.</P>

<P><STRONG>Edit Photos Using AI Prompts</STRONG></P>
<P>Simply upload your photo and describe what you want in words. Our AI understands your instructions and applies professional-grade edits instantly. From subtle enhancements to dramatic transformations, your imagination guides the AI.</P>

<P><STRONG>Discover and Share Creative Prompts</STRONG></P>
<P>Get inspired by the community! Explore prompts shared by other users, try them on your own photos, or share your own creative instructions. Build a library of prompts that reflect your style and creativity.</P>

<P><STRONG>Features You’ll Love:</STRONG></P>
<P>
  <OL>AI-powered editing: Enhance, retouch, or completely transform your photos.</OL>
<OL>Prompt-based creativity: Control your edits using simple text prompts.</OL>
<OL>Artistic styles and effects: Turn ordinary photos into artistic creations.</OL>
<OL>Community sharing: Share your favorite prompts and explore others’ ideas.</OL>
<OL>Easy to use: Intuitive interface designed for effortless editing.</OL></P>

<P><STRONG>Why You’ll Love It:</STRONG></P>
<P>Make professional-quality edits in seconds, explore endless creative possibilities with prompts, and join a vibrant community of creators sharing inspiration and innovation.</P>

<P>Unleash your creativity. Transform your photos. Share your vision – all with the power of AI.</P>

      </PageContainer>
    </PageLayout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
