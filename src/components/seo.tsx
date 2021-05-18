import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

type ImageType = {
  src: string
  height: number
  width: number
}

type SeoProps = {
  description?: string
  lang?: string
  image?: ImageType
  title: string
}

const SEO = ({ description, lang = "en", image, title }: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )

  // if no props specified we use default data
  // that we specified in gatsby config and queried above

  const metaTitle = title ? title : site.siteMetadata.title

  const metaDescription = description
    ? description
    : site.siteMetadata.description

  // specifying height and width is needed for fb sharing card
  // otherwise on first share no image will be shown,
  //  and it complains about height and width not specified
  let metaImage: ImageType = image
    ? image
    : { src: site.siteMetadata.image, width: 1200, height: 670 }

  // concatinating site url to the image
  // twitter card was not showing image without it
  metaImage.src = `${site.siteMetadata.url}${metaImage.src}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: metaImage.src,
        },
        {
          property: "og:image:width",
          content: metaImage.width,
        },
        {
          property: "og:image:height",
          content: metaImage.height,
        },
      ]}
    />
  );
}

export default SEO;