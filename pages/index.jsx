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
                <section className='w-full h-auto md:h-full flex justify-center pt-20'>
                    <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                        <h1 className='text-3xl font-bold text-dark-brand text-center mb-6'>
                            Markdit
                        </h1>
                        <h2 className='text-sm text-dark-brand text-center mb-10'>
                            Make and preview README.MD and any markdown files
                            fast.
                        </h2>
                        <div className='w-full h-[40rem] rounded-lg overflow-hidden border border-gray-700'>
                            <Editor
                                height='40rem'
                                theme='vs-dark'
                                defaultLanguage='markdown'
                                defaultValue='# Title'
                                onChange={(value) => setContent(value)}
                            />
                        </div>
                        <div
                            className='markdown-viewer w-full h-auto min-h-[40rem] font-sans border border-gray-700 rounded-lg p-4'
                            dangerouslySetInnerHTML={{
                                __html: md.render(content),
                            }}
                        ></div>
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
