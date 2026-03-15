import { Assets } from "@react-navigation/elements";
import { url } from "node:inspector";
import { Text, View, back} from "react-native";

export default function Index(){
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
            <Text style = {{ fontSize: 20, fontWeight: 'bold'}}>Hello World</Text>    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});