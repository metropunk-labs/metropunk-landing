import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function AlphaModal() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  );
  const [error, setError] = useState(false);

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={'transparent'}
    >
      <Container
        maxW={'xl'}
        bg={useColorModeValue('light', 'dark')}
        boxShadow={'xl'}
        rounded={'2xl'}
        p={10}
        flexDirection={'column'}
        zIndex={20}
      >
        <Heading
          as={'h2'}
          fontSize={{ base: '2xl', sm: '3xl' }}
          textAlign={'center'}
          mb={8}>
          Sign up for our alpha!
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                setError(true);
                setState('initial');
                return;
              }

              setState('success');
            }, 1000);
          }}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
              value={email}
              disabled={state !== 'initial'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              bg={state === 'success' ? 'green' : 'purple'}
              color={'light'}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}
              _hover={{ bg: 'ocean' }}
            >
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
}