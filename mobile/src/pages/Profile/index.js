import React from 'react'

import { DevPageOnGithub } from './styles'

export default function Profile({ route }) {
  const { devUsername } = route.params

  return (
    <DevPageOnGithub source={{ uri: `https://github.com/${devUsername}`}} />
  )
}

