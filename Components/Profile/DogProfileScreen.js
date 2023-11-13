import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DogProfileScreen = ({ route }) => {
  const { dogId } = route.params;
  const [dogProfile, setDogProfile] = useState(null);

  // fetch data from  backend
  useEffect(() => {
    const fetchDogProfile = async () => {
      try {
        const response = await getDogProfile(dogId); 
        setDogProfile(response.data);
      } catch (error) {
        console.error('Error fetching dog profile:', error);
      }
    };

    fetchDogProfile();
  }, [dogId]);

  // Show a loading indicator until the dogProfile data is fetched.
  if (!dogProfile) {
    return <Text>Loading...</Text>; // eventually replace with loading spinner or similar indicator
  }

  // Once the data is fetched, render the dog profile information
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: dogProfile.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{dogProfile.name}</Text>
      <Text>Breed: {dogProfile.breed}</Text>
      <Text>Age: {dogProfile.age}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default DogProfileScreen;
