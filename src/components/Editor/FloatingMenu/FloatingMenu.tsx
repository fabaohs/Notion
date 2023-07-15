import { Editor, FloatingMenu } from "@tiptap/react";

interface iProps {
    editor: Editor
}

const styles = {
    button: 'hover:bg-zinc-200 text-lg flex p-5 items-center w-[100%] gap-5 text-left',
    buttonTitle: 'not-prose text-xl text-zinc-900 font-bold',
    descContainer: 'max-w-[300px]'
}

export default function CustomFloatingMenu({ editor }: iProps) {

    const imageWidth = '50px'

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
            <div className="w-[400px] bg-zinc-100 flex flex-col shadow-xl overflow-hidden border border-zinc-150 shadow-black/20 text-zinc-700 items-center rounded-md">
                <button onClick={() => { editor.chain().focus().setParagraph().run() }} className={styles.button} tabIndex={1}>
                    <img
                        width={imageWidth}
                        src="https://www.notion.so/images/blocks/text/en-US.png"
                        alt="Start typing text without formatting"
                    />
                    <div className={styles.descContainer}>
                        <h6 className={styles.buttonTitle}>Text</h6>
                        <p>Start typing text without formatting</p>
                    </div>
                </button>

                <button onClick={() => { editor.chain().focus().setHeading({ level: 1 }).run() }} className={styles.button} tabIndex={2}>
                    <img
                        width={imageWidth}
                        src="https://www.notion.so/images/blocks/header.57a7576a.png"
                        alt="Start typing text without formatting"
                    />
                    <div className={styles.descContainer}>
                        <h6 className={styles.buttonTitle}>Title</h6>
                        <p>Insert an section title</p>
                    </div>
                </button>

                <button onClick={() => { editor.chain().focus().setHeading({ level: 2 }).run() }} className={styles.button} tabIndex={3}>
                    <img
                        width={imageWidth}
                        src="https://www.notion.so/images/blocks/subheader.9aab4769.png"
                        alt="Insert an section subtitle"
                    />
                    <div className={styles.descContainer}>
                        <h6 className={styles.buttonTitle}>Subtitle</h6>
                        <p>Insert an section subtitle</p>
                    </div>
                </button>

                <button onClick={() => { editor.chain().focus().setHeading({ level: 3 }).run() }} className={styles.button} tabIndex={4}>
                    <img
                        width={imageWidth}
                        src="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
                        alt="Start typing text without formatting"
                    />
                    <div className={styles.descContainer}>
                        <h6 className={styles.buttonTitle}>Small Subtitle</h6>
                        <p>Insert an small section subtitle</p>
                    </div>
                </button>

            </div>
        </FloatingMenu>

    )

}