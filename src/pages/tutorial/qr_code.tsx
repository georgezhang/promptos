import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/PageLayout";
import PageContainer from "../../components/PageContainer";
import H2 from "../../elements/H2";
import H3 from "../../elements/H3";
import P from "../../elements/P";
import STRONG from "../../elements/STRONG";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const QRCodeTutorialPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <PageContainer>
        <div className="flex flex-col items-center space-y-8">
          {/* App Logo */}
          <div className="flex justify-center mb-6">
            <StaticImage
              src="../images/icon.png"
              alt="Promptos App Logo"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>

          <H2>QR Code Tutorial</H2>

          {/* Step 1 */}
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                1
              </div>
              <H3>Install the App</H3>
            </div>
            <P>
              If you haven't installed Promptos yet, download it from your preferred app store:
            </P>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="https://apps.apple.com/ca/app/promptos/id6755153473"
                className="transform transition hover:scale-105"
              >
                <StaticImage
                  src="../images/app-store-apple.png"
                  alt="Download on App Store"
                  width={200}
                  height={60}
                />
              </Link>
              <Link 
                to="https://play.google.com/store/apps/details?id=com.mainnote.taptap"
                className="transform transition hover:scale-105"
              >
                <StaticImage
                  src="../images/google-play-android.png"
                  alt="Get it on Google Play"
                  width={215}
                  height={65}
                />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                2
              </div>
              <H3>Scan QR Code</H3>
            </div>
            <P>
              <STRONG>Scan the QR code below to get the new prompt and image:</STRONG>
            </P>
            <div className="flex justify-center bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <P>QR Code Placeholder</P>
                <P>Point your camera at the QR code to scan</P>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <P>
                <STRONG>Tip:</STRONG> Make sure you have the Promptos app installed and open before scanning the QR code.
              </P>
            </div>
          </div>

          {/* Additional Instructions */}
          <div className="w-full max-w-2xl bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <P>
              <STRONG>💡 Pro Tip:</STRONG> After scanning the QR code, the prompt will be automatically loaded in the app. 
              You can then apply it to your photos or save it for later use!
            </P>
          </div>
        </div>
      </PageContainer>
    </PageLayout>
  );
};

export default QRCodeTutorialPage;

export const Head: HeadFC = () => <title>QR Code Tutorial - Promptos</title>;