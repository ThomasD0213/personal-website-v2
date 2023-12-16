import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function AvatarHeader() {
  return (
      <div class="hero hero--dark">
        <div class="container">
          <h1 class="hero__title">Hi There!</h1>
          <p class="hero__subtitle">My name's Thomas and I make stuff!</p>
          <div>
            <img src="/static/img/20230914_225904.jpg"/>
          </div>
        </div>
      </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The portfolio website of Thomas Dalgetty">
        <AvatarHeader></AvatarHeader>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
