
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TimelineList} from './src/feature/timelineList';
import { MeetingRoomDetails } from './src/types/meetingRoom';
import { Header } from './src/components/Header';
import { MeetingInfo } from './src/components/MeetingInfo';
import { Colors } from './src/theme/colors';

const meetingRoomDetails: MeetingRoomDetails = {
  roomId: 'G.307',
  roomName: 'Mohammed Ali',
  roomLocation: 'G.307',
  roomCapacity: 'G.307',
  organizer: 'Ahmed Mohsen',
  attendees: ['Omar Khairy', 'Adham Abouelela', 'Youmna Osama'],
};

function App(): React.JSX.Element {


  return (
    <View style={styles.container}>
      <Image
        style={StyleSheet.absoluteFillObject}
        resizeMode="contain"
        source={{
          uri: 'https://wpassets.brainstation.io/app/uploads/2017/12/13095816/Deloitte.jpg',
        }}
      />
      <Header />
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <MeetingInfo meetingDetails={meetingRoomDetails} />
        </View>
        <View style={styles.rightSection}>
          <TimelineList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    padding: 24,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSection: {
    flex: 0.80,
  },
  rightSection: {
    flex: 0.20,
  },
});

export default App;
