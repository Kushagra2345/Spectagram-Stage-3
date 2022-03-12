import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';



export default class Storycard extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#2a2a2a',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
          marginTop: 20,
          marginRight: 20,
          borderRadius: 20,
          resizeMode: 'contain',
          marginBottom:20
        }}>
        <Image
          style={{
            width: '80%',
            height: 200,
          }}
          source={require('../assets/image_1.jpg')}/
          >
        <Text
        style={{
          color:'yellow'
        }}
        >{this.props.story.item.caption}</Text>
     

     
      </View>
    );
  }
}
