import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik, Field } from 'formik';
import validationSchema from './ValidationSchema';
import { varCam } from '../helper/var';
import FontWrapper from '../components/FontWrapper';

const MyForm = ({ pressHandler }) => {
  return (
    <Formik
      initialValues={{ camera: 'FHAZ', date: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => pressHandler(values)}
    >
      {(props) => (
        <View>
          <FontWrapper>
            <Text style={styles.titleFild}>Rover Camera</Text>
          </FontWrapper>
          <View style={styles.field}>
            <Field
              name="camera"
              component={Picker}
              onValueChange={props.handleChange('camera')}
              selectedValue={props.values.camera}
              dropdownIconColor="#FFFFFF"
            >
              {varCam?.map(el =>
                <Picker.Item label={el.label} value={el.value} key={el.id}>
                  <FontWrapper>
                    <Text style={styles.textPicker}>{el.label}</Text>
                  </FontWrapper>
                </Picker.Item>
              )}
            </Field>
            <Image
              source={require('../../assets/icons/dropdown.png')}
              style={styles.arrowIconPicker}
            />
          </View>
          <FontWrapper>
            <Text style={styles.titleFild}>Date</Text>
          </FontWrapper>
          <View style={styles.fieldDate}>
            <TextInput
              name="date"
              value={props.values.date}
              onChangeText={props.handleChange('date')}
              placeholder='введите дату по шаблону дд.мм.гггг'
              keyboardType='numeric'
            />
            <Image
              source={require('../../assets/icons/calendar.png')}
              style={styles.calendarIcon}
            />
            {props.errors.date && <Text style={styles.errorText}>{props.errors.date}</Text>}
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btn}
            onPress={props.handleSubmit}
          >
            <FontWrapper>
              <Text style={styles.btnText}>
                Explore
              </Text>
            </FontWrapper>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  field: {
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    marginBottom: 25,
    position: 'relative',
  },
  titleFild: {
    paddingLeft: 10,
    fontFamily: 'dosis-light',
    fontSize: 16,
  },
  arrowIconPicker: {
    position: 'absolute',
    width: 20,
    height: 20,
    right: 20,
    top: 17,
  },
  calendarIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textPicker: {
    fontFamily: 'dosis-light',
    fontSize: 17,
  },
  fieldDate: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    marginBottom: 25,
    position: 'relative'
  },
  btn: {
    backgroundColor: '#BF2E0E',
    color: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'dosis-bold',
    fontSize: 17,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  errorText: {
    position: 'absolute',
    bottom: 5,
    left: 20,
    color: 'red',
    fontSize: 10,
    marginTop: 5,
  },
});

export default MyForm;