import { Editor, FloatingMenu } from "@tiptap/react";
import { useState } from "react";

interface iProps {
    editor: Editor
}

export default function CustomFloatingMenu({ editor }: iProps) {

    return (

        <FloatingMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            shouldShow={({ state }) => {
                const { $from } = state.selection
                const currentLineText = $from.nodeBefore?.textContent

                if (currentLineText === '//') {
                    console.log('Its true')
                    return true
                }

                return false
            }
            }
        >
            <div className="bg-zinc-100 flex flex-col shadow-xl overflow-hidden border border-zinc-150 shadow-black/20 text-zinc-700 items-center rounded-md">
                <button className="text-lg flex p-5 items-center">
                    <div >
                        <h6>Text</h6>
                        <p>Start typing text without formatting</p>
                    </div>
                    <img
                        width={'100px'}
                        src="https://www.notion.so/images/blocks/text/en-US.png"
                        alt="Start typing text without formatting"
                    />
                </button>
                <button className="text-lg flex p-5 items-center">
                    <div >
                        <h6>Title</h6>
                        <p>Insert a title</p>
                    </div>
                    <img
                        width={'100px'}
                        src="https://www.notion.so/images/blocks/text/en-US.png"
                        alt="Start typing text without formatting"
                    />
                </button>
            </div>
        </FloatingMenu>

    )

}