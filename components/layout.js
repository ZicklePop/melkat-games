import PropTypes from 'prop-types'
import Head from 'next/head'

const cx = {
  main: 'max-w-lg mx-3 font-mono text-black dark:text-white',
  header: 'inline-block text-3xl font-light w-full my-8 text-black dark:text-white',
  headerLink: 'no-underline',
  headerSpan: 'm-3 sm:m-4',
  logo: 'pixelated h-16 sm:h-32 inline',
  footer: 'leading-normal mt-8 mb-3 mx-2'
}

const Layout = ({ title, description, children, className, cover }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
        <meta name='twitter:image' content={cover} />
        <meta name='twitter:image:alt' content={description} />
        <meta property='og:image' content={cover} />
      </Head>
      <style global jsx>
        {`
          body {
            background: #000;
          }
          a {
            color: #0096DB;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .cv-auto {
            content-visibility: auto;
          }
          .pixelated {
            image-rendering: pixelated;
          }
          @media (prefers-color-scheme: light) {
            body {
              background: #fff;
            }
          }
        `}
      </style>
      <a href="https://melkat.games" className={cx.headerLink}>
        <h1 className={cx.header}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./logo.gif" className={cx.logo} alt="pixelated 3d model of melanie spinning around in circles and getting dizzy" />
          <span className={cx.headerSpan}>{'melkat.games'}</span>
        </h1>
      </a>
      {children}
      <footer className={cx.footer}>
        <p>
          {'an attempt at game dev by'}
          <br />
          <a href="https://melaniekat.com/">melanie kat</a>
          {' <3'}
        </p>
      </footer>
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cover: PropTypes.string
}

Layout.defaultProps = {
  title: 'melkat.games',
  description: '',
  className: '',
  cover: '/cover.png'
}

export default Layout

