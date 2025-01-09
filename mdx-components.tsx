import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => {
            return (
                <a href={`#`}>
                    <h2 className='text-neutral-200 text-4xl leading-16 mb-8 mt-8 font-bold'>{children}</h2>
                </a>
            )
        },
        h2: ({ children }) => {
            const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
            return (
                <a href={`#${id}`} id={id}>
                    <h2 className='text-neutral-50 text-4xl leading-16 mb-8 mt-8 font-bold underline'>{children}</h2>
                </a>
            )
        },
        h3: ({ children }) => {
            const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
            return (
                <a href={`#${id}`} id={id}>
                    <h2 className='text-neutral-50 text-3xl leading-16 mb-8 mt-8 font-bold underline'>{children}</h2>
                </a>
            )
        },
        h4: ({ children }) => {
            const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
            return (
                <a href={`#${id}`} id={id}>
                    <h2 className='text-neutral-50 text-2xl leading-16 mb-6 mt-6 font-bold underline'>{children}</h2>
                </a>
            )
        },
        p: ({ children }) => (
            <p className=' text-neutral-300 leading-8 text-lg'>{children}</p>
        ),
        ul: ({ children }) => (
            <ul className='text-neutral-200 list-disc list-inside'>{children}</ul>
        ),
        a: ({ children, href }) => (
            <a className=' text-blue-400 hover:underline' href={href}>{children}</a>
        ),
        strong: ({ children }) => (
            <strong className='leading-8 text-lg'>{children}</strong>
        ),
        blockquote: ({ children }) => (
            <blockquote className='italic'>{children}</blockquote>
        ),
        ...components,
    }
}