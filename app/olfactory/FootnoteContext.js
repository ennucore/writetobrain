'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

const FootnoteContext = createContext(null)

export function useFootnotes() {
    return useContext(FootnoteContext)
}

export function FootnoteProvider({ children }) {
    const [footnotes, setFootnotes] = useState({})

    const registerFootnote = useCallback((id, content) => {
        setFootnotes((prev) => {
            // Only update if content changed or new ID
            if (prev[id] === content) return prev
            return { ...prev, [id]: content }
        })
    }, [])

    const unregisterFootnote = useCallback((id) => {
        setFootnotes((prev) => {
            const next = { ...prev }
            delete next[id]
            return next
        })
    }, [])

    return (
        <FootnoteContext.Provider value={{ footnotes, registerFootnote, unregisterFootnote }}>
            {children}
        </FootnoteContext.Provider>
    )
}
