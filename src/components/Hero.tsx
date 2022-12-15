import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Modal,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react';
import AlphaModal from './AlphaModal';


export default function Hero() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={'5xl'} padding={10}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 10, md: 20 }}
        py={{ base: 10, md: 28 }}
        mt={10}
        >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
          lineHeight={'110%'}
          color={useColorModeValue('dark', 'light')}
          >
          Crowdfunding for video games {' '}
          <Text
            as={'span'}
            bgGradient={useColorModeValue('linear(to-r, sky, ocean, purple)', 'linear(to-r, turquoise, sky, ocean, purple, pink)')}
            bgClip='text'
          >
            without risk
          </Text>
        </Heading>
        <Text fontSize={['2xl', 'xl', '3xl']} maxW={['3xl', '3xl', '6xl']}>
          Existing crowdfunding solutions do not enforce proper backer protections and hold creators accountable to their initial promises.
        </Text>
        <Text fontSize={['2xl', 'xl', '3xl']} maxW={'3xl'}>
          Metropunk implements a simple solution to address these problems — {' '}
          <Text
            as={'span'}
            fontWeight={'bold'}
          >consensus based escrows.
          </Text>
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            fontSize={['2xl', 'xl', 'xl']}
            py={8}
            px={8}
            >
            read about it
          </Button>
          <Button
            rounded={'full'}
            fontSize={['2xl', 'xl', 'xl']}
            py={8}
            px={8}
            bg={'purple'}
            textColor={'white'}
            _hover={{ bg: 'ocean' }}
            onClick={onOpen}
          >
            sign up for alpha
          </Button>
        </Stack>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay zIndex={0} />
        <ModalContent mt={'20%'} bg={'transparent'}>
          <AlphaModal/>
        </ModalContent>
      </Modal>
    </Container>
  );
}