'use client'

import React, { useEffect, useState } from 'react'
import { useFootnotes } from './FootnoteContext'

export default function FootnoteDisplay() {
    const { footnotes } = useFootnotes()
    const [sortedIds, setSortedIds] = useState([])

    useEffect(() => {
        // Query all footnote refs in the document to determine order
        const refs = Array.from(document.querySelectorAll('[data-footnote-ref]'))
        const ids = refs.map(ref => ref.getAttribute('data-id')).filter(Boolean)

        // Remove duplicates if any (though useId should be unique)
        const uniqueIds = [...new Set(ids)]
        setSortedIds(uniqueIds)
    }, [footnotes]) // Re-run when footnotes change (which happens on mount of Sidenotes)

    if (sortedIds.length === 0) return null

    return (
        <div data-footnotes>
            <ol>
                {sortedIds.map((id) => (
                    <li key={id} id={`fn-${id}`}>
                        <p>
                            {footnotes[id]} <a href={`#ref-${id}`} data-footnote-backref aria-label="Back to content">↩</a>
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    )
}
