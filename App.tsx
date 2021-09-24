import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text,
} from 'react-native';
import {HomeScreen} from "./src/screens/HomeScreen";



export const App = () => {

  return (
    <SafeAreaView >
      <HomeScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
