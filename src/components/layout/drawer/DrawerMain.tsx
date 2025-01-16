import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  DrawerProps,
} from '@chakra-ui/react'
import React from 'react'
import { useIsOpen } from '../../../context/isOpenContext/useIsOpen';
interface Iprops extends DrawerProps {
  isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
}
export const DrawerMain: React.FC<Iprops> = ({
  isOpen, onOpen, onClose,
  ...props
}) =>{

  return (
    <>
      <Button colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}

        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
