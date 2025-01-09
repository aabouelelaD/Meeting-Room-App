import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { MeetingRoomDetails } from '../types/meetingRoom';
import { Colors } from '../theme/colors';

interface MeetingInfoProps {
  meetingDetails?: MeetingRoomDetails;
}

export const MeetingInfo = ({ meetingDetails }: MeetingInfoProps) => {

  const roomName = meetingDetails?.roomName

  return (
  <View style={styles.container}>
    <View style={styles.mainContent}>
      <Text style={styles.roomNumber} variant="bold">
        {meetingDetails?.roomId}
      </Text>
      <Text style={styles.roomName} variant="bold" numberOfLines={2}>
        {`${roomName?.split(' ')[0]}\n${roomName.split(' ')[1]
          }`}
      </Text>
      <View style={styles.divider} />
      <Text style={styles.meetingStatus} variant="bold">
        Meeting in Progress
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Check-in" onPress={() => { }} />
      </View>
    </View>
    <AttendeesList
      organizer={meetingDetails?.organizer}
      attendees={meetingDetails?.attendees}
    />
  </View>
  )
};

const AttendeesList = ({ organizer, attendees }: { organizer: string; attendees: string[] }) => (
  <View style={styles.attendeesContainer}>
    <Text style={styles.organizerText} variant="medium">
      Organizer: {organizer}
    </Text>
    <View style={styles.attendeesList}>
      <Text style={styles.attendeeItem} variant="medium">
        List of Attendees: {attendees?.toString()}
      </Text>
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
    justifyContent: 'center',
    width: '50%',
  },
  roomNumber: {
    fontSize: 26,
  },
  roomName: {
    fontSize: 60,
    textAlign: 'left',
  },
  divider: {
    width: '70%',
    marginVertical: 10,
    height: 5,
    backgroundColor: Colors.WHITE,
  },
  meetingStatus: {
    fontSize: 25,
    marginTop: 16,
  },
  buttonContainer: {
    width: '60%',
    marginVertical: 20,
  },
  attendeesContainer: {
    justifyContent: 'center',
    marginTop: 50,
  },
  organizerText: {
    fontSize: 18,
  },
  attendeesList: {
    marginTop: 8,
    maxWidth: '75%',
  },
  attendeeItem: {
    fontSize: 18,
    marginVertical: 2,
  },
});
