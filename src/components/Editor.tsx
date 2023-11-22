import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { InitialContent } from './initialContent'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'

import 'highlight.js/styles/tokyo-night-dark.css'

lowlight.registerLanguage('js', js)

export function Editor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        content: InitialContent,
        editorProps: {
            attributes: {
                class: 'outline-none'
            }
        }
    })

    return (
        <>
            <EditorContent
                className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
                editor={editor}
            />
        </>
    )
}