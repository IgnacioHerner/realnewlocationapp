import React, { useState } from "react";
import { styles } from "./styles";
import { View, Text, Image, Alert, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import colors from "../../utils/colors";


const ImageSelector = ({onImagePicker}) => {

    const onHandleTakeImage = async() => {
        const isCameraPermissions = await verifyPermissions();
        if(!isCameraPermissions) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.7,
        })

        setPickedUrl(image.uri);

        onImagePicker:(image.uri);
    }; 

    const verifyPermissions = async() => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
                "Permisos insuficientes",
                "Necesitas dar permisos para usar la camara ", [{text: "Ok"}]
            )

            return false;
        }
        return true;
    }

    const [pickedUrl, setPickedUrl] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text style={styles.title}>No hay imagen seleccionada</Text>
                ): (
                    <Image style={styles.image} source={{uri: pickedUrl}} />
                )}
            </View>
            <Button 
                title="Tomar Foto"
                color={colors.primary}
                onPress={onHandleTakeImage}
            />
        </View>
    )
}

export default ImageSelector;