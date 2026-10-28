import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  type = 'website',
  schema
}) => {
  useEffect(() => {
    // Update document title
    const formattedTitle = title.includes('MAXDAX') ? title : `${title} | MAXDAX Smart Living`;
    document.title = formattedTitle;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', formattedTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      }
    }

    // Structured Data JSON-LD injection
    if (schema) {
      const scriptId = 'jsonld-schema';
      let existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.textContent = JSON.stringify(schema);
      } else {
        const newScript = document.createElement('script');
        newScript.id = scriptId;
        newScript.type = 'application/ld+json';
        newScript.textContent = JSON.stringify(schema);
        document.head.appendChild(newScript);
      }
    }
  }, [title, description, canonical, schema]);

  return null;
};
