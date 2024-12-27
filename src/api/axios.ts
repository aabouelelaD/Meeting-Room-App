import axios from "axios";
import { Alert } from "react-native";

const instance = axios.create({
    baseURL: 'http://seatapp-loadbalancer-1138902196.eu-west-2.elb.amazonaws.com/api/',
    timeout: 2000,
  });


 // TODO: to be added with login API integration
 // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


  export const getMeetings = async ({startDate, endDate, roomId} : {startDate: string, endDate: string, roomId: string} ) => {
    try {
      const response = await instance.get(`meetingroomreservation/slot?start=${startDate}&end=${endDate}&roomId=${roomId}`);
      return response.data;
    } catch (error) {
      Alert.alert(error || 'Something went wrong please try again !')
      throw error;
    }
  };