import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BackButtonProps } from '@/types'
import { useRouter } from 'expo-router'
import { CaretCircleLeft } from 'phosphor-react-native'
import { colors } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'

const BackButton = ({style, iconSize = 26}: BackButtonProps) => {
    const router = useRouter();

  return (
    <TouchableOpacity onPress={()=> router.back()} style={[styles.button, style]}>

        <CaretCircleLeft size={verticalScale(iconSize)} color={colors.white} weight="bold" />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        
    }
})