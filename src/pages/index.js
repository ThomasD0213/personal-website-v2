import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Harmonic from '../../static/img/Harmonic-HN.svg';

function AvatarHeader() {
  return (
      <div class="hero hero--dark">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="hero__title">Hi There!</h1>
              <p class="hero__subtitle">My name's Thomas and I make stuff!</p>
            </div>
            <div class="col">
              <div class="avatar">
                <img
                  class="avatar__photo avatar__photo--xl"
                  src="https://cdn.discordapp.com/attachments/883207135666786354/1186040827378671656/20230914_225904.jpg?ex=6591cd98&is=657f5898&hm=9638500350d37922af181e4f288e4b164615a9ec7a09df467cb6bf2145417c67&" />
                <div class="avatar__intro">
                  <div class="avatar__name">Thomas Dalgetty</div>
                  <small class="avatar__subtitle">
                    Programmer & doer of things
                  </small>
                </div>
              </div>
                <div class="dropdown dropdown--hoverable margin-top--sm">
                  <button class="button button--primary">My Links</button>
                  <ul class="dropdown__menu">
                    <li>
                      <a class="dropdown__link" href="https://linkedin.com/in/thomas-dalgetty">LinkedIn</a>
                    </li>
                    <li>
                      <a class="dropdown__link" href="https://www.github.com/ThomasD0213">Github</a>
                    </li>
                    <li>
                      <a class="dropdown__link" href="https://gitlab.com/spookiemilkjug">Gitlab</a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}

function AboutMe() {
  return (
    <div>
      <div class="container margin-top--md">
        <h1>About Me</h1>
        <p>I'm currently a Software Engineer at Lockheed Martin. I like to make things outside of work, and when I do, I'll make sure to post them here!
        When I'm not writing code I like to play guitar, go camping, work on my car, and hang out with friends.</p>
        <p>If you wish to get in touch, feel free to email me using the <a href="/contact">contact</a> page or through <a href="https://www.linkedin.com/in/thomas-dalgetty/">LinkedIn!</a></p>
        <p>Below are a few projects i'm particularly proud of working on and/or contributing to</p>
        <h2>Projects</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col col--4">
              <a href="https://github.com/ThomasD0213/teamtwo">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="432" height="109" version="1.2" baseProfile="tiny" data-reactroot=""><defs></defs><g fill="none" stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="bevel"><g fill="#ffffff" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)"><rect x="0" y="0" width="440" height="109"></rect></g><rect x="0" y="0" width="441" height="108" stroke="#eaecef" stroke-width="2"></rect><g fill="#586069" fill-opacity="1" stroke="none" transform="matrix(1.25,0,0,1.25,17,21)"><path vector-effect="none" fill-rule="evenodd" d="M4,9 L3,9 L3,8 L4,8 L4,9 M4,6 L3,6 L3,7 L4,7 L4,6 M4,4 L3,4 L3,5 L4,5 L4,4 M4,2 L3,2 L3,3 L4,3 L4,2 M12,1 L12,13 C12,13.55 11.55,14 11,14 L6,14 L6,16 L4.5,14.5 L3,16 L3,14 L1,14 C0.45,14 0,13.55 0,13 L0,1 C0,0.45 0.45,0 1,0 L11,0 C11.55,0 12,0.45 12,1 M11,11 L1,11 L1,13 L3,13 L3,12 L6,12 L6,13 L11,13 L11,11 M11,1 L2,1 L2,10 L11,10 L11,1"></path></g><g fill="#0366d6" fill-opacity="1" stroke="#0366d6" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><a target="" href="https://github.com/ThomasD0213/Teamtwo"><text fill="#0366d6" fill-opacity="1" stroke="none" space="preserve" x="41" y="33" font-family="sans-serif" font-size="16" font-weight="630" font-style="normal">Teamtwo</text></a></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><text fill="#586069" fill-opacity="1" stroke="none" space="preserve" x="17" y="65" font-family="sans-serif" font-size="14" font-weight="400" font-style="normal">DU/MSU Hackathon Project! </text></g><g fill="#24292e" fill-opacity="1" stroke="#24292e" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><text fill="#24292e" fill-opacity="1" stroke="none" space="preserve" x="33" y="91" font-family="sans-serif" font-size="12" font-weight="400" font-style="normal">TypeScript</text></g><g fill="#000000" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,110,78)"></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"></g><g fill="#000000" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,173,78)"></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"></g><circle cx="23" cy="86" r="7" stroke="none" fill="#2b7489"></circle></g></svg>
              </a>
          </div>
          <div class="col col--4">
              <a href="https://github.com/SimonHalvdansson/Harmonic-HN"> 
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="432" height="109" version="1.2" baseProfile="tiny" data-reactroot=""><defs></defs><g fill="none" stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="bevel"><g fill="#ffffff" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)"><rect x="0" y="0" width="440" height="109"></rect></g><rect x="0" y="0" width="441" height="108" stroke="#eaecef" stroke-width="2"></rect><g fill="#586069" fill-opacity="1" stroke="none" transform="matrix(1.25,0,0,1.25,17,21)"><path vector-effect="none" fill-rule="evenodd" d="M4,9 L3,9 L3,8 L4,8 L4,9 M4,6 L3,6 L3,7 L4,7 L4,6 M4,4 L3,4 L3,5 L4,5 L4,4 M4,2 L3,2 L3,3 L4,3 L4,2 M12,1 L12,13 C12,13.55 11.55,14 11,14 L6,14 L6,16 L4.5,14.5 L3,16 L3,14 L1,14 C0.45,14 0,13.55 0,13 L0,1 C0,0.45 0.45,0 1,0 L11,0 C11.55,0 12,0.45 12,1 M11,11 L1,11 L1,13 L3,13 L3,12 L6,12 L6,13 L11,13 L11,11 M11,1 L2,1 L2,10 L11,10 L11,1"></path></g><g fill="#0366d6" fill-opacity="1" stroke="#0366d6" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><a target="" href="https://github.com/SimonHalvdansson/Harmonic-HN"><text fill="#0366d6" fill-opacity="1" stroke="none" space="preserve" x="41" y="33" font-family="sans-serif" font-size="16" font-weight="630" font-style="normal">Harmonic-HN</text></a></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><text fill="#586069" fill-opacity="1" stroke="none" space="preserve" x="17" y="65" font-family="sans-serif" font-size="14" font-weight="400" font-style="normal">Modern Android client for Hacker News </text></g><g fill="#24292e" fill-opacity="1" stroke="#24292e" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><text fill="#24292e" fill-opacity="1" stroke="none" space="preserve" x="33" y="91" font-family="sans-serif" font-size="12" font-weight="400" font-style="normal">Java</text></g><g fill="#000000" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,80,78)"><a target="" href="https://github.com/SimonHalvdansson/Harmonic-HN/stargazers"><path vector-effect="none" fill-rule="evenodd" d="M14,6 L9.1,5.36 L7,1 L4.9,5.36 L0,6 L3.6,9.26 L2.67,14 L7,11.67 L11.33,14 L10.4,9.26 L14,6"></path></a></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><a target="" href="https://github.com/SimonHalvdansson/Harmonic-HN/stargazers"><text fill="#586069" fill-opacity="1" stroke="none" space="preserve" x="101" y="91" font-family="sans-serif" font-size="12" font-weight="400" font-style="normal">529</text></a></g><g fill="#000000" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,143,78)"><a target="" href="https://github.com/SimonHalvdansson/Harmonic-HN/network/members"><path vector-effect="none" fill-rule="evenodd" d="M10,5 C10,3.89 9.11,3 8,3 C7.0966,2.99761 6.30459,3.60318 6.07006,4.47561 C5.83554,5.34804 6.21717,6.2691 7,6.72 L7,7.02 C6.98,7.54 6.77,8 6.37,8.4 C5.97,8.8 5.51,9.01 4.99,9.03 C4.16,9.05 3.51,9.19 2.99,9.48 L2.99,4.72 C3.77283,4.2691 4.15446,3.34804 3.91994,2.47561 C3.68541,1.60318 2.8934,0.997613 1.99,1 C0.88,1 0,1.89 0,3 C0.00428689,3.71022 0.384911,4.3649 1,4.72 L1,11.28 C0.41,11.63 0,12.27 0,13 C0,14.11 0.89,15 2,15 C3.11,15 4,14.11 4,13 C4,12.47 3.8,12 3.47,11.64 C3.56,11.58 3.95,11.23 4.06,11.17 C4.31,11.06 4.62,11 5,11 C6.05,10.95 6.95,10.55 7.75,9.75 C8.55,8.95 8.95,7.77 9,6.73 L8.98,6.73 C9.59,6.37 10,5.73 10,5 M2,1.8 C2.66,1.8 3.2,2.35 3.2,3 C3.2,3.65 2.65,4.2 2,4.2 C1.35,4.2 0.8,3.65 0.8,3 C0.8,2.35 1.35,1.8 2,1.8 M2,14.21 C1.34,14.21 0.8,13.66 0.8,13.01 C0.8,12.36 1.35,11.81 2,11.81 C2.65,11.81 3.2,12.36 3.2,13.01 C3.2,13.66 2.65,14.21 2,14.21 M8,6.21 C7.34,6.21 6.8,5.66 6.8,5.01 C6.8,4.36 7.35,3.81 8,3.81 C8.65,3.81 9.2,4.36 9.2,5.01 C9.2,5.66 8.65,6.21 8,6.21 "></path></a></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><a target="" href="https://github.com/SimonHalvdansson/Harmonic-HN/network/members"><text fill="" fill-opacity="1" stroke="none" space="preserve" x="160" y="91" font-family="sans-serif" font-size="12" font-weight="400" font-style="normal">28</text></a></g><circle cx="23" cy="86" r="7" stroke="none" fill="#b07219"></circle></g></svg>
              </a>
          </div>
          <div class="col col--4">
              <a href="https://github.com/ThomasD0213/personal-website-v2">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="432" height="109" version="1.2" baseProfile="tiny" data-reactroot=""><defs></defs><g fill="none" stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="bevel"><g fill="#ffffff" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)"><rect x="0" y="0" width="440" height="109"></rect></g><rect x="0" y="0" width="441" height="108" stroke="#eaecef" stroke-width="2"></rect><g fill="#586069" fill-opacity="1" stroke="none" transform="matrix(1.25,0,0,1.25,17,21)"><path vector-effect="none" fill-rule="evenodd" d="M4,9 L3,9 L3,8 L4,8 L4,9 M4,6 L3,6 L3,7 L4,7 L4,6 M4,4 L3,4 L3,5 L4,5 L4,4 M4,2 L3,2 L3,3 L4,3 L4,2 M12,1 L12,13 C12,13.55 11.55,14 11,14 L6,14 L6,16 L4.5,14.5 L3,16 L3,14 L1,14 C0.45,14 0,13.55 0,13 L0,1 C0,0.45 0.45,0 1,0 L11,0 C11.55,0 12,0.45 12,1 M11,11 L1,11 L1,13 L3,13 L3,12 L6,12 L6,13 L11,13 L11,11 M11,1 L2,1 L2,10 L11,10 L11,1"></path></g><g fill="#0366d6" fill-opacity="1" stroke="#0366d6" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><a target="" href="https://github.com/ThomasD0213/Personal-Website-v2"><text fill="#0366d6" fill-opacity="1" stroke="none" space="preserve" x="41" y="33" font-family="sans-serif" font-size="16" font-weight="630" font-style="normal">Personal-Website-v2</text></a></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><text fill="#586069" fill-opacity="1" stroke="none" space="preserve" x="17" y="65" font-family="sans-serif" font-size="14" font-weight="400" font-style="normal">The repository that stores my website! </text></g><g fill="#24292e" fill-opacity="1" stroke="#24292e" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"><text fill="#24292e" fill-opacity="1" stroke="none" space="preserve" x="33" y="91" font-family="sans-serif" font-size="12" font-weight="400" font-style="normal">JavaScript</text></g><g fill="#000000" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,110,78)"></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"></g><g fill="#000000" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,173,78)"></g><g fill="#586069" fill-opacity="1" stroke="#586069" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)"></g><circle cx="23" cy="86" r="7" stroke="none" fill="#f1e05a"></circle></g></svg>
              </a>
          </div>
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
        <AboutMe></AboutMe>
      </main>
    </Layout>
  );
}
