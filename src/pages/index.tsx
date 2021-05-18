import React from "react";
import './index.css';
import { PageProps } from "gatsby";
import Intro from "../components/intro/intro";
import SocialMedia from "../components/social-media/social-media";
import SEO from "../components/seo";

export default function IndexPage(props: PageProps) {
  return (
    <div className="root">
      <SEO
        title="Software Engineer"
        description="Software Engineer" />
      <div className="photo-content"></div>
      <div className="about-content">
        <div className="content">
          <Intro 
            topTitle="Hello, my name is"
            bottomTitle="Achmad Irianto Eka Putra">
            <p>
              I am a software engineer, who likes new technology, 
              all programming similar to C/C++ or what we call the C/C++ family and really like playing FPS games on Mobile.
              I have made a big project at PT. A2Z Solusindo Teknologi and made several small open source projects.
            </p>
            <SocialMedia 
              githubUrl="https://github.com/ryanbekhen"
              instagramUrl="https://instagram.com/ryanbekhen.me"
              mediumUrl="https://ryanbekhen.medium.com" />
          </Intro>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}