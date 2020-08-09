import React from 'react';
import Button from './button';
import { Link } from 'react-router-dom';

export interface ButtonNavTabProps {
  title: string,
  linkTo: string
}

export interface Props {
  tabPaths: ButtonNavTabProps[]
}

const ButtonNavTabs: React.SFC<Props> = (props) => (
  <>
    {
      props.tabPaths.map(path => 
        <Link to={path.linkTo}>
          <Button title={path.title} />
        </Link>
      )
    }
  </>
)

export default ButtonNavTabs;