import { Icon, IconButtonProps, IconProps } from "@chakra-ui/react";
import React from 'react';
import { IoHome } from "react-icons/io5";
interface IProps extends IconProps {
  title?: string;
}
export const IconeHome: React.FC<IProps> = ({
  ...props
}) => {
    return (
        <Icon
        as={IoHome}
        //boxSize={"1.3vw"}
        boxSize={'24px'}
          {...props}
        />
    );
}
