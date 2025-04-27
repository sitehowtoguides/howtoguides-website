/**
 * Schema Utilities
 * 
 * Utility functions for creating structured data schemas.
 * These functions make it easy to create consistent schemas across all guides.
 */

// Base URL for the site - fallback if environment variable is not set
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.how-toguides.com';

/**
 * Create a HowTo schema for a guide
 * @param {Object} params - Parameters for the HowTo schema
 * @returns {Object} - Complete HowTo schema object
 */
export function createHowToSchema({
  title,
  description,
  mainImage,
  steps,
  tools = [],
  supplies = [],
  totalTime = "20", // in minutes
  cost = "0"
})  {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": `${SITE_URL}${mainImage}`,
      "width": "1200",
      "height": "800"
    },
    "totalTime": `PT${totalTime}M`,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": cost
    },
    "tool": tools.map(tool => ({
      "@type": "HowToTool",
      "name": tool
    }) ),
    "supply": supplies.map(supply => ({
      "@type": "HowToSupply",
      "name": supply
    })),
    "step": steps.map(step => ({
      "@type": "HowToStep",
      "name": step.name,
      "itemListElement": step.instructions.map(instruction => ({
        "@type": "HowToDirection",
        "text": instruction
      })),
      "image": {
        "@type": "ImageObject",
        "url": `${SITE_URL}${step.image}`,
        "width": "800",
        "height": "600"
      },
      "url": `${SITE_URL}${step.url}`
    }))
  };
}

/**
 * Create an FAQ schema for a guide
 * @param {Object} params - Parameters for the FAQ schema
 * @returns {Object} - Complete FAQ schema object
 */
export function createFAQSchema({
  questions
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(question => ({
      "@type": "Question",
      "name": question.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.answer
      }
    }) )
  };
}

/**
 * Create an Article schema for a guide
 * @param {Object} params - Parameters for the Article schema
 * @returns {Object} - Complete Article schema object
 */
export function createArticleSchema({
  title,
  description,
  mainImage,
  authorName,
  publishDate,
  modifyDate,
  category = "Technology"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${SITE_URL}${mainImage}`,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "How-ToGuides.com",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/logo/logo-main.svg`,
        "width": "600",
        "height": "60"
      }
    },
    "datePublished": publishDate,
    "dateModified": modifyDate || publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/guides/${title.toLowerCase() .replace(/\s+/g, '-')}`
    },
    "articleSection": category
  };
}
