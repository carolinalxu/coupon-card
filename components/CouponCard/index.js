import React, { useState } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text, Box, VStack, Heading } from '@gluestack-ui/themed';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function App() {
  const [isFavourite, setFavourite] = useState(false);

  const handleFavouritePress = () => {
    setFavourite(!isFavourite);
  };

  return (
    <View style={{ shadowColor: 'rgba(0, 0, 0, 0.4)', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 5, elevation: 2 }}>
      <Box
        width="$64"
        borderColor="$borderLight200"
        borderRadius="$xl"
        borderWidth="$2" // Increase the border width to 2
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
        <Box style={{ position: 'relative' }}>
          <Image
            style={{ height: 150 }}
            source={{
              uri: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <Box style={{ position: 'absolute', top: 10, right: 10 }}>
            <TouchableOpacity onPress={handleFavouritePress}>
              <View>
                <FontAwesomeIcon
                  name={isFavourite ? 'heart' : 'heart-o'}
                  style={{
                    fontSize: 24,
                    color: 'white',
                  }}
                />
              </View>
            </TouchableOpacity>
          </Box>
        </Box>
        <VStack px="$6" pt="$4" pb="$6">
          <Text style={{ color: 'red' }} fontSize="$sm" my="$1.5">
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
    </View>
  );
}

export default App;
