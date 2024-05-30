import { StyleSheet , View, Text} from "react-native"



export default function SepLine() {
    return(
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.spR} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center', fontFamily:'regular'  }}>OR</Text>
                        </View>
                        <View style={styles.spL} />
                    </View>
    )
};
const styles= StyleSheet.create({
    spR: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        marginLeft: 40,
    },
    spL: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        marginRight: 40,

    },
})
