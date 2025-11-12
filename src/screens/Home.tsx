import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";


export function Home() {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
        <>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('details', { rate: 5 })}></Button>
            <Button title="Set User Name" onPress={() => navigation.navigate('setUserName')}></Button>
        </>
    )
}