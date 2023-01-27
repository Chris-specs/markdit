// Components
import Button from '@components/Button'

export default function LandingPage () {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-7xl font-extrabold text-transparent bg-clip-text bg-main-gradient'>
                Markdit <span className='text-3xl font-medium'>v2</span>
            </h1>
            <h2 className='w-full max-w-lg text-lg text-center py-4'>Type, preview and download README.MD and any markdown files fast.</h2>
            <Button href="/create">Start Now</Button>
        </section>
    )
}
