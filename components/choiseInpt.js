import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const GenderInput = ({ onSelect }) => {
  const [selectedGender, setSelectedGender] = useState('Male');
  const [showOptions, setShowOptions] = useState(false);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    onSelect(gender);
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.genderButton} onPress={() => setShowOptions(true)}>
        <Text style={styles.genderText}>{selectedGender || 'Select Gender'}</Text>
      </TouchableOpacity>

      <Modal visible={showOptions} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.option} onPress={() => handleGenderSelect('Male')}>
              <Text style={{fontFamily:'regular' }}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleGenderSelect('Female')}>
              <Text style={{fontFamily:'regular' }}>Female</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowOptions(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  genderButton: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#D9D9D9',
    backgroundColor: '#FFF',
    marginLeft:9,
    marginRight:9,
    padding:15,
    fontSize:18,
    
  },
  genderText: {
    
    color: '#333', fontFamily:'bold' 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: 'blue', fontFamily:'regular' 
  },
});

export default GenderInput;
