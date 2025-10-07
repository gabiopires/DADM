import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./Home/index"

function SplashScreen() {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 2000, 
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      })
    ).start();
  }, [scaleValue]);

  const scaleInterpolate = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../public/icon2.png')}
        style={[
          styles.logo,
          { transform: [{ scale: scaleValue }] }
        ]}
      />
      <Text style={{marginTop: 20, fontSize:30, color: "#FFF"}}>GeAcad</Text>
      <Text style={{ fontSize:20, color: "#FFF"}}>Versão 1.0</Text>
    </View>
  );
}

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    let timer: any;
    (async () => {
      const seen = await AsyncStorage.getItem('splashShown');
      if (seen === '1') {
        setMostrarSplash(false);
      } else {
        timer = setTimeout(() => {
          setMostrarSplash(false);
          AsyncStorage.setItem('splashShown', '1');
        }, 4000);
      }
    })();
    return () => { if (timer) clearTimeout(timer); };
  }, []);

  if (mostrarSplash) {
    return <SplashScreen />;
  }

  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a056eb',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 1000,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
