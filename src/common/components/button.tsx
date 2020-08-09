import React from 'react';
import { Button as AntButton} from 'antd';
import 'antd/dist/antd.css';
import { ButtonType } from 'antd/lib/button/button';


export interface ButtonProps {
  title: string,
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
  type: ButtonType,
  isDanger?: boolean
}

const Button: React.SFC<ButtonProps> = (props) => (
  <AntButton type={props.type} onClick={props.onClick} danger={props.isDanger}>
    {props.title}
  </AntButton>
)

export default Button;