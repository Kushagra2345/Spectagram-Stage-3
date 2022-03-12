import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';



import StoryCard from './StoryCard'
import CreateStory from './CreatePost'

var story=require('./temp-stories.json')




export default class Feed extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:'lightgreen'
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'magenta'
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 100,
              height: 100,
            }}></Image>
          <Text
            style={{
              color: 'yellow',
              backgroundColor:'darkblue'
            }}>
            SPECTAGRAM
          </Text>
        </View>
        <View
          style={{
            flex: 0.9,
          }}>
          <FlatList
            keyExtractor={(item, index) => {
              index.toString();
            }}
            data={story}
            renderItem={(item) => {
              return <StoryCard story={item} />;
            }}
          />
        </View>
      </View>
    );
  }
}
