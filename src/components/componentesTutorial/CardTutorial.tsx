
import { Card, CardHeader, Divider, CardBody, CardFooter, Heading, Text, Flex, Button } from '@chakra-ui/react'
interface ICards {
  title: string;
  body: string;
}
export const CardTutorial: React.FC<ICards> = ({
  title, body
}) => {
  return (
    <>
    {/* 439DEE 1E78E9 */}
            {/* F6FF4E  D8DA44*/}
    <Card w={'100%'}>
    <CardHeader>
      <Flex flexDirection={'row'} w={'100%'} justifyContent={'space-between'} >
          <Heading size='md' color={"#7D7D7D"}> {title}</Heading>
      </Flex>
    </CardHeader>
    <CardBody>
      <Text>{body}</Text>
    </CardBody>
    <Divider color={'#DCDCDC'}/>
    <CardFooter>
      <Flex flexDirection={'row'} justifyContent={'space-between'} w={'100%'}>
        <Button >
          Clique aqui
        </Button>
      </Flex>
    </CardFooter>
  </Card>
    </>
  )
}
