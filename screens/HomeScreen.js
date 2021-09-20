import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
            style={{ 
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
          source={{
            uri:'http://links.papareact.com/gzs',
          }} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});