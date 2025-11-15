import { StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/Theme";

type IHeaderProps = {
    name: string | undefined;
}

export function Header({ name }: IHeaderProps) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Olá,</Text>
            <Text style={styles.headerBoldText}>{!name ? 'Seu nome é' : `${name}!`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        gap: 8,
        padding: 16,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: theme.fonts.size.title,
        fontFamily: theme.family.regular

    },
    headerBoldText: {
        color: theme.colors.primary,
        fontSize: theme.fonts.size.title,
        fontFamily: theme.family.bold
    }
});