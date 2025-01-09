import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../common/Text';
import { SvgPeople, SvgScreen, SvgDesk } from '../../assets/icons';
import { Colors } from '../theme/colors';
import moment from 'moment';

export const Header = () => {

  const [time, setTime] = useState(moment().format('HH:mm'));
  const dateString = moment().format('D MMMM YYYY');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().format('HH:mm'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.dateText} variant="bold">
        {dateString}
      </Text>
      <View style={styles.statsContainer}>
        <RoomStat icon={<SvgPeople />} value="5" />
        <RoomStat icon={<SvgScreen />} value="1" />
        <RoomStat icon={<SvgDesk />} value="2" />
      </View>
      <Text style={styles.timeText} variant="bold">
        {time}
      </Text>
    </View>
  )
}

const RoomStat = ({ icon, value }: { icon: React.ReactNode; value: string }) => (
  <View style={styles.statItem}>
    {icon}
    <Text variant="medium" style={styles.statValue}>
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.5,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 30,
    color: Colors.WHITE,
    marginLeft: 20,
  },
  dateText: {
    fontSize: 30,
    color: Colors.WHITE,
  },
  timeText: {
    fontSize: 30,
    color: Colors.WHITE,
  },
});
