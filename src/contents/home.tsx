import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

import SEO from '../components/commons/Seo';
import VideoBackground from '../components/commons/VideoBackground';
import Logotypes from '../components/commons/Logotypes';
import HomePartners from '../components/HomePartners';

import HomeContentItem from '../components/HomeContentItem';
import StatsItem from '../components/StatsItem';
import Footer from '../components/commons/Footer';
import Section from '../components/commons/Section';

import useScrollTo from '../hooks/useScrollTo';

import img1 from '../images/home/img1.jpg';
import img2 from '../images/home/img2.jpg';
import img3 from '../images/home/img3.jpg';
import img4 from '../images/home/img4.jpg';

import VideoBgMp4 from '../videos/home/video-bg.mp4';
import VideoBgThumb from '../videos/home/video-bg-thumb.jpg';

import '../styles/home.scss';

const PLATFORMS = ['netflix', 'roku', 'youtube', 'samsungtvplus', 'primevideo', 'apple', 'yandex'];

const HomeContent = () => {
  const pageData = useStaticQuery(graphql`
    query {
      allPlatformsJson {
        nodes {
          id
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      allPartnersJson {
        nodes {
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const { formatMessage } = useIntl();
  const [footerRef, scrollToFooter] = useScrollTo(null);

  const platformLogotypes = PLATFORMS.map((id) =>
    pageData.allPlatformsJson.nodes.find((p) => p.id === id)
  );
  const partnersLogotypes = pageData.allPartnersJson.nodes;

  return (
    <>
      <SEO title={formatMessage({ id: 'home.title' })} className="kedoo-home" />
      <VideoBackground src={VideoBgMp4} posterSrc={VideoBgThumb}>
        <Section className="w-100">
          <Container>
            <Row>
              <Col md={8} xl={7}>
                <div className="fullsize-section__content">
                  <h2
                    className="text-white"
                    dangerouslySetInnerHTML={{
                      __html: formatMessage({ id: 'home.main_section.title' })
                    }}
                  />
                  <Button
                    size="lg"
                    variant="outline-light"
                    onClick={scrollToFooter}
                    className="d-flex align-items-center"
                  >
                    <span className="text-nowrap">
                      {formatMessage({ id: 'commons.contact_us' })}
                    </span>
                    <span className="right-arrow" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </VideoBackground>
      <main className="pb-3">
        <Section big>
          <Container>
            <h2>{formatMessage({ id: 'home.stats_section.title' })}</h2>
            <Row>
              <StatsItem
                color="text-warning"
                value={350000000}
                content={formatMessage({ id: 'home.stats_section.engagement' })}
              />
              <StatsItem
                color="text-success"
                value={3000000000}
                content={formatMessage({ id: 'home.stats_section.views' })}
              />
              <StatsItem
                color="text-danger"
                value={200000000}
                content={formatMessage({ id: 'home.stats_section.analysis' })}
              />
              <StatsItem
                color="text-info"
                value={100}
                sign="%"
                content={formatMessage({ id: 'home.stats_section.relationship' })}
              />
            </Row>
          </Container>
        </Section>

        <Jumbotron className="px-0">
          <Section>
            <Container>
              <h2>{formatMessage({ id: 'home.platforms_section.title' })}</h2>
              <Logotypes isChecker items={platformLogotypes} />
            </Container>
          </Section>
        </Jumbotron>

        <Section>
          <Container>
            <h2>{formatMessage({ id: 'home.solutions_section.title' })}</h2>
            <HomeContentItem image={img1}>
              <h3>{formatMessage({ id: 'home.solutions_section.solutions.title' })}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: 'home.solutions_section.solutions.content' })
                }}
              />
            </HomeContentItem>

            <HomeContentItem orderContentFirst image={img2}>
              <h3>{formatMessage({ id: 'home.solutions_section.tools.title' })}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: 'home.solutions_section.tools.content' })
                }}
              />
            </HomeContentItem>

            <HomeContentItem image={img3}>
              <h3>{formatMessage({ id: 'home.solutions_section.technology.title' })}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: 'home.solutions_section.technology.content' })
                }}
              />
            </HomeContentItem>

            <HomeContentItem orderContentFirst image={img4}>
              <h3>{formatMessage({ id: 'home.solutions_section.advertising.title' })}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: 'home.solutions_section.advertising.content' })
                }}
              />
            </HomeContentItem>
          </Container>
        </Section>

        <Section>
          <Container>
            <h2>{formatMessage({ id: 'home.partners_section.title' })}</h2>
            <HomePartners items={partnersLogotypes} />
          </Container>
        </Section>
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default HomeContent;
