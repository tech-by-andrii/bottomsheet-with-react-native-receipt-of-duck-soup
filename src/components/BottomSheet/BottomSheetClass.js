import React, { Component } from 'react'
import { Animated, View, SafeAreaView } from 'react-native'

import BottomSheetContent from '../BottomSheetContent'

import { animatedPosition, panGesture } from './pan-responder'
import styles from './styles'

export default class BottomSheetClass extends Component {
  render () {
    return (
      <Animated.View style={[styles.container, { bottom: animatedPosition }]}>
        <View style={styles.gestureArea} {...panGesture.panHandlers}>
          <View style={styles.pullItem} />
        </View>

        <SafeAreaView style={styles.content}>
          <BottomSheetContent />
        </SafeAreaView>
      </Animated.View>
    )
  }
}
