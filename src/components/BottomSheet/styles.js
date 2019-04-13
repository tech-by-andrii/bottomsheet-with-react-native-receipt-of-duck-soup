import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles'

import { DEVICE } from '../../constants'
import { ANIMATED } from './constants'

export default StyleSheet.create({
  container: {
    position: 'absolute',

    left: 0,
    width: DEVICE.width,
    height: Math.abs(ANIMATED.HIDDEN),

    marginBottom: ANIMATED.HIDDEN - ANIMATED.VISIBLE,
    paddingBottom: Math.abs(ANIMATED.FULL_OPEN),

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.SECONDARY,

    backgroundColor: COLORS.WHITE,

    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  },

  gestureArea: {
    width: DEVICE.width,
    height: 40,

    marginTop: -10,
    position: 'absolute',

    justifyContent: 'center',
    alignItems: 'center',
  },
  pullItem: {
    width: 40,
    height: 5,

    borderRadius: 20,

    backgroundColor: COLORS.SECONDARY
  },

  content: {
    marginVertical: 30,
    paddingHorizontal: 10,

    height: '100%',
  }
})
