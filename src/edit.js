import { useBlockProps, RichText } from '@wordpress/block-editor';
export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({ className: 'sang-testimonial' });
  return <blockquote {...blockProps}><RichText tagName="p" value={attributes.quote} onChange={(quote) => setAttributes({ quote })} placeholder="Client quote" /><RichText tagName="cite" value={attributes.author} onChange={(author) => setAttributes({ author })} placeholder="Client name" /></blockquote>;
}
