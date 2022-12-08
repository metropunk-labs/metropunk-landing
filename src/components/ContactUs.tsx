import { Text, Box } from '@chakra-ui/react';

export default function ContactUs() {
  return (
    <Box justifyContent={'center'} mt={'10'} mb={'20'} paddingY={'5px'}>
      <Text fontSize={'3xl'}>
        Contact us at:
      </Text>
      <Text fontSize={'2xl'} mt={5}>
        christie@metropunk.xyz
      </Text>
      <Text fontSize={'2xl'}>
        sayak@metropunk.xyz
      </Text>
    </Box>
  )
}