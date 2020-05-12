import React, { useEffect, useState } from 'react'

import { getCurrentPositionAsync, requestPermissionsAsync } from 'expo-location'

import DevMarker from '../../components/DevMarker'

import { Map, SearchForm, FindInput, FindButton, FindIcon } from './styles'

import { api } from '../../services/api'


export default function Main({ navigation }) {
  const [devs, setDevs] = useState([])
  const [currentRegion, setCurrentRegion] = useState(null)
  const [techs, setTechs] = useState('')

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync()

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })

        const { latitude, longitude } = coords

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadInitialPosition()
  }, [])

  async function loadDevs() {
    const { latitude, longitude } = currentRegion

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs,
      }
    })

    setDevs(response.data)
  }

  function handleRegionChange(region) {
    setCurrentRegion(region)
  }

  if (!currentRegion) {
    return null
  }

  return (
    <>
      <Map onRegionChangeComplete={handleRegionChange} initialRegion={currentRegion}>
        {devs.map(dev => (
          <DevMarker
            key={dev._id}
            latitude={dev.location.coordinates[1]}
            longitude={dev.location.coordinates[0]}
            imgURL={dev.avatar_url}
            devName={dev.name}
            devBio={dev.bio}
            devTechs={dev.techs.join(', ')}
            devUsername={dev.github_username}
            navigation={navigation}
          />
        ))}
      </Map>
      <SearchForm>
        <FindInput
          placeholder="Buscar devs por tecnologia"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <FindButton onPress={loadDevs}>
          <FindIcon />
        </FindButton>
      </SearchForm>
    </>
  )
}

