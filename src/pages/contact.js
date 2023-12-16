import React from 'react';
import Layout from '@theme/Layout';
import {Helmet} from 'react-helmet';

export default function Hello() {
  return (
    <Layout title="Contact" description="Fill out the form to send an email my way!">
        <Helmet>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </Helmet>
        <div class="hero hero-primary margin-top--md">
            <div class="container">
                <h1 class="hero__title">Contact Me!</h1>
                <p class="hero__subtitle">Fill out the form below and I'll get back to you as soon as I can!</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <form action="http://localhost:5000/mail" method="POST" id="contact-form">
                        <div class="contact-form margin--md padding--md">
                            <div class="email-input margin-top--sm margin-left--sm">
                                <input class="shadow--tl" type="text" id="email" name="email" placeholder="Email" required/> 
                            </div>
                            <div class="subject-input margin-top--sm margin-left--sm">
                                <input class="shadow--tl" type="text" id="subject" name="subject" placeholder="Subject" required/> 
                            </div>
                            <div class="message-input margin-top--sm margin-left--sm">
                                <textarea class="shadow--tl" name="body" placeholder="Message" rows="10" required/> 
                            </div>
                            <div class="g-recaptcha margin-top--sm margin-left--sm" data-sitekey="6LfzUDMpAAAAANx6XY23VUQkYn_QPu2UHrLwhPsN"></div>
                            <div>
                                <button className="button button--primary margin--sm">Send</button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </Layout>
  );
}