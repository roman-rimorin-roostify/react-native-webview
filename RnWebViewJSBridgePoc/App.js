import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

const URL = 'http://localhost:3000/'

const App = () => {

  const runFirst = `
    window.ThirdPartyWVToNativeChaseJSBridgeHandler = {
      getPDFDocument: function(obj){
        alert(obj.url);
      }
    }
  `

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView 
          source={{ uri: URL }}
          onLoad={console.log('Loaded')}
          javaScriptEnabled={true}
          injectedJavaScript={runFirst}
        />
      </View>
    </View>
  )
}

export default App