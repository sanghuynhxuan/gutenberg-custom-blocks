import { useBlockProps, RichText } from '@wordpress/block-editor';
export default function save({ attributes }) {
  return <blockquote {...useBlockProps.save({ className: 'sang-testimonial' })}><RichText.Content tagName="p" value={attributes.quote} /><RichText.Content tagName="cite" value={attributes.author} /></blockquote>;
}
