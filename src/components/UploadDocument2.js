import React, { useState } from 'react'
import { Button, Text, TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  Platform,
  Image
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import * as IntentLauncher from "expo-intent-launcher";
const LicenceId2 = ({navigation}) => {
    const [document, setDocument] = useState(null);
    const [proofOfResidence, setProofOfResidence] = useState(null);
  handleBackButton = () => {
  
    navigation.navigate("Date");
  };
  handleContinueButton = () => {
    // Handle form submission and navigation to the next page (Renewal Residence) here.
    navigation.navigate("pay2");
    // display file in console
    console.log(document);
    console.log(proofOfResidence)
  }
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "*/*" });
    if (result.type === "success") {
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Check if the file is an image for preview purposes
      if (result.mimeType && result.mimeType.startsWith("image/")) {
        setDocument({ uri: localUri, name: filename, type: result.mimeType });
      } else {
        // For non-image files, you might want to handle them differently
        // or just store the document details for use in a custom preview component
        setDocument({
          uri: localUri,
          name: filename,
          type: result.mimeType,
          isImage: false,
        });
      }
    }
  };
   const pickDocumentProff = async () => {
     let result = await DocumentPicker.getDocumentAsync({ type: "*/*" });
     if (result.type === "success") {
       let localUri = result.uri;
       let filename = localUri.split("/").pop();

       // Check if the file is an image for preview purposes
       if (result.mimeType && result.mimeType.startsWith("image/")) {
         setProofOfResidence({
           uri: localUri,
           name: filename,
           type: result.mimeType,
         });
       } else {
         // For non-image files, you might want to handle them differently
         // or just store the document details for use in a custom preview component
         setProofOfResidence({
           uri: localUri,
           name: filename,
           type: result.mimeType,
           isImage: false,
         });
       }
     }
   };
const openDocument = async (fileUri) => {
  if (Platform.OS === "android") {
    // For Android, use IntentLauncher to open the file with the default app
    await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
      data: fileUri,
      flags: 1,
    });
  } else {
    // For iOS, you can simply use the Linking API
    Linking.openURL(fileUri);
  }
};

const renderPreview = () => {
  // If there's a document and it's an image, display an image preview
  if (document && document.isImage) {
    return (
      <Image
        source={{ uri: document.uri }}
        style={{ width: 100, height: 100 }}
      />
    );
  } else if (document) {
    // For non-image documents, provide a button or link to open them
    return (
      <TouchableOpacity onPress={() => openDocument(document.uri)}>
        <Text>Open {document.name}</Text>
      </TouchableOpacity>
    );
  }

  return null;
};

const renderPreviewProof = () => {
  // If there's a document and it's an image, display an image preview
  if (proofOfResidence && proofOfResidence.isImage) {
    return (
      <Image
        source={{ uri: proofOfResidence.uri }}
        style={{ width: 100, height: 100 }}
      />
    );
  } else if (proofOfResidence) {
    // For non-image documents, provide a button or link to open them
    return (
      <TouchableOpacity onPress={() => openDocument(proofOfResidence.uri)}>
        <Text>Open {proofOfResidence.name}</Text>
      </TouchableOpacity>
    );
  }

  return null;
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: Dimensions.get("window").width - 40,
            padding: 20,
            backgroundColor: "#fff",
            borderRadius: 5,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          }}
        >
          <Text style={{ marginBottom: 20 }}>Upload your ID document</Text>
          <TouchableOpacity style={styles.select} onPress={pickDocumentProff}>
            <Text style={{color: 'white'}}>SELECT DOCUMENT</Text>
          </TouchableOpacity>
          {renderPreview()}
        </View>
        <View
          style={{
            width: Dimensions.get("window").width - 40,
            padding: 20,
            backgroundColor: "#fff",
            borderRadius: 5,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          }}
        >
          <Text style={{ marginBottom: 20 }}>
            Upload your Proof of residence
          </Text>
          <TouchableOpacity style={styles.select} onPress={pickDocumentProff}>
            <Text style={{color: 'white'}}>SELECT DOCUMENT</Text>
          </TouchableOpacity>
          {renderPreviewProof()}
        </View>
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleContinueButton}
          >
            <Text style={styles.buttonText}>Proceed To Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LicenceId2
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  datePicker: {
    width: 350,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
  },
  button: {
    backgroundColor: '#1c2732',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    width: 300
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  select: {
    backgroundColor: '#1c2732',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  }
});