import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import bitcoin from '../assets/bitcoin.png'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
      <motion.div
        style={{
          height: '80vh'
        }}
        animate={{
          translateY: '20px'
        }}
        transition={{
          duration: .8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
      <Image
        m={'auto'}
        w={['60', 'sm']}
        h={['60', 'sm']}
        objectFit={'contain'}
        filter={'grayscale(1)'}
        src={bitcoin}
      />
      </motion.div>
      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        fontWeight={'thin'}
        color={'whiteAlpha.700'}
        mt={['-40' ,'-20']}
      >
        Xcrypto
      </Text>
    </Box>
  )
}

export default Home