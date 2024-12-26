
import { Card, CardHeader, Divider, CardBody, CardFooter, Button, Heading, Stack, Text, Image, Flex, Icon } from '@chakra-ui/react'
import { Divide } from 'phosphor-react';
import { FaFolderOpen } from 'react-icons/fa6';
interface ICards {
  title: string;
  body: string;
  textsFooter: string;
  icon: React.ReactNode;
  numberTutorial: number;
}
export const CardModulo: React.FC<ICards> = ({
  title, body,textsFooter, icon,numberTutorial
}) => {
  return (
    <>
    {/* 439DEE 1E78E9 */}
            {/* F6FF4E  D8DA44*/}
    <Card w={'30vw'}>
    <CardHeader>
      <Flex flexDirection={'row'} w={'100%'} justifyContent={'space-between'} >
        <Flex  mt={-45} boxSize={'64px'} align={'center'} justify={'center'}
        borderRadius={'12px'} bgGradient={title === 'Todos' ? "linear(to-r, #64B967, #4BA64F)" : title === 'Vídeos' ? "linear(to-r, #439DEE,  #1E78E9)" : "linear(to-r, #F6FF4E , #D8DA44)"}>
            {icon}
        </Flex>
          <Heading size='md'> {title}</Heading>
      </Flex>
    </CardHeader>
    <CardBody>
      <Text>{body}</Text>
    </CardBody>
    <Divider color={'#DCDCDC'}/>
    <CardFooter>
      <Flex flexDirection={'row'} justifyContent={'space-between'} w={'100%'}>
        <Flex>{textsFooter}
        </Flex>
        <Flex>
      {numberTutorial}
        </Flex>
      </Flex>
    </CardFooter>
  </Card>
    </>
  )
}
