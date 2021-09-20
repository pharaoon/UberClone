import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

export const NavOptions = () => {
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];
  return (
    <SafeAreaView>
    <FlatList
        data={data}
        keyExtractor={({id}) => id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
    />
    </SafeAreaView>
  );
};