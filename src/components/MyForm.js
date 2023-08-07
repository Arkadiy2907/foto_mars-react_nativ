import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik, Field } from 'formik';

const MyForm = ({ pressHandler }) => {
  return (
    <Formik
      initialValues={{ camera: 'yes', date: '18.10.2021' }}
      onSubmit={(values) => pressHandler(values)}
    >
      {(props) => (
        <View>
          <Text style={{ paddingLeft: 10 }}>Rover Camera</Text>
          <View style={styles.field}>
            <Field
              name="camera"
              component={Picker}
              onValueChange={props.handleChange('camera')}
              selectedValue={props.values.camera}
            >
              <Picker.Item label="Front Hazard Avoidance Camera" value="FHAZ" key={1} />
              <Picker.Item label="Rear Hazard Avoidance Camera" value="RHAZ" key={2} />
              <Picker.Item label="Mast Camera" value="MAST" key={3} />
              <Picker.Item label="Chemistry and Camera Complex" value="CHEMCAM" key={4} />
              <Picker.Item label="Mars Hand Lens Imager" value="MAHLI" key={5} />
              <Picker.Item label="Mars Descent Imager" value="MARDI" key={6} />
              <Picker.Item label="Navigation Camera" value="NAVCAM" key={7} />
              <Picker.Item label="Panoramic Camera" value="PANCAM" key={8} />
              <Picker.Item label="Miniature Thermal Emission Spectrometer (Mini-TES)" value="MINITES" key={8} />
            </Field>
          </View>
          <Text style={{ paddingLeft: 10 }}>Date</Text>
          <View style={styles.field}>
            <TextInput
              style={styles.fieldDate}
              name="date"
              value={props.values.date}
              onChangeText={props.handleChange('date')}
              placeholder='введите дату по шаблону 31.12.2001'
              keyboardType='numeric'
            >
            </TextInput>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn}
            onPress={props.handleSubmit}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>
              Explore
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  field: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    marginBottom: 25,

  },
  fieldDate: {
    padding: 12,
  },
  btn: {
    backgroundColor: '#BF2E0E',
    color: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
});

export default MyForm;