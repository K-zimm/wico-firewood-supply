import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/layout';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

import ProductCard from '../components/productCard';
import SpecialCard from '../components/specialsCard';
import ContactForm from '../components/contactForm';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <div style={{ display: 'grid' }}>
          <GatsbyImage
            style={{
              gridArea: '1/1',
              maxHeight: '80vh',
            }}
            layout='fullWidth'
            alt={data.datoCmsHomePage.backgroundImage.alt}
            image={data.datoCmsHomePage.backgroundImage.gatsbyImageData}
            formats={['auto', 'webp', 'avif']}
          />
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: '1/1',
              position: 'relative',
              // This centers the other elements inside the hero component
              placeItems: 'center',
              display: 'grid',
            }}
            className='bg-gradient-to-b from-green-transparent to-green'
          >
            {/* Any content here will be centered in the component */}
            <div className='flex flex-col items-center px-8 py-12 pt-36'>
              <h1 className='text-5xl sm:text-7xl font-serif max-w-5xl text-center text-white mb-4'>
                {data.datoCmsHomePage.title}
              </h1>
              <a
                href={data.datoCmsHomePage.buttonLink}
                className='px-4 py-2 bg-red text-white inline-block text-xl uppercase tracking-widest rounded-lg'
              >
                {data.datoCmsHomePage.buttonText}
              </a>
            </div>
          </div>
        </div>
        <div className='flex items-stretch' id='about'>
          <div
            className='bg-right bg-cover lg:w-2/5'
            style={{
              backgroundImage:
                'url(' + data.datoCmsHomePage.introImage.url + ')',
            }}
          >
            {/* <GatsbyImage
              image={data.datoCmsHomePage.introImage.gatsbyImageData}
              layout='fullwidth'
              alt='Logs cut with a chainsaw'
              className='block'
            ></GatsbyImage> */}
          </div>
          <div className='order-1 w-full lg:w-3/5 px-10 lg:px-20 py-10 flex flex-col justify-center'>
            <h2 className='font-serif text-5xl text-green mb-10 leading-tight'>
              {data.datoCmsHomePage.introTitle}
            </h2>
            <div>
              <StaticImage
                src='../images/decorative-squares.png'
                width={137}
                height={25}
                placeholder='traced_svg'
                className='z-10 ml-6'
                alt=''
              />
              <div className='-mt-3 px-6 py-12 bg-gray text-lg leading-normal'>
                {data.datoCmsHomePage.intro}
              </div>
            </div>
          </div>
        </div>
        <div
          className='flex flex-wrap items-stretch bg-green z-40'
          id='products'
        >
          <div className='w-full xl:w-3/5 px-10 lg:px-20 py-10 flex flex-col justify-center'>
            <h2 className='font-serif text-5xl text-orange mb-10 tracking-wide uppercase'>
              Products
            </h2>
            <div className='text-lg leading-normal mb-10 text-white tracking-wide'>
              {data.datoCmsHomePage.productParagraph}
            </div>
            <div className='grid grid-cols-8 items-stretch gap-4'>
              <div className='col-span-8 row-span-2 mb-4 2xl:mb-0 2xl:col-span-2 border border-gray p-4'>
                <h3 className='text-3xl text-yellow font-serif tracking-wide uppercase mb-4'>
                  Current Species
                </h3>
                <div
                  className='list-disc list-inside tracking-wide text-gray-light list'
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsHomePage.availableSpeciesNode
                        .childMarkdownRemark.html,
                  }}
                />
              </div>
              <ProductCard
                title='1/6 Cord'
                price={data.datoCmsHomePage.sixthCordPrice}
                stacking={data.datoCmsHomePage.sixthCordStacking}
              />
              <ProductCard
                title='1/4 Cord'
                price={data.datoCmsHomePage.fourthCordPrice}
                stacking={data.datoCmsHomePage.fourthCordStacking}
              />
              <ProductCard
                title='1/3 Cord'
                price={data.datoCmsHomePage.thirdCordPrice}
                stacking={data.datoCmsHomePage.thirdCordStacking}
                class='mb-4 lg:mb-0'
              />
              <ProductCard
                title='1/2 Cord'
                price={data.datoCmsHomePage.halfCordPrice}
                stacking={data.datoCmsHomePage.halfCordStacking}
                class='mb-4 lg:mb-0'
              />
            </div>
          </div>
          <div className='hidden xl:block xl:w-2/5'>
            <GatsbyImage
              image={data.datoCmsHomePage.productImage.gatsbyImageData}
              alt={data.datoCmsHomePage.productImage.alt}
              layout='fullwidth'
              className='block h-full'
            ></GatsbyImage>
          </div>
        </div>
        <div
          className='flex flex-wrap flex-col py-6 px-10 md:px-0 md:py-0 md:flex-row items-center'
          id='specials'
        >
          <div className='sideTitle flex items-center'>
            <StaticImage
              src='../images/wood-grain-bar.jpg'
              width={70}
              height={400}
              placeholder='traced_svg'
              alt=''
              className='hidden md:block'
            />
            <div className='text text-5xl text-green font-serif'>
              <h1 className='mb-6'>Specials</h1>
              <StaticImage
                src='../images/decorative-squares.png'
                width={137}
                height={25}
                placeholder='traced_svg'
                className='z-10 -mb-5 ml-6'
                alt=''
              />
            </div>
          </div>
          {data.datoCmsHomePage.specials.map((special) => {
            console.log(special);
            return (
              <SpecialCard
                title={special.title}
                description={special.paragraphNode.childMarkdownRemark.html}
                image={special.image.gatsbyImageData}
                alt={special.image.alt}
                key={special.id}
              />
            );
          })}
        </div>
        <div id='contact'>
          <ContactForm
            background={data.datoCmsHomePage.contactBackground.url}
          />
        </div>
        <div id='partners' className=' py-6 px-10'>
          <h2 className='text-center font-serif text-5xl text-green mb-4 leading-tight'>
            Partners
          </h2>
          <div className='flex justify-center flex-wrap'>
            {data.datoCmsHomePage.partnerLogos.map((logo) => {
              return (
                <GatsbyImage
                  image={logo.gatsbyImageData}
                  alt={logo.alt}
                  key={logo.index}
                  className='w-48 m-4'
                />
              );
            })}
          </div>
        </div>
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
        alt
      }
      buttonLink
      buttonText
      introImage {
        url
        alt
      }
      introTitle
      intro
      productParagraph
      availableSpeciesNode {
        childMarkdownRemark {
          html
        }
      }
      productImage {
        gatsbyImageData
        alt
      }
      sixthCordPrice
      sixthCordStacking
      fourthCordPrice
      fourthCordStacking
      thirdCordPrice
      thirdCordStacking
      halfCordPrice
      halfCordStacking
      specials {
        id
        image {
          gatsbyImageData
          alt
        }
        title
        paragraphNode {
          childMarkdownRemark {
            html
          }
        }
      }
      partnerLogos {
        gatsbyImageData
        alt
      }
      contactBackground {
        url
      }
    }
  }
`;

export default IndexPage;
