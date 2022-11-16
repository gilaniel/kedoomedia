import React from "react";
import Slider from "react-slick";
import classNames from "classnames";

import {
  Container,
  Jumbotron,
  Row,
  Col,
  Table,
  Button,
  Media,
} from "react-bootstrap";

import SEO from "../components/commons/Seo";
import ImageBackground from "../components/commons/ImageBackground";

import Footer from "../components/commons/Footer";
import Section from "../components/commons/Section";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { useIntl } from "react-intl";
import useScrollTo from "../hooks/useScrollTo";

import BenefitImg1 from "../images/media/1.png";
import BenefitImg2 from "../images/media/2.png";
import BenefitImg3 from "../images/media/3.png";
import BenefitImg4 from "../images/media/4.png";

import BenefitBg from "../images/media/benefit.svg";

import "../styles/media.scss";

// import { mapQueryByLocale } from '../utils';

const BenefitItem = ({ image, title, content }) => (
  <div className="text-center">
    <h3>{title}</h3>
    <p dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

const TableTop = ({ items, columnName }) => {
  const { formatMessage, formatNumber } = useIntl();
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>
            {formatMessage({
              id: `media.influence_section.table.${columnName}`,
            })}
          </th>
          <th>
            {formatMessage({ id: "media.influence_section.table.views" })}
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.title}</td>
            <td>{formatNumber(item.views)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const CaseItem = ({
  className = "",
  brand,
  campaign,
  channel,
  comments,
  description,
  image,
  likes,
  views,
  video_url,
}) => {
  const { formatMessage, formatNumber } = useIntl();
  return (
    <Media
      className={classNames("case-item align-items-stretch h-100", className)}
    >
      <div className="case-item__image">
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={channel}
          style={{ height: "100%" }}
        />
        <Button variant="caseitem" as="a" href={video_url} target="_blank">
          <span className="caret-right"></span>
          <span>
            {formatMessage({ id: "media.cases_section.case.see_trailer" })}
          </span>
        </Button>
      </div>

      <Media.Body>
        <div>
          <h5 className="mb-1">{channel}</h5>
          <h3
            className="mb-1 mb-md-2"
            dangerouslySetInnerHTML={{ __html: String(brand) }}
          ></h3>
          <p className="case-desc">{description}</p>
        </div>

        <div className="case-item__stats">
          <Row noGutters>
            <Col md className="pr-md-2">
              <h4>
                {formatNumber(views, {
                  notation: "compact",
                  compactDisplay: "short",
                })}
              </h4>
              <p>{formatMessage({ id: "media.cases_section.case.views" })}</p>
              {/* <a href="" className="text-dark">
                Details
              </a> */}
            </Col>
            <Col md className="pr-md-2">
              <h4>
                {formatNumber(likes, {
                  notation: "compact",
                  compactDisplay: "short",
                })}
              </h4>
              <p>{formatMessage({ id: "media.cases_section.case.likes" })}</p>
              {/* <a href="" className="text-dark">
                Details
              </a> */}
            </Col>
            <Col md className="pr-md-2">
              <h4>
                {formatNumber(comments, {
                  notation: "compact",
                  compactDisplay: "short",
                })}
              </h4>
              <p>
                {formatMessage({ id: "media.cases_section.case.comments" })}
              </p>
              {/* <a href="" className="text-dark">
                Details
              </a> */}
            </Col>
          </Row>
        </div>
      </Media.Body>
    </Media>
  );
};

const MediaTools = ({ onContact }) => {
  const { formatMessage } = useIntl();
  const sliderRef = React.useRef<any>(null);

  const items = [
    {
      id: "brand_lift",
      title: formatMessage({ id: "media.tools_section.brand_lift.title" }),
      content: formatMessage({ id: "media.tools_section.brand_lift.content" }),
    },
    {
      id: "campaign_radar",
      title: formatMessage({ id: "media.tools_section.campaign_radar.title" }),
      content: formatMessage({
        id: "media.tools_section.campaign_radar.content",
      }),
    },
    {
      id: "frequency_remarketing",
      title: formatMessage({
        id: "media.tools_section.frequency_remarketing.title",
      }),
      content: formatMessage({
        id: "media.tools_section.frequency_remarketing.content",
      }),
    },
  ];

  const [activeTab, setActiveTab] = React.useState(items[0].id);
  // const activeItem = items.find(({ id }) => id === activeTab);

  const handleSetActiveTab = (tab) => {
    const index = items.findIndex(({ id }) => id === tab);
    setActiveTab(tab);
    sliderRef.current.slickGoTo(index);
  };

  const handleSlideChange = (oldIndex, newIndex) => {
    const item = items[newIndex];
    setActiveTab(item.id);
  };

  return (
    <Row>
      <Col md={4}>
        <ul className="mediatools__nav">
          {items.map((item, i) => (
            <li
              key={item.id}
              className={classNames({ active: item.id === activeTab })}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSetActiveTab(item.id);
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </Col>
      <Col md={8}>
        <Slider
          ref={sliderRef}
          autoplay
          autoplaySpeed={5000}
          adaptiveHeight
          swipeToSlide
          slidesToShow={1}
          beforeChange={handleSlideChange}
        >
          {items.map((item, i) => (
            <MediaToolsItem
              key={i}
              title={item.title}
              content={item.content}
              onContact={onContact}
            />
          ))}
        </Slider>
      </Col>
    </Row>
  );
};

const MediaToolsItem = ({ title, content, onContact }) => {
  const { formatMessage } = useIntl();
  return (
    <Jumbotron className="px-2 px-md-3 h-100 d-flex flex-column">
      <h3>{title}</h3>
      <div className="mb-2" dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className="mt-auto">
        <Button
          variant="outline-media"
          size="lg"
          onClick={onContact}
          className="d-flex align-items-center"
        >
          <span className="text-nowrap">
            {formatMessage({ id: "commons.contact_us" })}
          </span>
          <span className="right-arrow" />
        </Button>
      </div>
    </Jumbotron>
  );
};

const CaseItems = ({ items }) => (
  <Slider
    className="py-2 mb-2"
    // autoplay
    // autoplaySpeed={8000}
    adaptiveHeight
    // slidesToShow={2}
    swipeToSlide
    variableWidth
    responsive={[
      {
        breakpoint: 576,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ]}
  >
    {items.map((item, i) => (
      <CaseItem
        key={i}
        className="mr-lg-2 mr-1"
        brand={item.brand}
        campaign={item.campaign}
        channel={item.channel}
        comments={item.comments}
        description={item.description}
        image={item.image}
        likes={item.likes}
        views={item.views}
        video_url={item.video_url}
      />
    ))}
  </Slider>
);

const PartnerItems = ({ items }) => {
  return (
    <>
      <Row className="align-items-center justify-content-between">
        {items.slice(0, 5).map((item, i) => (
          <Col xs="6" md={2} key={i} className="partners-item">
            <GatsbyImage
              image={item.image.childImageSharp.gatsbyImageData}
              alt="Kedoo Media"
            />
          </Col>
        ))}
      </Row>

      <Row className="align-items-center justify-content-between partners-items">
        {items.slice(5, 9).map((item, i) => (
          <Col xs="6" md={3} key={i} className="partners-item">
            <GatsbyImage
              image={item.image.childImageSharp.gatsbyImageData}
              alt="Kedoo Media"
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

const MediaContent = () => {
  const pageData = useStaticQuery(graphql`
    query {
      allMediaTablesJson {
        nodes {
          categories {
            title
            views
          }
          channels {
            title
            views
          }
          marketing {
            title
            views
          }
        }
      }
      allMediaCasesJson {
        nodes {
          brand
          campaign
          channel
          comments
          description
          image {
            childImageSharp {
              gatsbyImageData(formats: [JPG], placeholder: BLURRED)
            }
          }
          likes
          views
          video_url
        }
      }
      allMediaPartnersJson {
        nodes {
          image {
            childImageSharp {
              gatsbyImageData(formats: [PNG], placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const { formatMessage } = useIntl();
  const [footerRef, scrollToFooter] = useScrollTo(null);

  const caseItems = pageData.allMediaCasesJson.nodes;
  const partnerItems = pageData.allMediaPartnersJson.nodes;

  return (
    <>
      <SEO
        title={formatMessage({ id: "media.title" })}
        className="kedoo-media"
      />
      <ImageBackground>
        <Section className="w-100">
          <Container>
            <Row>
              <Col md={8} xl={7}>
                <div className="fullsize-section__content">
                  <div className="fullsize-section__logo media-inline-logo-white mb-2"></div>
                  <h2
                    className="text-white"
                    dangerouslySetInnerHTML={{
                      __html: formatMessage({ id: "media.main_section.title" }),
                    }}
                  />
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="d-flex align-items-center"
                    onClick={scrollToFooter}
                  >
                    <span className="text-nowrap">
                      {formatMessage({ id: "commons.contact_us" })}
                    </span>
                    <span className="right-arrow" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
      </ImageBackground>
      <main className="pb-3">
        <Section big className="mb-n1">
          <Container>
            <h2>Инфлюенсер маркетинг агентство полного цикла</h2>

            <div className="benefits-container">
              <Row className="justify-content-between">
                <Col md={12} lg={4} xl={4} className="benefit-item">
                  <BenefitItem
                    image={BenefitImg2}
                    title={formatMessage({
                      id: "media.benefits_section.creative.title",
                    })}
                    content={formatMessage({
                      id: "media.benefits_section.creative.content",
                    })}
                  />
                </Col>

                <Col md={12} lg={4} xl={4} className="benefit-item">
                  <BenefitItem
                    image={BenefitImg1}
                    title={formatMessage({
                      id: "media.benefits_section.sales.title",
                    })}
                    content={formatMessage({
                      id: "media.benefits_section.sales.content",
                    })}
                  />
                </Col>
              </Row>

              <Row className="justify-content-between">
                <Col md={12} lg={4} xl={4} className="benefit-item">
                  <BenefitItem
                    image={BenefitImg3}
                    title={formatMessage({
                      id: "media.benefits_section.data.title",
                    })}
                    content={formatMessage({
                      id: "media.benefits_section.data.content",
                    })}
                  />
                </Col>

                <Col md={12} lg={4} xl={4} className="benefit-item">
                  <BenefitItem
                    image={BenefitImg4}
                    title={formatMessage({
                      id: "media.benefits_section.tool.title",
                    })}
                    content={formatMessage({
                      id: "media.benefits_section.tool.content",
                    })}
                  />
                </Col>
              </Row>

              <img src={BenefitBg} alt="Kedoo media" className="benefit-img" />
            </div>
          </Container>
        </Section>

        <Section className="mediatools__section">
          <Container>
            <h2>{formatMessage({ id: "media.tools_section.title" })}</h2>
            <MediaTools onContact={scrollToFooter} />
          </Container>
        </Section>

        <Section>
          <Container>
            <h2>{formatMessage({ id: "media.cases_section.title" })}</h2>
            <div className="mb-md-2">
              <CaseItems items={caseItems} />
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <h2>Нас выбирают</h2>
            <div className="mb-md-2">
              <PartnerItems items={partnerItems} />
            </div>
          </Container>
        </Section>
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default MediaContent;
