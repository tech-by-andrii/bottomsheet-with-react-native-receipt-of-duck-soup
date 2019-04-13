import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import styles from './styles'

export default function () {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>BottomSheet tutorial</Text>
    </SafeAreaView>
  )
}
