import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../common/Text';
import {Button} from '../common/Button';
import {MeetingRoomDetails} from '../types/meetingRoom';
import { Colors } from '../theme/colors';

interface MeetingInfoProps {
  meetingDetails: MeetingRoomDetails;
}

export const MeetingInfo = ({meetingDetails}: MeetingInfoProps) => (
  <View style={styles.container}>
    <View style={styles.mainContent}>
      <Text style={styles.roomNumber} variant="bold">
        {meetingDetails.roomId}
      </Text>
      <Text style={styles.roomName} variant="bold" numberOfLines={2}>
        {`${meetingDetails.roomName.split(' ')[0]}\n${
          meetingDetails.roomName.split(' ')[1]
        }`}
      </Text>
      <View style={styles.divider} />
      <Text style={styles.meetingStatus} variant="bold">
        Meeting in Progress
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Check-in" onPress={() => {}} />
      </View>
    </View>
    <AttendeesList
      organizer={meetingDetails.organizer}
      attendees={meetingDetails.attendees}
    />
  </View>
);

const AttendeesList = ({organizer, attendees}: {organizer: string; attendees: string[]}) => (
  <View style={styles.attendeesContainer}>
    <Text style={styles.organizerText} variant="bold">
      Organizer: {organizer}
    </Text>
    <Text style={styles.attendeesTitle} variant="bold">
      List of Attendees:
    </Text>
    <View style={styles.attendeesList}>
      {attendees.map((attendee, index) => (
        <Text key={index} style={styles.attendeeItem} variant="bold">
          • {attendee}
        </Text>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  roomNumber: {
    fontSize: 26,

  },
  roomName: {
    fontSize: 60,

    textAlign: 'left',
  },
  divider: {
    width: '84%',
    height: 5,
    backgroundColor: Colors.WHITE,
  },
  meetingStatus: {
    fontSize: 32,

    marginTop: 16,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
  attendeesContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  organizerText: {
    fontSize: 20,
  },
  attendeesTitle: {
    fontSize: 18,

    marginTop: 20,
  },
  attendeesList: {
    marginTop: 8,
  },
  attendeeItem: {
    fontSize: 18,

    marginVertical: 2,
  },
});
