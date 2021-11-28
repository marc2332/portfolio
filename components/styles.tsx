import { styled, keyframes } from '@stitches/react';

export const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

export const Title = styled('h1', {
  color: '#E0D5AD',
  fontSize: 50,
  width: 50,
  display: 'inline-block',
  fontWeight: 'bold',
});

export const SubTitle = styled('h1', {
  color: '#DDB071',
  fontWeight: 'bold',
  margin: 0
});

export const InlineText = styled('p', {
  display: 'inline-block',
  fontSize: 15,
  color: 'black',
  marginLeft: '20px'
});

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '50px 15%',
  overflow: 'auto',
  animation: `${fadeIn} 1s`,
  '@media (max-width: 600px)':{
    padding: '40px 15px'
  }
});


export const WiderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '50px 5%',
  overflow: 'auto',
  animation: `${fadeIn} 1s`,
  '@media (max-width: 600px)':{
    padding: '40px 15px'
  }
});

export const Text = styled('p', {
  color: '#DDB071',
  maxWidth: 800,
  lineHeight: 2
})

export const TextLink = styled('a', {
  color: '#CF412E',
  textDecoration: 'underline'
})

export const TextLinkAlternative = styled('a', {
  color: '#82B071',
  textDecoration: 'underline'
})

export const List = styled('ul', {
  listStyle: 'none',
  margin: 0,
  padding: 5
})

export const ListLink = styled('li', {
  margin: '10px',
})

export const SmallTitle = styled('h3', {
  color: '#DDB071'
})

export const PostCard = styled('div', {
  marginBottom: 50,
  color: '#DDB071',
  fontFamily: 'Arbutus Slab',
  cursor: 'pointer',
  ':hover > *': {
    textDecoration: 'underline'
  }
})

export const PostContainer = styled('div', {
  color: '#DDB071',
  width: '65%',
  fontFamily: 'Arbutus Slab',
  '@media (max-width: 600px)':{
    width: '100%',
  },
  '& > i ':{
   fontWeight: 'bold'
  },
  '& *:not(h1,h2,h3,h4,h5,span)':{
    lineHeight: '160%',
  }
});

export const MenuButton = styled('button', {
  padding: 10,
  height: 50,
  width: 50,
  border: 'none',
  color: '#DDB071',
  background: 'transparent',
  fontFamily: 'Inter',
  cursor: 'pointer',
  '&.right':{
    top: 3,
    right: 15,
    position: 'absolute',
  },
  '&.left':{
    top: 3,
    left: 3,
    position: 'relative',
  },
  '&:hover': {
    textDecoration: 'underline'
  },
  '@media (max-width: 600px)':{
    fontSize: 15
  }
})

export const AppContainer = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%'
})


export const PagesContainer = styled('div', {
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
