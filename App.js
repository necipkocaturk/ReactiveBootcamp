import React from 'react'
import {View,Text, SafeAreaView, TextInput, StyleSheet} from 'react-native'

const App = () =>  {
  return(
    <SafeAreaView>
      <View>
        <TextInput
        placeholder='Friday, 15 Dec'
        style={styles.searchBar}
        >
        </TextInput>
      </View>
        <View style={styles.titles}>
        <Text style={styles.bigTitle}>Learn</Text>
        <Text style={styles.littleTitle}>Choose the part of the body</Text>
      </View>
      <View style={[styles.cardView,{backgroundColor:'#eb7662'}]}>
        <Text style={styles.cardBigText}>Head & Face</Text>
        <Text style={styles.cardLittleText}>11 diseases</Text>
      </View>
      <View style={[styles.cardView,{backgroundColor:'#8dc5bc'}]}>
        <Text style={styles.cardBigText}>Back & Neck</Text>
        <Text style={styles.cardLittleText}>11 diseases</Text>
      </View>
      <View style={[styles.cardView,{backgroundColor:'#f3982f'}]}>
        <Text style={styles.cardBigText}>Elbow & Shoulders</Text>
        <Text style={styles.cardLittleText}>12 diseases</Text>
      </View>
      <View style={[styles.cardView,{backgroundColor:'#327389'}]}>
        <Text style={styles.cardBigText}>Hand & Arm</Text>
        <Text style={styles.cardLittleText}>2 diseases</Text>
      </View>
    </SafeAreaView>
  );
}


export default App;



const styles = StyleSheet.create({
  searchBar: {
    padding:20,

  },
  titles:{
    padding:20,
  },
  bigTitle:{
    fontSize:40,
    fontWeight:'bold'
  },
  littleTitle:{
    top:10,
    fontSize:20,
  },
  cardView:{
    top:30,
    padding:30,
    borderRadius:20,
    margin:15,
    marginBottom:0
  },
  cardBigText:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  cardLittleText:{
    fontWeight:'bold',
    color:'white'
  }
})