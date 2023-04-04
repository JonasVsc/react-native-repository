
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

//COMPONENTS
import Button from './src/components/Button';
import Display from './src/components/Display';


//Initial

export default () => {
  [displayValue, setDisplayValue] = useState('0')


  const addDigit = (n) => {
    setDisplayValue(n)
  }

  const clearMemory = () => {
    displayValue = setDisplayValue('0')
  }

  const setOperation = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.buttons}>
        <Button label={"AC"} triple onClick={clearMemory}/>
        <Button label={"/"} operation onClick={setOperation}/>
        <Button label={"7"}  onClick={addDigit}/>
        <Button label={"8"}  onClick={addDigit}/>
        <Button label={"9"}  onClick={addDigit}/>
        <Button label={"*"} operation onClick={setOperation}/>
        <Button label={"4"}  onClick={addDigit}/>
        <Button label={"5"}  onClick={addDigit}/>
        <Button label={"6"}  onClick={addDigit}/>
        <Button label={"+"} operation onClick={setOperation}/>
        <Button label={"1"}  onClick={addDigit}/>
        <Button label={"2"}  onClick={addDigit}/>
        <Button label={"3"}  onClick={addDigit}/>
        <Button label={"+"} operation onClick={setOperation}/>
        <Button label={"0"}  onClick={addDigit}/>
        <Button label={"."}  onClick={addDigit}/>
        <Button label={"="} operation onClick={setOperation}/>

        <Button label={"1"}/>
        
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }


})

