import React from 'react'
import { View, Animated, Text } from 'react-native'

import { animatedPosition, panGesture } from './pan-responder'
import styles from './styles'

function BottomSheetFunction () {
  return (
    <Animated.View style={[styles.container, { bottom: animatedPosition }]}>
      <View style={styles.gestureArea} {...panGesture.panHandlers}>
        <View style={styles.pullItem} />
      </View>

      <View style={styles.content}>
        <Text>Awesome content</Text>
      </View>
    </Animated.View>
  )
}

export default BottomSheetFunction
