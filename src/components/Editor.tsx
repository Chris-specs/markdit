'use client'

// Context
import { useContent } from '@context/Content'
// Monaco Editor
import MonacoEditor from '@monaco-editor/react'
// Markdown
import MarkdownIt from 'markdown-it'

export default function Editor() {
    const [content, setContent] = useContent()

    const md = new MarkdownIt({
        html: true,
        breaks: true,
        linkify: true,
        xhtmlOut: true
    })

    const handleChange = (value: string | undefined) => {
        setContent(value || '')
    }

    return (
        <div className='w-full h-full flex flex-col lg:flex-row items-center gap-6 py-6'>
            <div className='w-full h-full rounded-lg overflow-hidden border border-brand-gray/20'>
                <MonacoEditor
                    height='100%'
                    theme='vs-dark'
                    defaultLanguage='markdown'
                    defaultValue='# Title'
                    onChange={handleChange}
                />
            </div>
            <div
                className='markdown-viewer w-full h-full font-sans border border-brand-gray/20 rounded-lg p-4 overflow-auto'
                dangerouslySetInnerHTML={{
                    __html: md.render(content)
                }}
            />
        </div>
    )
}
