/**
 * Schema Validation Utilities
 * 
 * This file contains utility functions for validating JSON-LD schema data
 * before it's added to pages. These functions help ensure that all required
 * properties are present and properly formatted.
 */

/**
 * Validates a HowTo schema object against Schema.org requirements
 * @param {Object} schema - The HowTo schema object to validate
 * @returns {Object} - Validation result with isValid flag and any errors
 */
export function validateHowToSchema(schema) {
  const errors = [];
  
  // Check required properties
  if (!schema['@type'] || schema['@type'] !== 'HowTo') {
    errors.push('Missing or incorrect @type property. Must be "HowTo".');
  }
  
  if (!schema.name || typeof schema.name !== 'string' || schema.name.trim() === '') {
    errors.push('Missing or invalid name property.');
  }
  
  if (!schema.description || typeof schema.description !== 'string' || schema.description.trim() === '') {
    errors.push('Missing or invalid description property.');
  }
  
  // Check steps
  if (!schema.step || !Array.isArray(schema.step) || schema.step.length === 0) {
    errors.push('Missing or invalid step property. Must be a non-empty array.');
  } else {
    // Validate each step
    schema.step.forEach((step, index) => {
      if (!step['@type'] || step['@type'] !== 'HowToStep') {
        errors.push(`Step ${index + 1}: Missing or incorrect @type property. Must be "HowToStep".`);
      }
      
      if (!step.name || typeof step.name !== 'string' || step.name.trim() === '') {
        errors.push(`Step ${index + 1}: Missing or invalid name property.`);
      }
      
      if (!step.text || typeof step.text !== 'string' || step.text.trim() === '') {
        errors.push(`Step ${index + 1}: Missing or invalid text property.`);
      }
      
      if (step.url && typeof step.url !== 'string') {
        errors.push(`Step ${index + 1}: Invalid url property.`);
      }
      
      if (step.image && typeof step.image !== 'string') {
        errors.push(`Step ${index + 1}: Invalid image property.`);
      }
    });
  }
  
  // Check optional but common properties
  if (schema.totalTime && typeof schema.totalTime !== 'string') {
    errors.push('Invalid totalTime property. Must be a string in ISO 8601 duration format.');
  }
  
  if (schema.tool && !Array.isArray(schema.tool)) {
    errors.push('Invalid tool property. Must be an array.');
  }
  
  if (schema.supply && !Array.isArray(schema.supply)) {
    errors.push('Invalid supply property. Must be an array.');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validates a FAQPage schema object against Schema.org requirements
 * @param {Object} schema - The FAQPage schema object to validate
 * @returns {Object} - Validation result with isValid flag and any errors
 */
export function validateFAQSchema(schema) {
  const errors = [];
  
  // Check required properties
  if (!schema['@type'] || schema['@type'] !== 'FAQPage') {
    errors.push('Missing or incorrect @type property. Must be "FAQPage".');
  }
  
  // Check mainEntity
  if (!schema.mainEntity || !Array.isArray(schema.mainEntity) || schema.mainEntity.length === 0) {
    errors.push('Missing or invalid mainEntity property. Must be a non-empty array.');
  } else {
    // Validate each question
    schema.mainEntity.forEach((item, index) => {
      if (!item['@type'] || item['@type'] !== 'Question') {
        errors.push(`Question ${index + 1}: Missing or incorrect @type property. Must be "Question".`);
      }
      
      if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
        errors.push(`Question ${index + 1}: Missing or invalid name property.`);
      }
      
      if (!item.acceptedAnswer) {
        errors.push(`Question ${index + 1}: Missing acceptedAnswer property.`);
      } else if (!item.acceptedAnswer['@type'] || item.acceptedAnswer['@type'] !== 'Answer') {
        errors.push(`Question ${index + 1}: Missing or incorrect @type property in acceptedAnswer. Must be "Answer".`);
      } else if (!item.acceptedAnswer.text || typeof item.acceptedAnswer.text !== 'string' || item.acceptedAnswer.text.trim() === '') {
        errors.push(`Question ${index + 1}: Missing or invalid text property in acceptedAnswer.`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validates an Article schema object against Schema.org requirements
 * @param {Object} schema - The Article schema object to validate
 * @returns {Object} - Validation result with isValid flag and any errors
 */
export function validateArticleSchema(schema) {
  const errors = [];
  
  // Check required properties
  if (!schema['@type'] || !['Article', 'BlogPosting', 'NewsArticle', 'TechArticle'].includes(schema['@type'])) {
    errors.push('Missing or incorrect @type property. Must be one of: "Article", "BlogPosting", "NewsArticle", "TechArticle".');
  }
  
  if (!schema.headline || typeof schema.headline !== 'string' || schema.headline.trim() === '') {
    errors.push('Missing or invalid headline property.');
  }
  
  if (schema.headline && schema.headline.length > 110) {
    errors.push('Headline property exceeds 110 characters. Google recommends keeping it under this limit.');
  }
  
  if (!schema.datePublished || typeof schema.datePublished !== 'string') {
    errors.push('Missing or invalid datePublished property. Must be a string in ISO 8601 format.');
  }
  
  if (!schema.author) {
    errors.push('Missing author property.');
  } else if (typeof schema.author === 'object' && (!schema.author['@type'] || !schema.author.name)) {
    errors.push('Invalid author object. Must include @type and name properties.');
  }
  
  if (!schema.publisher) {
    errors.push('Missing publisher property.');
  } else if (typeof schema.publisher === 'object' && (!schema.publisher['@type'] || !schema.publisher.name)) {
    errors.push('Invalid publisher object. Must include @type and name properties.');
  }
  
  // Check optional but recommended properties
  if (!schema.description) {
    errors.push('Missing description property (recommended).');
  }
  
  if (!schema.image) {
    errors.push('Missing image property (recommended).');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validates any schema object based on its @type
 * @param {Object} schema - The schema object to validate
 * @returns {Object} - Validation result with isValid flag and any errors
 */
export function validateSchema(schema) {
  if (!schema || typeof schema !== 'object') {
    return {
      isValid: false,
      errors: ['Invalid schema object.']
    };
  }
  
  if (!schema['@type']) {
    return {
      isValid: false,
      errors: ['Missing @type property.']
    };
  }
  
  // Validate based on schema type
  switch (schema['@type']) {
    case 'HowTo':
      return validateHowToSchema(schema);
    case 'FAQPage':
      return validateFAQSchema(schema);
    case 'Article':
    case 'BlogPosting':
    case 'NewsArticle':
    case 'TechArticle':
      return validateArticleSchema(schema);
    default:
      return {
        isValid: false,
        errors: [`Unsupported schema type: ${schema['@type']}`]
      };
  }
}

export default {
  validateHowToSchema,
  validateFAQSchema,
  validateArticleSchema,
  validateSchema
};
