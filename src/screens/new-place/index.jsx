import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { styles } from "./styles";
import colors from '../../utils/colors'
import { useDispatch } from "react-redux";
import { ImageSelector } from '../../components/'
import { addPlace } from "../../store/place.slice";
import { useState } from "react";

const NewPlace = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(addPlace({title}))
    navigation.navigate('Places')
  }

  const onHandleChange = (text) => {
    setTitle(text)
  }

  const onImagePicker = (uri) => {
    console.warn('uri', uri)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput onChangeText={onHandleChange} style={styles.input} placeholder='Escribe el lugar'/>
        <ImageSelector onImagePicker={onImagePicker}/>
        <Button
          color={colors.primary}
          title='Guardar direccion'
          onPress={onHandleSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
