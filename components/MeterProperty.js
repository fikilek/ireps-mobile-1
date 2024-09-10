import { View, Text } from 'react-native'
import React from 'react'

const MeterProperty = (props) => {
  const {dataName, data} = props
  return (
    <View style={{
      // flex: 1,
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#FFBE98",
      // margin: 15,
      marginTop: 12,
      marginLeft: 10,
      marginRight: 10,
      padding: 3
    }}>
      <Text style={{fontWeight: 'bold', color: '#4A249D'}}>{dataName}</Text>
      <Text> : </Text>
      <Text>{data}</Text>
    </View>
  )
}

export default MeterProperty