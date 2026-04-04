import { Text, StyleSheet } from 'react-native';
import Colour from '../../constants/Colour';

function InstructionText({children, style}) {
  return(
    <Text style={[styles.instructionText, style]}>{children}</Text>
    
  );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText:{
      fontFamily: 'open-sans',
      color: Colour.accent500,
      fontSize: 24,
  },
});