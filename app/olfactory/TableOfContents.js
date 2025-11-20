'use client'

import { useEffect, useState } from 'react'

export default function TableOfContents() {
    const [headings, setHeadings] = useState([])
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        // Generate IDs for headings that don't have them
        document.querySelectorAll('h2, h3').forEach((heading) => {
            if (!heading.id) {
                heading.id = heading.innerText
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '')
            }
        })

        const elements = Array.from(document.querySelectorAll('h2, h3'))
            .map((element) => ({
                id: element.id,
                text: element.innerText,
                level: Number(element.tagName.substring(1))
            }))
            .filter(heading => heading.id) // Only include headings with IDs

        setHeadings(elements)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '0px 0px -80% 0px' }
        )

        elements.forEach((heading) => {
            const element = document.getElementById(heading.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    if (headings.length === 0) return null

    return (
        <div className="text-sm">
            <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider">
                On this page
            </h4>
            <ul className="space-y-3">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={`transition-all duration-200 ${heading.level === 3 ? 'pl-4' : ''
                            }`}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={`block py-1 text-sm transition-all duration-200 arrow-hover ${activeId === heading.id
                                ? 'text-foreground font-medium'
                                : 'text-accent hover:text-foreground'
                                }`}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                                setActiveId(heading.id)
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
