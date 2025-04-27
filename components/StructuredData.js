/**
 * StructuredData Component
 * 
 * A reusable component for adding JSON-LD structured data to pages.
 * This component takes a data object and renders it as JSON-LD in the page.
 */

export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
