'use client'

// Common
import { useSelectedLayoutSegment } from 'next/navigation'
// Context
import { useContent } from '@context/Content'
// Components
import Button from '@components/Button'

export default function DownloadButton() {
    const segment = useSelectedLayoutSegment()
    const [content] = useContent()

    if (segment === 'create') {
        const handleClick = () => {
            const a = document.createElement('a')
            const blob = new Blob([content])
            a.href = window.URL.createObjectURL(blob)
            a.download = 'README.md'
            a.click()
        }

        return <Button onClick={handleClick} download >Download</Button>
    }

    return null
}
