'use client'

// Common
import { useSelectedLayoutSegment } from 'next/navigation'
// Components
import Button from '@components/Button'

export default function DownloadButton() {
    const segment = useSelectedLayoutSegment()

    if (segment === 'create') {
        return <Button href='' download>Download</Button>
    }

    return null
}
