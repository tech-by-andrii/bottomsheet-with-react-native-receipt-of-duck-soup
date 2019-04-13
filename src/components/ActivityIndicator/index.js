import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import styles from './styles'

export default function () {
  return (
    <View style={styles.container}>
      <ActivityIndicator/>
    </View>
  )
}
