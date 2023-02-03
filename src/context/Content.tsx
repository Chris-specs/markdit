'use client'

// Common
import { createContext, useContext, useState } from 'react'

const ContentContext = createContext<
    [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined)

export function ContentProvider({ children }: { children: React.ReactNode }) {
    const [content, setContent] = useState('# Title')

    return (
        <ContentContext.Provider value={[content, setContent]}>
            { children }
        </ContentContext.Provider>
    )
}

export function useContent() {
    const context = useContext(ContentContext)

    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider')
    }

    return context
}
