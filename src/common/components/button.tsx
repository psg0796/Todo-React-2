import React from 'react';

export interface ButtonProps {
  title: string
}

const Button: React.SFC<ButtonProps> = (props) => (
  <div>
    {props.title}
  </div>
)

export default Button;