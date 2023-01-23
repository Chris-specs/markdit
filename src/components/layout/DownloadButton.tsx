'use client'

// Common
import { useSelectedLayoutSegment } from 'next/navigation'
// Components
import Button from '@components/Button'
// Utils
import MDContent from '@utils/state'

export default function DownloadButton() {
    const segment = useSelectedLayoutSegment()

    if (segment === 'create') {
        const handleClick = () => {
            const a = document.createElement('a')
            const blob = new Blob([MDContent.getMDContent()])
            a.href = window.URL.createObjectURL(blob)
            a.download = 'README.md'
            a.click()
        }

        return <Button onClick={handleClick} download >Download</Button>
    }

    return null
}
