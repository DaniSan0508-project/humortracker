import { Text, TouchableOpacity, View } from "react-native";

interface IMyButtonProps {
    order: number;
    children?: React.ReactNode;
    onPress?: () => void;
}

export function MyButton(props: IMyButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                <Text>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}