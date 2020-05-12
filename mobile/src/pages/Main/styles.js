import styled from 'styled-components/native'
import MapView from 'react-native-maps'

import { MaterialIcons } from '@expo/vector-icons'


export const Map = styled(MapView)`
  flex: 1;
`
export const SearchForm = styled.View`
  position: absolute;
  bottom: 40px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`

export const FindInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0px 20px;
  font-size: 16px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
  elevation: 2;
`

export const FindButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #6787d0;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`

export const FindIcon = styled(MaterialIcons).attrs({
  name: "my-location",
  size: 20,
  color: "#fff"
})`

`
