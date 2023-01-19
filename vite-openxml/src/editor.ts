// import {EditorState} from "@codemirror/state"
// import {EditorView, keymap} from "@codemirror/view"
// import {defaultKeymap} from "@codemirror/commands"
// import { basicSetup } from "@codemirror/basic-setup"
// import { markdown } from "@codemirror/lang-markdown"
// import { oneDarkTheme } from "@codemirror/theme-one-dark"

import {basicSetup, EditorView} from "codemirror"
import {markdown} from "@codemirror/lang-markdown"
import {languages} from "@codemirror/language-data"


// let startState = EditorState.create({
//   doc: "Hello World",
//   extensions: [
//     basicSetup,
//     // oneDarkTheme,
//     // markdown(),
//   ],
// })

// let view = new EditorView({
//   doc: "hello markdown",
//   extensions: [

//   ],
//   parent: document.getElementById('codemirror')!
// })

let editor = new EditorView({
  doc: "Hello\n\n```javascript\nlet x = 'y'\n```",
  extensions: [
    basicSetup,
    markdown({codeLanguages: languages})
  ],
  parent: document.getElementById('editor')!
})
