import Link from "next/link"

export default function Button({ children, href, download }: Button) {

    if (download) {
        return (
            <a
                href={href}
                download
                className='w-auto bg-main-gradient p-[1px] rounded-md'
            >
                <div className='w-full h-full bg-black text-sm font-light py-1 md:py-2 px-3.5 md:px-4 rounded-md transition-all ease-in-out hover:bg-opacity-0 hover:text-black hover:font-normal'>
                    { children }
                </div>
            </a>
        )
    }
    
    return (
        <Link
            href={href}
            className='w-auto bg-main-gradient p-[1px] rounded-md'
        >
            <div className='w-full h-full bg-black text-sm font-light py-1 md:py-2 px-3.5 md:px-4 rounded-md transition-all ease-in-out hover:bg-opacity-0 hover:text-black hover:font-normal'>
                { children }
            </div>
        </Link>
    )
}
