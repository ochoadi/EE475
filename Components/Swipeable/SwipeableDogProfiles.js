// SwipeableDogProfiles.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const SwipeableDogProfiles = ({ dogs, onSwipeLeft, onSwipeRight, onFinalSwipe, navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwiped = () => {
    if (currentIndex >= dogs.length - 1) {
      onFinalSwipe();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToDogProfile = (dog) => {
    
    navigation.navigate('DogProfile', { dogId: dog.id }); // Pass any relevant parameters
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={dogs}
        renderCard={(dog) => (
          <View style={styles.card}>
            <Text>{dog.name}</Text>
            {/* eventually add ability to add dog image */}
          </View>
        )}
        onSwiped={handleSwiped}
        onSwipedLeft={onSwipeLeft}
        onSwipedRight={onSwipeRight}
        stackSize={3}
      />
    <Button title="Go to Profile" onPress={() => goToDogProfile(dogs[currentIndex])} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
  }
});

export default SwipeableDogProfiles;
