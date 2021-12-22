import Editor from '@monaco-editor/react';
import MarkdownIt from 'markdown-it';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
    const initialState = '# Title';
    const [content, setContent] = useState(initialState);

    const md = new MarkdownIt({
        html: true,
        breaks: true,
        linkify: true,
        xhtmlOut: true,
    });

    return (
        <Layout content={content}>
            <>
                <Head>
                    <title>Markdit</title>
                    <meta
                        name='description'
                        content='Make and preview README.MD and any markdown files fast'
                    />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <section className='w-full h-auto flex justify-center pt-20'>
                    <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                        <h1 className='text-3xl lg:text-4xl font-bold text-dark-brand text-center mb-6'>
                            Markdit
                        </h1>
                        <h2 className='text-sm lg:text-base text-dark-brand text-center mb-10'>
                            Make, preview and download README.MD and any markdown files
                            fast.
                        </h2>
                        <div className='flex flex-col lg:flex-row items-center gap-6 py-6'>
                            <div className='w-full h-[40rem] xl:h-[45.5rem] rounded-lg overflow-hidden border border-gray-700'>
                                <Editor
                                    height='100%'
                                    theme='vs-dark'
                                    defaultLanguage='markdown'
                                    defaultValue='# Title'
                                    onChange={(value) => setContent(value)}
                                />
                            </div>
                            <div
                                className='markdown-viewer w-full h-[40rem] xl:h-[45.5rem] font-sans border border-gray-700 rounded-lg p-4 overflow-auto'
                                dangerouslySetInnerHTML={{
                                    __html: md.render(content),
                                }}
                            ></div>
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
