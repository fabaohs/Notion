import { useEditor, EditorContent } from '@tiptap/react'
import { lowlight } from 'lowlight'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.css'

import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import { FloatingMenu } from '@tiptap/extension-floating-menu'

import { CustomBubbleMenu } from './BubbleMenu/BubbleMenu'
import CustomFloatingMenu from './FloatingMenu/FloatingMenu'
import { useState } from 'react'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

export const bubbleButtonStyle = 'px-8 py-4 flex content-center hover:bg-zinc-600 text-lg font-medium h-[100%]'

const CustomDocument = Document.extend({
    content: 'heading block*',
})

export default function Editor() {

    const editor = useEditor({
        extensions: [
            CustomDocument,
            StarterKit.configure({
                document: false
            }),
            CodeBlockLowlight.configure({
                lowlight,
            }),
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'Type some title...'
                    }
                    return 'Type "//" and do "enter" to open the tool menu'
                },
            })
        ],
        editorProps: {
            attributes: {
                class: 'outline-none'
            }
        },
        // content: '<h1>Title</h1> <p>Content</p>'
    })

    return (
        <>
            <EditorContent
                editor={editor}
                className={'pl-8 pt-16 prose prose-purple'}
            />
            {editor && (
                <>
                    <CustomBubbleMenu editor={editor} />
                    <CustomFloatingMenu editor={editor} />
                </>
            )}
        </>
    )

}