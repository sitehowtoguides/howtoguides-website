/**
 * Schema Template Generator
 * 
 * This utility provides template functions for generating structured data schemas
 * for how-to guides. It makes it easy to create consistent schemas across all guides.
 */

// Base URL for the site - fallback if environment variable is not set
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.how-toguides.com';

/**
 * Create a HowTo schema for any guide
 * @param {Object} params - Parameters for the HowTo schema
 * @returns {Object} - Complete HowTo schema object
 */
export function createHowToSchema({
  title,
  description,
  datePublished,
  dateModified,
  mainImage,
  steps,
  tools = [],
  supplies = [],
  totalTime = "20", // in minutes
  cost = "0"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "image": {
      "@type": "ImageObject",
      "url": `${SITE_URL}${mainImage}`,
      "width": "1200",
      "height": "800"
    },
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": cost
    },
    "totalTime": `PT${totalTime}M`,
    "tool": tools.map(tool => ({
      "@type": "HowToTool",
      "name": tool
    })),
    "supply": supplies.map(supply => ({
      "@type": "HowToSupply",
      "name": supply
    })),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "url": `${SITE_URL}/guides/${step.slug}#step-${index + 1}`,
      "name": step.name,
      "itemListElement": {
        "@type": "HowToDirection",
        "text": step.text
      },
      "image": step.image ? {
        "@type": "ImageObject",
        "url": `${SITE_URL}${step.image}`,
        "width": "800",
        "height": "600"
      } : undefined
    })).filter(step => step.name && step.itemListElement.text)
  };
}

/**
 * Create an FAQ schema for any guide
 * @param {Object} params - Parameters for the FAQ schema
 * @returns {Object} - Complete FAQ schema object
 */
export function createFAQSchema({
  questions
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
}

/**
 * Create an Article schema for any guide
 * @param {Object} params - Parameters for the Article schema
 * @returns {Object} - Complete Article schema object
 */
export function createArticleSchema({
  title,
  description,
  authorName,
  publisherName,
  publisherLogo,
  datePublished,
  dateModified,
  mainImage,
  slug,
  category = "Technology"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName || "How-To Guides",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}${publisherLogo || "/images/logo.png"}`,
        "width": "600",
        "height": "60"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "image": {
      "@type": "ImageObject",
      "url": `${SITE_URL}${mainImage}`,
      "width": "1200",
      "height": "800"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/guides/${slug}`
    },
    "articleSection": category
  };
}

/**
 * Create a complete set of schemas for a guide
 * @param {Object} params - All parameters for the guide schemas
 * @returns {Object} - Object containing all three schema types
 */
export function createGuideSchemas({
  // Basic guide information
  title,
  description,
  slug,
  mainImage,
  datePublished,
  dateModified,
  
  // Author and publisher information
  authorName = "How-To Guides Team",
  publisherName = "How-To Guides",
  publisherLogo = "/images/logo.png",
  
  // HowTo specific information
  steps,
  tools,
  supplies,
  totalTime,
  cost,
  
  // FAQ specific information
  questions,
  
  // Article specific information
  category
}) {
  // Create the HowTo schema
  const howToSchema = createHowToSchema({
    title,
    description,
    datePublished,
    dateModified,
    mainImage,
    steps,
    tools,
    supplies,
    totalTime,
    cost
  });
  
  // Create the FAQ schema
  const faqSchema = createFAQSchema({
    questions
  });
  
  // Create the Article schema
  const articleSchema = createArticleSchema({
    title,
    description,
    authorName,
    publisherName,
    publisherLogo,
    datePublished,
    dateModified,
    mainImage,
    slug,
    category
  });
  
  return {
    howToSchema,
    faqSchema,
    articleSchema
  };
}
