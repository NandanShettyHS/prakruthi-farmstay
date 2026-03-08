import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="EpuiP7PVa-uhprtmeeE1OwOZjCIaJXf0iKqVam2y_SE"
        />

        {/* Website Favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* Apple devices icon */}
        <link rel="apple-touch-icon" href="/favicon.png" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}