'use client'

import React, { useEffect, useId } from 'react'
import { useFootnotes } from './FootnoteContext'

function adjustSidenotePositions() {
    if (typeof window === 'undefined' || window.innerWidth < 1280) return

    const sidenotes = Array.from(document.querySelectorAll('.sidenote'))
    if (sidenotes.length === 0) return

    // Reset all positions first
    sidenotes.forEach(note => { note.style.top = '0' })

    for (let i = 1; i < sidenotes.length; i++) {
        const prev = sidenotes[i - 1]
        const curr = sidenotes[i]

        const prevRect = prev.getBoundingClientRect()
        const currRect = curr.getBoundingClientRect()

        const gap = 12
        const overlap = prevRect.bottom + gap - currRect.top

        if (overlap > 0) {
            const currentTop = parseFloat(curr.style.top) || 0
            curr.style.top = `${currentTop + overlap}px`
        }
    }
}

export default function Sidenote({ children }) {
    const { registerFootnote, unregisterFootnote } = useFootnotes()
    const id = useId().replace(/:/g, '') // Sanitize ID for DOM

    useEffect(() => {
        registerFootnote(id, children)
        return () => unregisterFootnote(id)
    }, [id, children, registerFootnote, unregisterFootnote])

    useEffect(() => {
        const timer = setTimeout(adjustSidenotePositions, 100)
        const handleResize = () => adjustSidenotePositions()
        window.addEventListener('resize', handleResize)
        return () => {
            clearTimeout(timer)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <sup className="sidenote-ref">
                <a href={`#fn-${id}`} id={`ref-${id}`} data-footnote-ref data-id={id}></a>
            </sup>
            <span className="sidenote">
                <span className="sidenote-number"></span> {children}
            </span>
        </>
    )
}
