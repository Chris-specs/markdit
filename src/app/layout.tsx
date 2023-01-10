// Common
import Link from 'next/link'
// Components
import InnerContainer from '@components/layout/InnerContainer'
import Button from '@components/Button'
import Logo from '@components/svg/Logo'
import GitHub from '@components/svg/GitHub'
// Fonts
import { Inter } from '@next/font/google'
// Styles
import '../styles/globals.sass'
import DownloadButton from '@components/layout/DownloadButton'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin']
})

const Header = () => (
    <>
        <header className='border-b border-brand-gray/20'>
            <InnerContainer>
                <nav className='flex justify-between items-center py-4'>
                    <Link href='/' className='w-36 md:w-44 h-auto'>
                        <Logo />
                    </Link>
                    <div className='flex items-center gap-4'>
                        <DownloadButton />
                        <Link
                            href='https://github.com/Chris-specs/markdit'
                            className='w-8 md:w-9 h-auto fill-white transition-all ease-in-out hover:scale-105'
                        >
                            <GitHub />
                        </Link>
                    </div>
                </nav>
            </InnerContainer>
        </header>
    </>
)

const Footer = () => (
    <>
        <footer className='border-t border-brand-gray/20'>
            <InnerContainer>
                <div className='py-4'>
                    <Link
                        href='https://github.com/Chris-specs'
                        className='w-fit flex items-center gap-2 transition-all ease-in-out hover:scale-105'
                    >
                        <div className='w-6 h-auto fill-white'>
                            <GitHub />
                        </div>
                        <span className='text-sm'>Christian Sanchez</span>
                    </Link>
                </div>
            </InnerContainer>
        </footer>
    </>
)

export default function RootLayout({ children }: Layout) {
    return (
        <html className={inter.variable}>
            <head />
            <body>
                <Header />
                <main>
                    <InnerContainer>
                        {children}
                    </InnerContainer>
                </main>
                <Footer />
            </body>
        </html>
    )
}
