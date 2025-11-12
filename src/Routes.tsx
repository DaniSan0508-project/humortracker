import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Detail } from "./screens/Detail";
import { SetUserName } from "./screens/SetUserName";
import { AppStackParamList } from "./navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";



const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }} screenLayout={({ children }) => <SafeAreaView>{children}</SafeAreaView>}>
                <Stack.Screen name="home" component={Home} />
                <Stack.Group
                    screenOptions={{
                        presentation: 'formSheet',
                        headerShown: false,
                        sheetCornerRadius: 24,
                    }}
                >
                    <Stack.Screen name="details" component={Detail} options={{
                        sheetAllowedDetents: [0.5, 0.95]

                    }} />
                    <Stack.Screen name="setUserName" component={SetUserName} options={{
                        sheetAllowedDetents: [0.4, 0.6]
                    }} />
                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export type TNavigationScreenProps = NativeStackNavigationProp<AppStackParamList>;