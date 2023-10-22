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
        width={185}
        height={220}
        borderColor="$borderLight200"
        borderRadius="$xl"
        borderWidth="$2"
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
            style={{ height: 120 }}
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
        <VStack px="$4" pt="$1.5" pb="$6">
          <Text style={{ color: 'red' }} fontSize="$sm">
            Discount
          </Text>
          <Heading _dark={{ color: '$textLight200' }} size="sm" my="$1">
                 Store
          </Heading>
          <View style={{ backgroundColor: '#f0f0f0', padding: 0.5, borderRadius: 6, width: '60%' }}>
            <Text _dark={{ color: '$textLight200' }} fontSize="$xs">
              Lorem Ipsum
            </Text>
          </View>
        </VStack>
      </Box>
    </View>
  );
}

export default App;
