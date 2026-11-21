import React from 'react';
import {
  StyleSheet,
  Text, View, SectionList, TouchableOpacity, Image, Button, Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // icon pack, comes with Expo

const cardUrl = (num) =>
    `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${num}-2x.png`;

const datasource = [
  {
    title: 'Fire',
    icon: 'fire',
    bgColor: '#F08030',
    textColor: '#FFFFFF',
    data: [
      { key: 'Charmander', num: 4 },
      { key: 'Charmeleon', num: 5 },
      { key: 'Vulpix', num: 37 },
    ],
  },
  {
    title: 'Water',
    icon: 'water',
    bgColor: '#6890F0',
    textColor: '#FFFFFF',
    data: [
      { key: 'Squirtle', num: 7 },
      { key: 'Wartortle', num: 8 },
      { key: 'Psyduck', num: 54 },
    ],
  },
  {
    title: 'Lightning',
    icon: 'lightning-bolt',
    bgColor: '#F8D030',
    textColor: '#000000',
    data: [
      { key: 'Pikachu', num: 25 },
      { key: 'Voltorb', num: 100 },
    ],
  },
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity
          style={styles.itemRow}
          onPress={() => Alert.alert(item.key, `Card #${item.num}`)} // makes row clickable
      >
        <Text style={styles.itemName}>{item.key}</Text>
        <Image source={{ uri: cardUrl(item.num) }} style={styles.cardImage} />
      </TouchableOpacity>
  );
};

const renderSectionHeader = ({ section: { title, icon, bgColor, textColor } }) => (
    <View style={[styles.header, { backgroundColor: bgColor }]}>
      <MaterialCommunityIcons name={icon} size={26} color={textColor} />
      <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
    </View>
);


const App = () => {
  return (
      <View style={styles.container}>
        {/* Requirement A: Add button ABOVE the list (used next lesson) */}
        <View style={styles.buttonWrap}>
          <Button title="Add Pokemon" onPress={() => {}} />
        </View>

        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            contentContainerStyle={styles.listPadding}
        />
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,               // take whole screen
    paddingTop: 50,        // push below phone status bar
    backgroundColor: '#F2F2F2',
  },
  buttonWrap: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  listPadding: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',  // icon and title side by side
    alignItems: 'center',  // vertically centred
    justifyContent: 'center',
    padding: 8,
    marginTop: 10,
    borderRadius: 6,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  itemRow: {
    flexDirection: 'row',              // name + image in one row
    justifyContent: 'space-between',   // name pushed left, image pushed right
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    marginTop: 6,
    borderRadius: 6,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 120,            // card ratio ~ 5:7
    height: 167,
    resizeMode: 'contain',
  },
});

export default App;
