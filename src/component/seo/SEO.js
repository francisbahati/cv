import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Francis Bahati | Full Stack Developer & Cybersecurity Expert - Building Secure & Scalable Web Applications",
  description = "Full Stack Developer specializing in JHipster, React, Spring Boot, and Python. Cybersecurity expert with experience in building secure, scalable web applications and providing comprehensive IT solutions.",
  keywords = "full stack developer Tanzania, JHipster, React, Spring Boot, Python, cybersecurity, web development, REST APIs, microservices, IT support, Arusha developer",
  canonicalUrl = "https://francisbahati.com",
  structuredData, // Optional JSON-LD
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Francis Bahati" />
      <meta name="geo.region" content="TZ" />
      <meta name="geo.placename" content="Arusha, Tanzania" />
      <meta name="robots" content="index, follow" />

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;