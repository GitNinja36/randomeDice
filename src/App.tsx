import React, { JSX, useState } from "react";
import { PropsWithChildren } from "react";
import { 
  Image, 
  ImageSourcePropType, 
  Pressable,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne  from '../assets/one.png';
import DiceTwo  from '../assets/two.png';
import DiceThree  from '../assets/three.png';
import DiceFour  from '../assets/four.png';
import DiceFive  from '../assets/five.png';
import DiceSix  from '../assets/six.png';

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl} : DiceProps) : JSX.Element =>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App() : JSX.Element{ 
  const[diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    const randImage = Math.floor(Math.random() * 6);

    switch (randImage) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return(
      <View style={styles.container}>
        <Dice imageUrl={diceImage}/>
        <Pressable
            onPress={rollDiceOnTap}
        >
          <Text style={styles.rollDiceBtnText}>Roll a dice</Text>
        </Pressable>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent :"center",
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop : 20  
  },
});

export default App;