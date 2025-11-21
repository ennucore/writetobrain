'use client'

import React, { useEffect, useId } from 'react'
import { useFootnotes } from './FootnoteContext'

export default function Sidenote({ children }) {
    const { registerFootnote, unregisterFootnote } = useFootnotes()
    const id = useId().replace(/:/g, '') // Sanitize ID for DOM

    useEffect(() => {
        registerFootnote(id, children)
        return () => unregisterFootnote(id)
    }, [id, children, registerFootnote, unregisterFootnote])

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
