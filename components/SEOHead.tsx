import React, { useEffect } from 'react';
import { SEOMeta } from '../types';

interface SEOHeadProps extends SEOMeta {
  canonicalUrl?: string;
  ogImage?: string;
}

const BASE_URL = 'https://www.readdandadanmanga.online';
const DEFAULT_OG_IMAGE = `${BASE_URL}/logo.png`;

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
    el.setAttribute(attrName, attrVal.replace(/"/g, ''));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, schema, canonicalUrl, ogImage }) => {
  useEffect(() => {
    const fullTitle = `${title} | Dandadan Manga`;
    const image = ogImage || DEFAULT_OG_IMAGE;
    const canonical = canonicalUrl || BASE_URL;

    document.title = fullTitle;

    setMeta('meta[name="description"]', 'content', description);

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', image);

    // Twitter
    setMeta('meta[property="twitter:title"]', 'content', fullTitle);
    setMeta('meta[property="twitter:description"]', 'content', description);
    setMeta('meta[property="twitter:url"]', 'content', canonical);
    setMeta('meta[property="twitter:image"]', 'content', image);

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // Schema.org JSON-LD — supports single object or array of graphs
    if (schema) {
      let scriptSchema = document.querySelector('#structured-data');
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'structured-data';
        scriptSchema.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptSchema);
      }
      const payload = Array.isArray(schema)
        ? { "@context": "https://schema.org", "@graph": schema.map(s => ({ ...(s as object) })) }
        : schema;
      scriptSchema.textContent = JSON.stringify(payload);
    }

  }, [title, description, schema, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;