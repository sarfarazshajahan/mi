import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Sarfaraz Shajahan - Data Analytics Professional | Portfolio",
  description = "Professional portfolio of Sarfaraz Shajahan, a data analytics expert with 17+ years experience in business intelligence, SAP, Power BI, and enterprise systems. Currently serving as Senior Purchase Admin Coordinator.",
  keywords = "Data Analytics, Business Intelligence, Power BI, SAP, Oracle EBS, Data Analysis, Business Analyst, Purchase Admin, Supply Chain, Saudi Arabia",
  image = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
  url = "https://yourusername.github.io/portfolio/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Sarfaraz Shajahan" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2563eb" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sarfaraz Shajahan",
          "jobTitle": "Senior Purchase Admin Coordinator & Data Analytics Professional",
          "url": url,
          "image": image,
          "sameAs": [
            "https://www.linkedin.com/in/sarfaraz-shajahan-506620359/"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "PCD Saudi Arabia Co"
          },
          "alumniOf": {
            "@type": "Organization", 
            "name": "Chalhoub Group"
          },
          "knowsAbout": [
            "Data Analytics",
            "Business Intelligence", 
            "Microsoft Power BI",
            "SAP",
            "Oracle E-Business Suite",
            "Process Optimization",
            "Stakeholder Engagement"
          ],
          "description": description
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;