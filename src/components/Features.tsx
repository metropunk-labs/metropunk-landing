import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Square,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { GiTakeMyMoney } from 'react-icons/gi';
import { HiOutlineChatAlt, HiOutlineUserGroup } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';
import { IoLogoGameControllerA } from 'react-icons/io';
import { FaVoteYea } from 'react-icons/fa';

// Replace test data with your own
const creator_features = [
  {
    id: 1,
    icon: GiTakeMyMoney,
    title: 'Continuous fundraising',
    text: 'Raise funds throughout the dev-cycle; as your project grows in reputation, grow funds as well!',
  },
  {
    id: 2,
    icon: HiOutlineChatAlt,
    title: 'Direct communication to your market',
    text: 'Poll and talk to your backers directly; keep them up to date with progress and see how they respond.',
  },
  {
    id: 3,
    icon: HiOutlineUserGroup,
    title: 'Reach a larger community of gamers who back projects',
    text: 'Our discovery algorithm maximises your reach and grows your audience with no extra work from you.',
  },
]

const backer_features = [
  {
    id: 4,
    icon: HiOutlineUserGroup,
    title: 'Have a say!',
    text: 'Vote on whether campaign milestones have been met! Get the maximum refund amount if they haven’t.',
  },
  {
    id: 5,
    icon: IoLogoGameControllerA,
    title: 'Find your gaming community',
    text: 'Connect with other backers who like the same games.',
  },
  {
    id: 6,
    icon: BsStars,
    title: 'Direct channels',
    text: 'Reach your favourite creators directly and find out what they’re creating every step of the way.',
  },
]

export default function Features() {
  return (
    <Box p={4} w={'100%'}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'2xl'}>We believe in</Heading>
        <Text fontSize={'3xl'}>
          Mutually beneficial crowdfunding
        </Text>
      </Stack>

      <Container mt={10} minW={['100%', '100%', '90%', '90%', '80%']} p={'10'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {creator_features.map((feature) => (
            <HStack key={feature.id} align={'start'} gap={5}>
              <Square
                bgColor={'purple'}
                borderRadius={'md'}
                size={'72px'}
                alignContent={'center'}
                justifyContent={'center'}
                verticalAlign={'center'}
              >
              <Icon as={feature.icon} boxSize={'46px'} color={'white'}/>
              </Square>
              <VStack align={'start'}>
                <Text fontWeight={'bold'} align={'left'} fontSize={'xl'}>{feature.title}</Text>
                <Text align={'left'} fontFamily={'body'} fontWeight={'light'} fontSize={'xl'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
          {backer_features.map((feature) => (
            <HStack key={feature.id} align={'start'} gap={5}>
              <Square
                bgColor={'purple'}
                borderRadius={'md'}
                size={'72px'}
                alignContent={'center'}
                justifyContent={'center'}
                verticalAlign={'center'}
              >
              <Icon as={feature.icon} boxSize={'46px'} color={'white'}/>
              </Square>
              <VStack align={'start'}>
                <Text fontWeight={'bold'} align={'left'} fontSize={'xl'}>{feature.title}</Text>
                <Text align={'left'} fontFamily={'body'} fontWeight={'light'} fontSize={'xl'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}