import { Editor, BubbleMenu } from "@tiptap/react";
import { bubbleButtonStyle } from "../Editor";
import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode, RxChevronDown, RxChatBubble } from 'react-icons/rx'

interface iProps {
    editor: Editor | null
}

export function CustomBubbleMenu({ editor }: iProps) {

    if (!editor) {
        return null
    }

    return (
        <BubbleMenu className={'w-[630px] bg-zinc-900 shadow-xl overflow-hidden border border-zinc-600 shadow-black/20 flex justify-center text-white items-center rounded-md'} editor={editor} tippyOptions={{ duration: 100 }}>
            <button className={`${bubbleButtonStyle} items-center gap-4`}>
                <RxChevronDown /> Text
            </button>
            <button className={`${bubbleButtonStyle} items-center gap-4`}>
                <RxChatBubble /> Comment
            </button>
            <div className="flex items-center justify-center h-[100%]">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`${bubbleButtonStyle} ${editor.isActive('bold') ? 'bg-zinc-700 text-purple-500' : ''}`}
                >
                    <RxFontBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`${bubbleButtonStyle} ${editor.isActive('italic') ? 'bg-zinc-700 text-purple-500' : ''}`}
                >
                    <RxFontItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`${bubbleButtonStyle} ${editor.isActive('strike') ? 'bg-zinc-700 text-purple-500' : ''}`}
                >
                    <RxStrikethrough />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`${bubbleButtonStyle} ${editor.isActive('codeblock') ? 'bg-zinc-700 text-purple-500' : ''}`}
                >
                    <RxCode />
                </button>
            </div>
        </BubbleMenu>
    )

}