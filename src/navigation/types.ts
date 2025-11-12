import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from '@react-navigation/native';

export type AppStackParamList = {
    home: undefined;
    details: { rate: number };
    setUserName: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'home'>;
export type DetailScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'details'>;
export type SetUserNameScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'setUserName'>;

export type DetailScreenRouteProp = RouteProp<AppStackParamList, 'details'>;
