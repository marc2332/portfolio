import { styled } from "@stitches/react";

const PagesContainer = styled('div', {
    background: '#181818',
    height: '100vh',
    overflow: 'auto',
    flex: 1,
    transition: 'opacity 0.5s ease-in-out',
    '&.hidden': {
        display: 'block',
        transition: '0.03s ease-in-out',
        opacity: 0
    }
})

export default PagesContainer;
