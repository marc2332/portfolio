import { styled } from "@stitches/react";

const PagesContainer = styled('div', {
    background: '#181818',
    height: '100vh',
    overflow: 'auto',
    flex: 1,
    transition: '1s ease-in-out',
    '&.hidden': {
        transition: '0.05s ease-in-out',
        opacity: 0
    }
})

export default PagesContainer;
