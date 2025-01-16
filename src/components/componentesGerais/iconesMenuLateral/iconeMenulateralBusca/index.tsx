import { Icon, IconProps } from "@chakra-ui/react";
import { IoSearchSharp } from 'react-icons/io5';
interface IProps extends IconProps {
  title?: string;
}
export const IconeBusca: React.FC<IProps> = ({
  ...props
}) => {
    return (
        <Icon
        as={IoSearchSharp}
        //boxSize={"1.3vw"}
        boxSize={'20px'}
        //color={'#A0AEC0'}
        color={'#fff'}
        {...props}
        />
    );
}
