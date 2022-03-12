import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';

import * as Font from 'expo-font';

var images = {
  image1: require('../assets/image_1.jpg'),
  image2: require('../assets/image_2.jpg'),
  image3: require('../assets/image_3.jpg'),
  image4: require('../assets/image_4.jpg'),
  image5: require('../assets/image_5.jpg'),
  image6: require('../assets/image_6.jpg'),
};

import DropDownPicker from 'react-native-dropdown-picker';

export default class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {
      previewImage: 'image1',
      dropDownHeight: '',
    };
  }
  render() {
    return (
      <KeyboardAvoidingView
        behaviour={'height'}
        style={{
          flex: 1,
        }}>
        <ScrollView
          style={{
            flex: 0.9,
            backgroundColor:'skyblue',
            borderRadius:10
          }}>
          <Text
          style={{
            alignItems:'center',
            alignSelf:'center'
          }}
          >createPost screen</Text>

          <Image
            source={images[this.state.previewImage]}
            style={{
              width: '100%',
              height: 200,
              alignSelf: 'center',
            }}></Image>

          <DropDownPicker
            style={{
              backgroundColor: 'green',
            }}
            itemStyle={{
              justifyContent: 'flex-start',
              backgroundColor:'green',
              borderRadius:10,
              opacity:'50%',
              
            }}
            containerStyle={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'white',
            }}
            items={[
              { label: 'Image 1', value: 'image1' },
              { label: 'Image 2', value: 'image2' },
              { label: 'Image 3', value: 'image3' },
              { label: 'Image 4', value: 'image4' },
              { label: 'Image 5', value: 'image5' },
              { label: 'Image 6', value: 'image6' },
            ]}

           
            defaultValue={this.state.previewImage}
            onChangeItem={(image) => {
              this.setState({
                previewImage: image.value,
              });
            }}></DropDownPicker>
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: 'black',
                marginTop: 10,
                borderRadius: 10,
                color: 'black',
                paddingLeft: 10,
              }}
              onChangeText={(caption) => {
                this.setState({
                  caption,
                });
              }}
              placeholder={'Caption'}
              placeholderTextColor={'black'}></TextInput>
          
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
