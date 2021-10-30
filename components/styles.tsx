import { styled } from '@stitches/react';

const ButtonStyled = styled('button', {
  borderRadius: 7,
  border: 'none',
  padding: '10px 20px',
  margin: 15,
  background: 'transparent',
  color: 'white',
  cursor: 'pointer',
  transition: 'color 0.3s ease 0s',
  '&:hover': {
    color: 'black',
  },
  '& a': {
    textDecoration: 'none',
    pointerEvents: 'none',
    color: 'inherit'
  },
  fontFamily: 'Inter'
});

export function Button({ href, children }) {
  return (
    <a href={href} target="_blank">
      <ButtonStyled>
        {children}
      </ButtonStyled>
    </a>

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
