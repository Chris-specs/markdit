import MarkdownIt from 'markdown-it';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const initialState = '<h1>Title</h1>';
    const [content, setContent] = useState(initialState);

    const md = new MarkdownIt({
        html: true,
        breaks: true,
        linkify: true,
        xhtmlOut: true,
    });

    return (
        <>
            <Head>
                <title>Markdit</title>
                <meta
                    name='description'
                    content='Make and preview README.MD and any markdown files fast'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className='w-full h-auto md:h-full flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <h1 className='text-3xl font-bold'>Markdit</h1>
                    <h2 className=''>
                        Make and preview README.MD and any markdown files fast
                    </h2>
                    <textarea
                        name='content'
                        id='markdown'
                        cols='30'
                        rows='30'
                        placeholder='# Type your markdown text to preview transformed'
                        onChange={(e) => setContent(e.target.value)}
                        className='w-full resize-none min-h-[40rem] bg-dark-brand font-editor text-xs text-gray-300 border border-gray-700 rounded-lg p-4'
                    ></textarea>
                    <div
                        className='markdown-viewer w-full h-auto min-h-[40rem] border border-gray-700 rounded-lg p-4'
                        dangerouslySetInnerHTML={{ __html: md.render(content) }}
                    ></div>
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
