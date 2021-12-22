import Link from 'next/link';
import Image from 'next/image';
import { IoDownloadOutline } from 'react-icons/io5';

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
                            <div className='w-14 h-12 lg:w-8 lg:h-8 relative'>
                                <Image
                                    src='/assets/images/logo.svg'
                                    layout='fill'
                                    alt='Logo'
                                />
                            </div>
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
            <main className='z-0 relative'>{children}</main>
            <footer className='w-full flex justify-center items-center py-4 border-t border-gray-200'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <div className='flex flex-col lg:flex-row lg:justify-between py-4 gap-5'>
                        <div className='flex flex-col justify-start gap-3'>
                            <p className='text-3xl lg:text-2xl font-semibold text-blue-brand-100'>
                                coinpare
                            </p>
                            <p className='text-sm text-gray-brand-100'>
                                Get information and compare <br /> prices of the
                                main cryptocurrencies.
                            </p>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-14'>
                            <div className='flex flex-col justify-start gap-1'>
                                <p className='text-lg font-medium text-blue-brand-50'>
                                    Tools
                                </p>
                                <ul>
                                    <li>
                                        <Link href='/compare'>
                                            <a className='text-blue-brand-50 opacity-70'>
                                                Compare
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/news'>
                                            <a className='text-blue-brand-50 opacity-70'>
                                                News
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start gap-1'>
                                <p className='text-lg font-medium text-blue-brand-50'>
                                    Information
                                </p>
                                <ul>
                                    <li>
                                        <Link href='/about'>
                                            <a className='text-blue-brand-50 opacity-70'>
                                                About
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/faqs'>
                                            <a className='text-blue-brand-50 opacity-70'>
                                                FAQ´s
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center lg:mt-5'>
                        <p className='text-xs text-gray-brand-100'>
                            2021 Coinpare
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
