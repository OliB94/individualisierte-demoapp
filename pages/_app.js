import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import profile from "../public/Images/Logo_Next_js.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/new">Add Pet</Link>
        </div>

        <img
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="pet care logo"
        ></img>

        <div className="logo">
        <Image
        src={profile}
        alt="Picture of the author"
        width={300}
        height={300}
        />
        </div>
    </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>

    </>
  )
}

export default MyApp
