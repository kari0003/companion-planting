/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import plants from './assets/plants.json';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={styles.table}>
          <View style={styles.header}>
            <Text style={styles.cell}>Név</Text>
            <Text style={styles.cell}>Fajta</Text>
            <Text style={styles.cell}>Család</Text>
            <Text style={styles.cell}>Feladat</Text>
          </View>
          {plants
            .map(p => {
              return {key: p[0], vals: p};
            })
            .map((plant, i) => (
              <View
                key={plant.key}
                style={{
                  ...styles.row,
                  backgroundColor: i % 2 ? '#efefef' : '#ffffff',
                }}>
                <View style={styles.cell}>
                  <Text style={{fontWeight: 'bold'}}>{plant.vals[0]}</Text>
                  <Text style={{fontSize: 11}}>{plant.vals[1]}</Text>
                </View>

                <Text style={styles.cell}>{plant.vals[2]}</Text>
                <Text style={styles.cell}>{plant.vals[3]}</Text>
                <Text style={styles.cell}>{plant.vals[4]}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  table: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginTop: 8,
  },
  row: {
    flex: 1,
    paddingTop: 8,
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    paddingTop: 8,
    flexDirection: 'row',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    marginLeft: 16,
    flexDirection: 'column',
  },
});

export default App;
