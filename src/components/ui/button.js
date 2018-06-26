import React from 'react'
import { cx, css } from 'emotion'
import mq from '../utils/breakpoints'
import theme from '../utils/theme'

const buttonDefault = css(
  {
    display: 'inline-block',
    marginRight: 0,
    marginLeft: 0,
    padding: '14px 20px',
    verticalAlign: 'top',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 1,
    borderRadius: 10,
    willChange: 'opacity',
    transition: 'all 0.2s',
    cursor: 'pointer',
    color: theme.color.black,
    backgroundColor: '#fff',
    border: '1px solid #cdcdcd',
    textDecoration: 'none',
    fontWeight: 600,
    boxSizing: 'border-box',
    '&:hover': {
      boxShadow: '0px 0px 0px 3px #3FBFB0',
    },
    '&:active': {
      border: '1px solid #3FBFB0',
      boxShadow: 'inset 0px 0px 2px 0px #3FBFB0',
    },
  },
  mq({
    width: ['100%', 'inherit'],
  })
)

const buttonFullWidthStyle = css({
  width: '100%',
})

const buttonPrimary = css({
  backgroundColor: theme.color.primaryDark,
  color: theme.color.white,
  textTransform: 'uppercase',
  fontSize: 20,
  border: '1px solid #ED4005',
  boxShadow: '0 2px 3px 0 rgba(160,160,160,0.50)',
  '&:hover, &:active': {
    background: '#ED4005',
    boxShadow: '0px 0px 0px 3px #FA5723',
    borderColor: '#ED4005',
  },
})

const buttonSecondary = css({
  backgroundColor: theme.color.secondaryDark,
  color: theme.color.white,
  textTransform: 'uppercase',
  fontSize: 20,
  border: '1px solid #3FBFB0',
  '&:hover, &:active': {
    background: '#3FBFB0',
    boxShadow: '0px 0px 0px 3px #3FBFB0',
    borderColor: '#3FBFB0',
  },
})

class Button extends React.Component {
  styles = {
    fullWidth: buttonFullWidthStyle,
    primary: buttonPrimary,
    secondary: buttonSecondary,
    default: buttonDefault,
  }

  render() {
    let style = 'default'
    if (this.props.hasOwnProperty('type')) {
      style = this.props.type
    }
    style = cx(this.styles['default'], this.styles[style])

    if (this.props.hasOwnProperty('className')) {
      style += ' ' + this.props.className
    }

    return (
      <a href={this.props.link} className={style}>
        {this.props.children}
      </a>
    )
  }
}

export default Button
