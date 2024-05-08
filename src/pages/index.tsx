import { generateHTML } from '@tiptap/react';
import Link from '@tiptap/extension-link';
import StarterKit from '@tiptap/starter-kit';
const json = {"type":"doc","content":[{"type":"paragraph","attrs":{"textAlign":"left"},"content":[{"type":"text","text":"hello"}]},{"type":"paragraph","attrs":{"textAlign":"left"}},{"type":"paragraph","attrs":{"textAlign":"left"},"content":[{"type":"text","marks":[{"type":"link","attrs":{"dataArticleId":"don:core:dvrv-us-1:devo/787:article/5471","class":null,"href":"https://support.dev.devrev-eng.ai/devrev/article/ART-5471","rel":"noopener noreferrer nofollow","target":"_self"}}],"text":"article"}]}]}


export default function Home() {
  const html = generateHTML(json, [StarterKit,Link]);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}
