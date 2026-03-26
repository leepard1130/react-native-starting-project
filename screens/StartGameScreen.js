import { TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Button 1</PrimaryButton>
            <PrimaryButton>Button 2</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;