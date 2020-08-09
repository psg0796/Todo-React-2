import React from 'react';
import { Button as AntButton} from 'antd';
import 'antd/dist/antd.css';
import { ButtonType } from 'antd/lib/button/button';
import { ButtonSize } from 'antd/lib/button';


export interface ButtonProps {
  title: string,
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  type: ButtonType,
  isDanger?: boolean,
  size?: ButtonSize,
  className?: string
}

const Button: React.SFC<ButtonProps> = (props) => (
  <AntButton size={props.size} type={props.type} onClick={props.onClick} danger={props.isDanger} className={props.className}>
    {props.title}
  </AntButton>
)

export default Button;