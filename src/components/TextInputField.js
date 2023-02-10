import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { moderateScale } from 'react-native-size-matters'
import Colors from '../constant/Colors'

const TextInputField = ({label,placeholder,keyboardType}) => {
    const [focus, setFocus] = useState(false)
    let customStyle  = focus ? styles.borderSTyle :styles.inputStyle
  return (
    <View style={styles.container}>
    <Text style={styles.inpLabel}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={customStyle}
        placeholderTextColor={Colors.para}
        keyboardType={keyboardType}
        onFocus={() => setFocus(true)}
      />
    </View>
  )
}

export default TextInputField

const styles = StyleSheet.create({
    container:{
        marginBottom:moderateScale(25)
    },
    inpLabel:{
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.black,
        marginBottom:moderateScale(5)
    },
    inputStyle:{
        paddingHorizontal:moderateScale(15),
        paddingVertical:moderateScale(15),
        borderRadius:15,
        backgroundColor:Colors.white,
        fontFamily: 'Montserrat-SemiBold',
        fontSize:14
    },
    borderSTyle:{
        paddingHorizontal:moderateScale(15),
        paddingVertical:moderateScale(15),
        borderRadius:15,
        backgroundColor:Colors.white,
        fontFamily: 'Montserrat-SemiBold',
        fontSize:14,
        borderColor:Colors.primary,
        borderWidth:1
    }
})