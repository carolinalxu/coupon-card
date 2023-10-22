import React from 'react';
import { Image } from 'react-native';
import { Text, Box, VStack, Heading } from '@gluestack-ui/themed';


function App() {
  return (
    <Box
      width="$64"
      borderColor="$borderLight200"
      borderRadius="$xl"
      borderWidth="$1"
      my="$4"
      overflow="hidden"
      sx={{
        '@base': {
          mx: '$5',
        },
        '@lg': {
          my: '0',
        },
        '_dark': {
          bg: '$backgroundDark900',
          borderColor: '$borderDark800',
        },
      }}
    >
      <Box>
        <Image
          style={{ height: 150 }}
          source={{
            uri: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
      </Box>
      <VStack px="$6" pt="$4" pb="$6">
        <Text _dark={{ color: '$primary0' }} fontSize="$sm" my="$1.5"> {/* Updated color to dark red with $red900 */}
          Discount
        </Text>
        <Heading _dark={{ color: '$textLight200' }} size="sm">
          Store
        </Heading>
        <Text my="$1.5" _dark={{ color: '$textLight200' }} fontSize="$xs">
          Lorem Ipsum
        </Text>
      </VStack>
    </Box>
  );
}

export default App;
