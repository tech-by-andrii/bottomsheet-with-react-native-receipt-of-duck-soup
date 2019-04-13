import React from 'react'
import { Image, View } from "react-native";

import styles from './styles'

export default function () {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/react-native.png')} style={styles.image} resizeMode="contain" />
    </View>
  )
}
