import { RouteProp, useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { DetailScreenRouteProp } from "../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";



export function Detail() {
    const { params } = useRoute<DetailScreenRouteProp>();
    return (
        <>
            <Text>Detail Screen {params.rate}</Text>
        </>
    )
}