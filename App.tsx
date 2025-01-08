
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import moment from 'moment';
import {TimelineList} from './src/feature/timelineList';
import { MeetingRoomDetails } from './src/types/meetingRoom';
import { Header } from './src/components/Header';
import { MeetingInfo } from './src/components/MeetingInfo';

const meetingRoomDetails: MeetingRoomDetails = {
  roomId: 'G.307',
  roomName: 'Mohammed Ali',
  roomLocation: 'G.307',
  roomCapacity: 'G.307',
  organizer: 'Ahmed Mohsen',
  attendees: ['Omar Khairy', 'Adham Abouelela', 'Youmna Osama'],
};

function App(): React.JSX.Element {
  const [time, setTime] = useState(moment().format('HH:mm'));
  const dateString = moment().format('D MMMM YYYY');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().format('HH:mm'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={StyleSheet.absoluteFillObject}
        resizeMode="contain"
        source={{
          uri: 'https://wpassets.brainstation.io/app/uploads/2017/12/13095816/Deloitte.jpg',
        }}
      />
      <Header dateString={dateString} time={time} />
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <MeetingInfo meetingDetails={meetingRoomDetails} />
        </View>
        <View style={styles.middleSection} />
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
    backgroundColor: 'black',
    padding: 24,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSection: {
    flex: 1,
  },
  middleSection: {
    flex: 1.6,
  },
  rightSection: {
    flex: 0.5,
  },
});

export default App;
