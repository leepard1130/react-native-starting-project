import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({children}){

  function pressHandler(){
    console.log('Pressed!');
  }

  return (
    <View style={styles.buttonContiner}>
      <Pressable 
        onPress={pressHandler}
        android_ripple={{color: '#640233'}}
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
    backgroundColor: '#72063c',
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