import "../../css/main.css"

import { Button, Icon, Toolbar } from '../elements/essentials'
import { Editable, Slate, useSlate, withReact } from 'slate-react'
import { Editor, createEditor } from 'slate'
import React, { useCallback, useMemo } from 'react'

import SubmitButton from "../elements/submitButton"
import isHotkey from 'is-hotkey'
import { withHistory } from 'slate-history'

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
}

let text = "";

const onChange = (event) => {
    text = event[0].children[0].text;
}

export default function Home() {
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    return (
        <div className="slate-container">
            <Slate editor={editor} value={initialValue} onChange={onChange}>
                <Toolbar>
                    <MarkButton format="bold" icon="format_bold" />
                    <MarkButton format="italic" icon="format_italic" />
                    <MarkButton format="underline" icon="format_underlined" />
                    <SubmitButton onClick={analyze} ></SubmitButton>
                </Toolbar>
                <Editable
                    id="textbox"
                    className="textbox"
                    renderLeaf={renderLeaf}
                    placeholder="Paste your story here"
                    spellCheck
                    autoFocus
                    onKeyDown={event => {
                        for (const hotkey in HOTKEYS) {
                            if (isHotkey(hotkey, event)) {
                                event.preventDefault()
                                const mark = HOTKEYS[hotkey]
                                toggleMark(editor, mark)
                            }
                        }
                    }}
                />
            </Slate>
        </div>
    )
}

const analyze = () => {
    console.log(text);
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <code>{children}</code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

const MarkButton = ({ format, icon }) => {
    const editor = useSlate();
    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}

const initialString = `It was dusk and the passing lights dyed the streets beige and turned people into towering shadows and the sidewalk into the keys of a piano. In front of me the keys stretched to the horizon then up the sides of buildings whose floors alternated light and dark as workers left for the night.`

const initialValue = [
    {
        type: 'paragraph',
        children: [
            { text: initialString },
        ],
    },
]
