import { styled } from '@stitches/react';


const ButtonStyled = styled('a', {
  borderRadius: 7,
  border: 'none',
  padding: '10px 20px',
  margin: 15,
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'Inter',
  fontSize: 14,
  transition: '0.1s ease-in-out',
  textDecoration: 'none',
  display: 'inline-block',
  //Desktop
  '@media (min-width: 600px)': {
    '&:hover': {
      color: 'black',
      fontWeight: 'bold'
    }
  },
  // Mobile
  '@media (max-width: 600px)': {
    '&:hover': {
      background: 'rgba(255,255,255,0.5)',
      color: 'black',
      transform: 'scale(0.9)',
      fontWeight: 'bold'
    },
  }
});

export function Button({ href, children }) {
  return (
    <ButtonStyled href={href} target="_blank">
      {children}
    </ButtonStyled>
  )
}

export const Title = styled('h1', {
  color: 'white',
  display: 'inline-block',
});

export const SubTitle = styled('h2', {
  color: 'white'
});

export const InlineText = styled('p', {
  display: 'inline-block',
  fontSize: 15,
  color: 'white',
  marginLeft: '20px'
});

export const Container = styled('div', {
  margin: '50px',
  display: 'flex',
  justifyContent: 'center'
});

export const AboutText = styled('p', {
  color: '#c1c1c1',
  maxWidth: 800,
  lineHeight: 2
})

export const MobileMessage = styled('p', {
  color: 'white',
  fontSize: 15
})

export const UnorderedList = styled('ul', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'block',
  '@media (min-width: 600px)': {
    '& > li': {
      display: 'inline-block'
    },
  }
})