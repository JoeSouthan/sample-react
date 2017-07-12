import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color: ${(props) => (props.fontColour)};
  font-family: 'Arial';
  font-size: 30px;
  letter-spacing: 2px;
`

const Headline = ({ text, fontColour }) => (
  <StyledH1 fontColour={fontColour}>
    {text}
  </StyledH1>
)

Headline.propTypes = {
  text: React.PropTypes.string,
  fontColour: React.PropTypes.string,
}

Headline.defaultProps = {
  text: 'Hello world',
  fontColour: 'red',
}

export default Headline
