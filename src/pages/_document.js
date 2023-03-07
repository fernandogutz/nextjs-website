import PersonalHead from '@/components/ui/PersonalHead'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <PersonalHead></PersonalHead>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
