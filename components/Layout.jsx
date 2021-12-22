import Link from 'next/link';
import Image from 'next/image';
import {
    IoDownloadOutline,
    IoLogoGithub,
    IoHeart,
    IoHeartOutline,
} from 'react-icons/io5';

const Layout = ({ children, content }) => {
    const downloadMarkdown = () => {
        const element = document.createElement('a');
        const file = new Blob([content], {
            type: 'text/plain',
        });
        element.href = URL.createObjectURL(file);
        element.download = 'README.md';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    return (
        <>
            <header className='w-full flex justify-center items-center bg-white fixed top-0 z-10  border-b border-gray-200'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <div className='flex h-14 lg:h-16 justify-between items-center'>
                        <Link href='/'>
                            <a className='w-14 h-12 relative'>
                                <Image
                                    src='/assets/images/logo.svg'
                                    layout='fill'
                                    alt='Logo'
                                />
                            </a>
                        </Link>
                        <button
                            onClick={downloadMarkdown}
                            className='w-32 h-10 flex justify-center items-center gap-2 bg-green-brand rounded-lg'
                        >
                            <IoDownloadOutline className='text-xl text-white' />

                            <span className='text-sm text-white'>Download</span>
                        </button>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer className='w-full flex justify-center items-center bg-dark-brand py-4 border-t border-gray-200'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <div className='flex justify-center py-4 gap-5'>
                        <ul className='flex flex-col items-center gap-1'>
                            <li className='w-full flex justify-center items-center'>
                                <Link href='https://github.com/Chris-specs/markdit'>
                                    <a className='flex flex-col items-center font-medium text-white'>
                                        <IoLogoGithub />
                                        Markdit
                                    </a>
                                </Link>
                            </li>
                            <li className='w-full flex justify-center items-center'>
                                <p className='flex justify-center items-center text-sm font-light text-white gap-1'>
                                    Made with <IoHeartOutline /> by{' '}
                                    <Link href='https://github.com/Chris-specs'>
                                        <a className='font-medium'>
                                            Christian Sanchez
                                        </a>
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
