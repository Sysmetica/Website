import Head from 'next/head'

const CustomHead = () => {
  // const isAmp = useAmp()
  // if (isAmp) return null

  return (
    <Head>
      <title>HomeTitle</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <meta name="description" content='HomeSubtitle' />
      {/* og */}
      {/* <meta property="og:site_name" content={HomeTitle} />
      <meta property="og:title" content={HomeTitle} />
      <meta property="og:description" content={HomeSubtitle} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={HomeImage.data.attributes.url} />
      <meta property="og:url" content="http://kryvenko.in.ua/" /> */}
      {/* other */}
      {/* <link rel="canonical" href="http://kryvenko.in.ua/" /> */}
      {/* analytics */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-EHN7GB7JDC" /> */}
      {/* <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EHN7GB7JDC');
        `,
        }}
      /> */}
    </Head>
  )
}

export default CustomHead