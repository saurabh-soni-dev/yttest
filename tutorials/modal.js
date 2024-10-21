import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

const transparent = 'rgba(0,0,0,0.5)';

const ModalExample = () => {
  const [openModal, setOpenModal] = React.useState(false);

  function renderModal() {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: transparent,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              // height: '100%',
              borderRadius: 10,
            }}>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <Text style={{color: 'black'}}>close</Text>
            </TouchableOpacity>
            <Text style={{color: 'red', fontSize: 18, marginTop: 15}}>
              like subscribe share
            </Text>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 40,
          textTransform: 'capitalize',
          textAlign: 'center',
          fontWeight: '600',
          color: 'black',
        }}>
        how to make responsive modal
      </Text>

      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: 'yellow',
          borderRadius: 8,
          padding: 10,
        }}
        onPress={() => setOpenModal(true)}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
          }}>
          Open Modal
        </Text>
      </TouchableOpacity>
      {renderModal()}
    </View>
  );
};

export default ModalExample;
