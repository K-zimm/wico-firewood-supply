import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layouts/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <title>Wisco Firewood Supply</title>
        <h1>{data.datoCmsHomePage.title}</h1>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    datoCmsHomePage {
      announcement
      title
      backgroundImage {
        gatsbyImageData
      }
      buttonLink
      buttonText
      introTitle
      intro
      productParagraph
      availableSpecies {
        blocks
        value
      }
      specials {
        image {
          gatsbyImageData
        }
        title
        paragraph
      }
    }
  }
`;

export default IndexPage;
