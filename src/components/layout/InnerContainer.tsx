
export default function InnerContainer({ children }: Layout) {
    return (
        <div className='w-full h-full flex justify-center'>
            <div className='w-full max-w-6xl px-6'>
                { children }
            </div>
        </div>
    )
}
