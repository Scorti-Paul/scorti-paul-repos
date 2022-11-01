import React from 'react'
import Head from 'react-helmet'

const DOMAIN = 'https://scorti-paul-repos'
const MAIN_KEYWORDS = 'github, git, scorti-paul, repository, repositories, error boundary, routers, nested routers, pagination, UI/UX, user interface, user experience'
const DEFAULT_IMAGE_CARD = `${DOMAIN}/avatar.png`
const DEFAULT_TITLE = 'Scorti Paul Repos'
const DEFAULT_DESCRIPTION = 'This react app showcase scorti-paul repositories from github api'

const FAVICON_SOURCE = `${DOMAIN}/favicon.ico`

const POSTFIX_TITLE = `/${DOMAIN}`

const Helmet = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  link,
  keyword = '',
  imageCard = DEFAULT_IMAGE_CARD,
  largeTwitterCard,
  addPostfixTitle,
  noIndex,
  children
}) => {
  let metaTitle

  if (addPostfixTitle) {
    metaTitle = title + POSTFIX_TITLE
  } else {
    metaTitle = title
  }

  const metaDesc = description
  const metaLink = link

  const metaKeywords = keyword.length > 0 ? MAIN_KEYWORDS + ', ' + keyword : MAIN_KEYWORDS;

  let metaImageCard

  if (imageCard.startsWith('https') || imageCard.startsWith('http')) {
    metaImageCard = imageCard
  } else {
    metaImageCard = DOMAIN + imageCard
  }

  const metaRobots = noIndex ? 'noindex, nofollow' : 'index,follow'

  const twitterCardType = largeTwitterCard ? 'summary_large_image' : 'summary'






  return (
    <Head>
      <html lang='en' />
      <title>{metaTitle}</title>
      <meta name='description' content={metaDesc} />
      <link rel='canonical' href={metaLink} />
      <meta name='keywords' content={metaKeywords} />
      <meta name='robots' content={metaRobots} />
      <meta name='icon' content={FAVICON_SOURCE} />

      <meta property='og:url' title={metaLink} />
      <meta property='og:title' title={metaTitle} />
      <meta property='og:descrition' title={metaDesc} />
      <meta property='og:type' title='website' />
      <meta property='og:image' title={metaImageCard} />

      <meta property='twitter:site' title='@PaulScorti' />
      <meta property='twitter:creator' title='Paul Scorti' />
      <meta property='twitter:title' title={metaTitle} />
      <meta property='twitter:card' title={twitterCardType} />
      <meta property='twitter:image' title={metaImageCard} />
      <meta property='twitter:description' title={metaDesc} />

      <meta name='referrer' content='origin-when-crossorigin' />
    </Head>
  )
}

export default Helmet