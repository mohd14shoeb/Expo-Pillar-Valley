// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimeAgo from '../components/TimeAgo';

export default class ProfileMetaDataView extends React.Component {
  render() {
    const { name, createdAt } = this.props;
    let _name = name || '';
    if (typeof name === 'string') {
      _name = _name.trim();
    }
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{_name}</Text>
        <TimeAgo subtext="Created ">{createdAt}</TimeAgo>
        {false && <Text style={styles.subtitle}>Plays Nitro Roll, Sunset Cyberspace, and Pillar Valley</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
    maxWidth: '80%',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
