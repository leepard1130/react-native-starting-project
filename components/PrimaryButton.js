import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colour from '../constants/Colour';

function PrimaryButton({children, onPress}){

  function pressHandler(){
    console.log('Pressed!');
  }

  return (
    <View style={styles.buttonContiner}>
      <Pressable 
        onPress={onPress}
        android_ripple={{color: Colour.primary800}}
        style={({pressed}) => pressed ? [styles.buttonInnerContiner, styles.pressed] : styles.buttonInnerContiner }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
  },
  buttonInnerContiner: {
    backgroundColor: Colour.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevatino: 2 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75
  }
});