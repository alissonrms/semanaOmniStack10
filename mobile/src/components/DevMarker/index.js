import React from 'react'
import { Marker, Callout } from 'react-native-maps'

import { DevImage, Container, DevName, DevBio, DevTechs } from './styles'

export default function DevMarker({ latitude, longitude, imgURL, devName, devTechs, devBio, devUsername, navigation }) {
  return (
    <Marker coordinate={{ latitude: latitude, longitude: longitude }}>
      <DevImage source={{ uri: imgURL }} />

      <Callout onPress={() => {
        navigation.navigate('Profile', { devUsername })
      }} >
        <Container>
          <DevName>{devName}</DevName>
          <DevBio>{devBio}</DevBio>
          <DevTechs>{devTechs}</DevTechs>
        </Container>
      </Callout>
    </Marker>
  )
}