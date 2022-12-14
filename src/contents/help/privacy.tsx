import React from 'react';

// import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import { Container } from 'react-bootstrap';

import SEO from '../../components/commons/Seo';
import Footer from '../../components/commons/Footer';
import Section from '../../components/commons/Section';

import useScrollTo from '../../hooks/useScrollTo';

const PrivacyContent = () => {
  // const pageData = useStaticQuery(graphql`
  //   query PrivacyPageQuery {
  //   }
  // `);

  const { formatMessage } = useIntl();
  const [footerRef, scrollToFooter] = useScrollTo(null);

  return (
    <>
      <SEO title={formatMessage({ id: 'privacy.title' })} className="kedoo-help" />
      <main className="pb-3">
        <Section>
          <Container>
            <h2>Privacy policy</h2>
            <p>
              We welcome Content Creators, IP owners and Brands (&ldquo;<strong>you</strong>&rdquo;
              or &ldquo;<strong>your</strong>&rdquo;) to www.kedoo.com (&ldquo;
              <strong>Kedoo</strong>&rdquo; or &ldquo;<strong>Site</strong>&rdquo;). Kedoo is
              operated by Kedoo Entertainment DMCC whose registered office is Unit No: 2702, Tiffany
              Towers, Plot No: JLT-PH2-W2A Jumeirah Lakes Towers, Dubai, United Arab Emirates
              (&ldquo;<strong>KEDOO</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo;, &ldquo;
              <strong>us</strong>&rdquo; or &ldquo;<strong>our</strong>&rdquo;). We are committed to
              protecting and respecting your privacy (&ldquo;<strong>you</strong>&rdquo;, &ldquo;
              <strong>your</strong>&rdquo;, or &ldquo;<strong>user</strong>&rdquo;).
            </p>
            <p>
              This Privacy Policy (&ldquo;<strong>Policy</strong>&rdquo;) sets out the basis on
              which any Personal Data (defined below) we collect on you, or that you provide to us,
              will be processed by us. Please read the following carefully to understand what data
              we collect, how that data is used and the ways it can be shared by us and you.
            </p>
            <p>
              The data controller of your Personal Data is Kedoo Entertainment DMCC whose registered
              office is Unit No: 2702, Tiffany Towers, Plot No: JLT-PH2-W2A Jumeirah Lakes Towers,
              Dubai, United Arab Emirates. We use data processors who are third parties who provide
              elements of services for us. We have contracts in place with our data processors. This
              means that they cannot do anything with your personal information unless we have
              instructed them to do it. They will hold it securely and retain it for the period we
              instruct.
            </p>
            <p>
              <strong>Personal Data</strong> means any information about an individual from which
              that person can be identified, whether indirectly or directly in particular by
              reference to an identifier such as a name, an identification number, location data or
              an online identifier (&ldquo;<strong>Personal Data</strong>&rdquo;). It does not
              include data which has been anonymised so that it can no longer be linked back to an
              individual.
            </p>
            <h3>Information we collect about you</h3>
            <p>
              This is information about you that you give us by creating an account with us on the
              Site, filling in the &lsquo;Contact Us&rsquo; form on the Site or by corresponding
              with us by phone, email or otherwise or Personal Data that you otherwise choose to
              make available through the Site (for example when you look to collaborate with
              others).
            </p>
            <p>
              If you are Creator, we will collect your name, email address, phone number, bank
              details (to make any payments), your image and any Personal Data in any Content that
              you choose to make available.
            </p>
            <p>
              If you represent a Brand, we will collect your name, email address, phone number, bank
              details.
            </p>
            <h3>Personal Data we process automatically</h3>
            <p>
              We may automatically collect the following information about all users of our Site,
              which may be Personal Data as it may (particularly when combined) enable you to be
              identified:
            </p>
            <ul>
              <li>
                technical information, including the Internet protocol (IP) address used to connect
                your computer or other device to the Internet, browser type and version, time zone
                setting, browser plug-in types and versions, operating system and platform;
              </li>
              <li>
                information about your visit, including the dates and times you use the Site, length
                of visits to certain pages, page interaction data (such as scrolling, clicks, and
                mouse-overs), methods used to browse away from the page, and any phone number used
                to call the contact phone number provided on our Site; and
              </li>
              <li>Cookie information as explained in our Cookie Policy.</li>
            </ul>
            <h3>Information we receive from other sources</h3>
            <p>
              This is information we receive about you from any third-party source, specifically
              regarding your social media channels where you are a Creator in order to provide our
              analytics services as explained in our terms and conditions. This includes data about
              views, tags, watch times etc.
            </p>
            <p>
              We do not choose to collect any special categories of Personal Data about you (this
              includes details about your race or ethnicity, religious or philosophical beliefs, sex
              life, sexual orientation, political opinions, trade union membership, information
              about your health and genetic and biometric data). However, if you are a Creator, you
              may choose to make such information public in any contributions or creations in which
              case this is entirely at your discretion.
            </p>
            <h3>How we use your Personal Data</h3>
            <p>We use your Personal Data for the following lawful bases:</p>
            <ul>
              <li>
                where we need to, to perform obligations contained within a contract we are about to
                enter into or have entered into with you, including the Terms; or
              </li>
              <li>
                where it is necessary for our legitimate interests of enforcing rights; protecting
                our business; correspondence with you or concerning you; analytics; fraud checks,
                testing, troubleshooting, surveys; or
              </li>
              <li>where we need to comply with a legal or regulatory obligation.</li>
            </ul>
            <p>
              Generally, we do not rely on consent as a legal basis for processing your Personal
              Data other than in relation to sending direct marketing communications. We will get
              your opt-in consent before we:
            </p>
            <ul>
              <li>send you any marketing communications; or</li>
              <li>share your Personal Data with any third party for the purposes of marketing.</li>
            </ul>
            <p>
              You can ask us to stop sending you marketing messages (or ask us to stop providing
              your details to third parties for marketing) at any time by contacting us at{' '}
              <a href="mailto:support@kedoo.com">support@kedoo.com</a> or adjusting your account
              settings on the Site or following one of the opt out links contained within marketing
              emails. If you are receiving marketing messages from a third party and want them to
              stop, you will need to contact them directly.
            </p>
            <p>Specifically, we use Personal Data held about you in the following ways:</p>
            <h3>Personal Data you give to us. We will use this Personal Data:</h3>
            <ul>
              <li>to set up an account for you on the Site and provide the services;</li>
              <li>to provide you with Personal Data in respect of any enquiry you should make;</li>
              <li>to notify you about changes to any services we provide through the Site.</li>
            </ul>
            <p>
              It is important that the Personal Data we hold about you is accurate and current.
              Please keep us informed if your Personal Data changes during your relationship with
              us.
            </p>
            <h3>Personal Data we collect about you. We will use this Personal Data:</h3>
            <ul>
              <li>
                to deliver the Site effectively and for internal operations, including
                troubleshooting, data analysis, testing, research, statistical and survey purposes;
              </li>
              <li>
                to improve the Site to ensure that content is presented in the most effective manner
                for you and for your computer or other device;
              </li>
              <li>as part of our efforts to keep the Site safe and secure; and</li>
              <li>
                to make suggestions and recommendations to you about services we offer that may
                interest you.
              </li>
            </ul>
            <h3>Personal Data we receive from other sources</h3>
            <ul>
              <li>To provide the analytics services.</li>
            </ul>
            <h3>Disclosure of your Personal Data</h3>
            <p>We may share your Personal Data with:</p>
            <ul>
              <li>
                Any member of our group, which means our subsidiaries, our ultimate holding company
                and its subsidiaries. This is necessary for our legitimate interests of running our
                company.
              </li>
              <li>
                Other users on the Site. Your Personal Data will only be shared with other users of
                the Site to the extent necessary for the Site to function or where you receive the
                analytics service (for example to allow some comparison against other Creator
                channels). This is necessary for us to provide the contracted services.
              </li>
              <li>
                We may forward your name, address and other contact information to any third party
                who, in our view, reasonably claims that you do not or may not have all necessary
                rights in and to the Content you upload, submit or share through the Site. This is
                necessary for our legitimate interests of ensuring that only content with
                appropriate permissions are available through the Site and to enforce our terms and
                conditions.
              </li>
              <li>
                We will not share your information with any third parties for the purposes of direct
                marketing.
              </li>
            </ul>
            <p>We will disclose your Personal Data to third parties:</p>
            <ul>
              <li>
                If we sell or buy any business or assets, in which case we will disclose your
                Personal Data to the prospective seller or buyer of such business or assets.
              </li>
              <li>
                If we or substantially all of our assets are acquired by a third party, in which
                case Personal Data held by us about Site users will be one of the transferred
                assets.
              </li>
              <li>
                If we are under a duty to disclose or share your Personal Data in order to comply
                with any legal obligation, or in order to enforce or apply our Terms of Use and
                other agreements; or to protect the rights, property, or safety of us, our users, or
                others.
              </li>
            </ul>
            <h3>Where we store your Personal Data</h3>
            <p>
              The data that we collect from you will be transferred to, and stored at, a destination
              within a destination outside of the UK or European Economic Area (&ldquo;
              <strong>EEA</strong>&rdquo;) including Russia. All Personal Data you provide to us is
              stored on our secure servers.
            </p>
            <p>
              Unfortunately, the transmission of Personal Data via the internet is not completely
              secure. While we do our best to protect your Personal Data, we cannot guarantee the
              security of your data transmitted to us over the email or through the &lsquo;Contact
              Us&rsquo; form on the Site; any transmission is at your own risk. Once we have
              received your data, we will use strict procedures and security features to try to
              prevent unauthorised access.
            </p>
            <p>
              Whenever we transfer your Personal Data (for example to suppliers who may be based
              somewhere else, we ensure a similar degree of protection is afforded to it by ensuring
              at least one of the following safeguards is implemented:
            </p>
            <ul>
              <li>
                We may use specific contracts approved by the European Commission which give
                Personal Data the same protection it has in Europe; or
              </li>
              <li>
                Where we use providers based in the US, we may transfer data to them if they are
                part of the Privacy Shield which requires them to provide similar protection to
                Personal Data shared between the Europe and the US; or
              </li>
              <li>
                Where countries have been deemed to provide an adequate level of protection for
                Personal Data by the European Commission, we may transfer your Personal Data to
                third parties based in those countries.
              </li>
            </ul>
            <p>
              If you would like further information on the specific mechanism used by us when
              transferring your Personal Data outside of the EEA, then please contact us using the
              details provided at the end of this Privacy Policy.
            </p>
            <h3>Your rights</h3>
            <p>
              Where you are located in the EEA, or where we are processing your Personal Data within
              the EEA, or in the context of our EEA business, you have a number of rights in
              relation to how we process your Personal Data. These include:
            </p>
            <ul>
              <li>the right access the Personal Data that we may hold about you;</li>
              <li>
                the right to rectify any inaccurate or incomplete Personal Data that we may hold
                about you;
              </li>
              <li>
                the right to have your Personal Data erased in certain circumstances, for example,
                where it is no longer necessary for us to process your Personal Data to fulfil our
                processing purposes; where you object to your data being processed on certain
                grounds (for example, for marketing purposes) or where your Personal Data is being
                unlawfully processed;
              </li>
              <li>
                the right to object to our processing of your Personal Data where we are relying on
                a legitimate interest and there is something about your particular situation which
                makes you want to object to processing on this ground as you feel it impacts your
                fundamental rights and freedoms;
              </li>
              <li>
                the right to restrict the processing of your Personal Data under limited
                circumstances; and
              </li>
              <li>
                the right to have some of your Personal Data ported to a new service provider if you
                no longer wish to use the Site or our services. This only applies to information you
                have given us.
              </li>
            </ul>
            <h3>How to exercise your data subject rights</h3>
            <p>
              You can exercise any of these rights any time by contacting us at{' '}
              <a href="mailto:support@kedoo.com">support@kedoo.com</a>.
            </p>
            <p>
              No fee usually required. You will not have to pay a fee to access your Personal Data
              (or to exercise any of the other rights). However, we may charge a reasonable fee if
              your request is clearly unfounded, repetitive or excessive. Alternatively, we may
              refuse to comply with your request in these circumstances.
            </p>
            <p>
              We may need to request specific information from you to help us confirm your identity
              and ensure your right to access your Personal Data (or to exercise any of your other
              rights). This is a security measure to ensure that Personal Data is not disclosed to
              any person who has no right to receive it. We may also contact you to ask you for
              further information in relation to your request to speed up our response.
            </p>
            <p>
              We try to respond to all legitimate requests within one month. Occasionally it may
              take us longer than a month if your request is particularly complex or you have made a
              number of requests. In this case, we will notify you and keep you updated.
            </p>
            <p>
              The Site may, from time to time, contain links to and from the websites of our partner
              networks, advertisers and affiliates. If you follow a link to any of these websites,
              please note that these websites have their own privacy policies and that we do not
              accept any responsibility or liability for these policies. Please check these policies
              before you submit any Personal Data to these Sites.
            </p>
            <h3>Retention</h3>
            <p>
              We will only retain your Personal Data for as long as necessary to fulfil the purposes
              we collected it for, including for the purposes of satisfying any legal, accounting,
              or reporting requirements.
            </p>
            <p>
              To determine the appropriate retention period for Personal Data, we consider the
              amount, nature, and sensitivity of the Personal Data, the potential risk of harm from
              unauthorised use or disclosure of your Personal Data, the purposes for which we
              process your Personal Data and whether we can achieve those purposes through other
              means, and the applicable legal requirements.
            </p>
            <p>
              For further information on retention periods, please contact us using the details
              provided at the end of this Policy.
            </p>
            <h3>Changes to Our Policy</h3>
            <p>
              Any changes we make to our Policy in the future will be posted on this page and, where
              you continue to hold an account with us, notified to you by email. Please check back
              frequently to see any updates or changes to our Policy.
            </p>
            <h3>Contact</h3>
            <p>
              Questions, comments and requests regarding this Policy should be addressed{' '}
              <a href="mailto:support@kedoo.com">support@kedoo.com</a>.
            </p>
            <p>
              Should you have cause to complain about how we handle your Personal Data, please
              contact us in the first instance. We will do our best to resolve your concern.
              Alternatively, you may prefer to submit a complaint directly to your local data
              protection supervisory authority.
            </p>
          </Container>
        </Section>
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default PrivacyContent;
