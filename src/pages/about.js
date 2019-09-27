/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Flip from "react-reveal/Flip";
import Layout from "../components/layout";
import Footer from "../components/Footer";

const About = () => {
  const cardCss = css`
    background: rgba(255, 255, 255, 0.4);
    flex-direction: column;
    padding: 30px;
    max-width: 400px;

    div {
      margin-bottom: 10px;
    }

    strong {
      font-weight: 600;
    }
  `;
  
  return (
    <Layout>
      <Flip top duration={3000}>
        <div css={cardCss}>
          <div>
            Came to UCLA for college and then accidentally forgot to leave
            California. Frequent visitor of hiking trials, animal shelters, and
            javascript meetups.
          </div>
          <div>
            <strong>Podcasts: </strong>99% Invisible, Syntax, The Cut on Tuesdays
          </div>
          <div>
            <strong>Current Music: </strong>Olive Tree, Massive Attack, Vulfpeck
          </div>
          <Footer />
        </div>
      </Flip>
    </Layout>
  );
};

export default About;
