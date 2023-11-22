import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { InitialContent } from './initialContent'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import 'highlight.js/styles/tokyo-night-dark.css'
import { common, createLowlight } from 'lowlight'
import {
    RxFontBold,
    RxFontItalic,
    RxCode,
    RxStrikethrough,
    RxChevronDown,
    RxChatBubble
} from 'react-icons/rx'
import { BubbleButton } from './BubbleButton'

const lowlight = createLowlight(common)

lowlight.highlight('js', '"use strict";')

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
            {editor && (
                <BubbleMenu
                    className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600'
                    editor={editor}
                >
                    <BubbleButton>
                        Text
                        <RxChevronDown className="w-4 h-4" />
                    </BubbleButton>
                    <BubbleButton>
                        <RxChatBubble className="w-4 h-4" />
                        Comment
                    </BubbleButton>
                    <div className='flex items-center'>
                        <BubbleButton
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            data-active={editor.isActive('bold')}
                        >
                            <RxFontBold className="w-4 h-4" />
                        </BubbleButton>
                        <BubbleButton
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            data-active={editor.isActive('italic')}
                        >
                            <RxFontItalic className="w-4 h-4" />
                        </BubbleButton>
                        <BubbleButton
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            data-active={editor.isActive('strike')}
                        >
                            <RxStrikethrough className="w-4 h-4" />
                        </BubbleButton>
                        <BubbleButton
                            onClick={() => editor.chain().focus().toggleCode().run()}
                            data-active={editor.isActive('code')}
                        >
                            <RxCode className="w-4 h-4" />
                        </BubbleButton>
                    </div>
                </BubbleMenu>
            )}
        </>
    )
}