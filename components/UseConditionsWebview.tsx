import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import React from 'react';

const UseConditionsWebview = () => {
  return (
    <View className="w-full h-full">
      <WebView
        source={{
          uri: 'https://doc-hosting.flycricket.io/vpn3001-terms-of-use/b02f844e-a7ae-4628-ae00-55c9304484a4/terms',
        }}
      />
    </View>
  );
};

export default UseConditionsWebview;
