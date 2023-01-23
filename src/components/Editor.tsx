'use client'

// Common
import { useState } from 'react';
// Monaco Editor
import MonacoEditor from '@monaco-editor/react';
// Markdown
import MarkdownIt from 'markdown-it';
// Utils
import MDContent from '@utils/state';

export default function Editor() {

    const [content, setContent] = useState('# Title');

    const md = new MarkdownIt({
        html: true,
        breaks: true,
        linkify: true,
        xhtmlOut: true,
    });

    const handleChange = (value: string | undefined) => {
        setContent(value ? value : '')
        MDContent.setMDContent(value ? value : '')
    }

    return (
        <div className='flex flex-col lg:flex-row items-center gap-6 py-6'>
            <div className='w-full h-[40rem] xl:h-[45.5rem] rounded-lg overflow-hidden border border-brand-gray/20'>
                <MonacoEditor
                    height='100%'
                    theme='vs-dark'
                    defaultLanguage='markdown'
                    defaultValue='# Title'
                    onChange={handleChange}
                />
            </div>
            <div
                className='markdown-viewer w-full h-[40rem] xl:h-[45.5rem] font-sans border border-brand-gray/20 rounded-lg p-4 overflow-auto'
                dangerouslySetInnerHTML={{
                    __html: md.render(content),
                }}
            ></div>
        </div>
    )
}
