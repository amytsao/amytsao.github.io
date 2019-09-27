/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Flip from 'react-reveal/Flip';
import Helmet from "react-helmet";
import Layout from "../components/layout";

const HomeIndex = props => {
  const cardCss = css`
    background: rgba(255, 255, 255, 0.4);
    display: inline-block;
    font-size: 20px;
    line-height: 1.4;
    padding: 30px 20px;
  `;

  const headingCss = css`
    align-self: center;
    margin-right: 10px;
    max-width: 130px;
    text-align: right;
    padding: 30px 10px;
    font-size: 50px;
    text-transform: uppercase;

    @media (max-width: 450px) {
      text-align: left;
      font-size: 30px;
      max-width: 100%;
    }
  `;
  return (
    <Layout>
      <Helmet>
        <title>Amy Tsao</title>
        <meta name="description" content="Web Developer" />
      </Helmet>
      <Flip top>
        <h1 css={headingCss}>Amy Tsao</h1>
      </Flip>
      <Flip top duration={3000}>
        <div css={cardCss}>
          <div>web developer</div>
          <div>foodie</div>
          <div>mobile game addict</div>
          <div>aspiring pun master</div>
        </div>
      </Flip>
    </Layout>
  );
};

export default HomeIndex;
