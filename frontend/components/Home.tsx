import * as React from "react";
import Head from "next/head";
import Corona from "./Corona";
import OnView from "./OnView";

class Home extends React.Component {
  render() {
    return (
      <>
        <Head>
          <script type='application/ld+json'>
            {`{
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "nickkochornswasdigallery.com",
            "logo": "nickkochornswasdi.com/nkg_logo_circle.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1206 Maple Ave. Ste. 534",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90015",
              "addressCountry": "US"
            },
            "telephone": "+12134373951"
          }`}
          </script>
        </Head>
        <Corona />;
      </>
    );
  }
}

export default Home;
