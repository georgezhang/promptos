import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Downloads: FC<{}> = () => (
  <section id="downloads">
    <div className="px-4 mx-auto max-w-screen-md text-center py-24 flex items-center">
      <Link to="https://apps.apple.com/ca/app/promptos/id6755153473">
        <StaticImage
          src="../images/app-store-apple.png"
          alt="App Store Apple"
          width={700}
          height={180}
        />
      </Link>
      <Link to="https://play.google.com/store/apps/details?id=com.mainnote.taptap">
        <StaticImage
          src="../images/google-play-android.png"
          alt="Google Play Android"
          width={460}
          height={150}
        />
      </Link>
    </div>
  </section>
);

export default Downloads;
