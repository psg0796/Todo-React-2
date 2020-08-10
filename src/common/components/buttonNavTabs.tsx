import React from 'react';
import Button from './button';
import { Link } from 'react-router-dom';
import Flex, { FlexDirection } from './flex';
import { equals } from 'ramda';

export interface ButtonNavTabProps {
  title: string,
  linkTo: string
}

export interface Props {
  tabPaths: ButtonNavTabProps[],
  className?: string,
  activeTab: string,
  onClick: (title: string) => void
}

const ButtonNavTabs: React.SFC<Props> = (props) => (
  <Flex className={props.className} direction={FlexDirection.row}>
    {
      props.tabPaths.map(path => 
        <Link to={path.linkTo}>
          <Button
            size="large"
            type={equals(props.activeTab, path.title) ? "primary" : "default"}
            title={path.title}
            onClick={() => props.onClick(path.title)}
          />
        </Link>
      )
    }
  </Flex>
)

export default ButtonNavTabs;