import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Delivering full-cycle mobile solutions for startups and tech companies from ideation to finished products. Elevate your tech journey with our comprehensive, innovative, and business-centric mobile development services" />
        <meta name="keywords" content="Full-Cycle Mobile Solutions, Startups, Tech Companies, Mobile Development, Ideation, Finished Products, Testing, Design" />

        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/img/favicon/favicon48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}