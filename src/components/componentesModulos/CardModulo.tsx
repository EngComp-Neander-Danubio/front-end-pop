
import { Card, CardHeader, Divider, CardBody, CardFooter, Heading, Text, Flex } from '@chakra-ui/react'
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
    <Card w={'30vw'}
    border="1px solid rgba(0, 0, 0, 0.2)"
    boxShadow="4px 4px 4px -2px rgba(0, 0, 0, 0.25)"
    //_hover={{cursor: 'pointer'}}
    >
    <CardHeader>
      <Flex flexDirection={'row'} w={'100%'} justifyContent={'space-between'} >
        <Flex  mt={-45} boxSize={'64px'} align={'center'} justify={'center'}
        borderRadius={'12px'} bgGradient={
          title === 'Todos' ?
        "linear(to-r, #64B967, #4BA64F)" :
        title === 'Vídeos' ?
        "linear(to-r, #439DEE,  #1E78E9)" :
        title === 'Documentos' ?
        "linear(to-r, #DD6B20,  #DD6B20)" :
        "linear(to-r, #4FD1C5 , #4FD1C5)"}  _hover={{cursor: 'pointer'}}>
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
