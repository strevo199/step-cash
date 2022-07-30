import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {FC} from 'react';
import {RNCamera} from 'react-native-camera';
import {COLORS, FONTS, SIZES} from '../../contants/theme';
import {useCamera} from 'react-native-camera-hooks';
import {barcode, close, focus, infro, phone} from '../../contants/icons';

export const Scan: FC<{navigation: any}> = ({navigation}) => {
  const [{cameraRef, takePicture}] = useCamera(null);

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        <TouchableOpacity
          style={{
            width: 45,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('MainHome')}>
          <Image
            source={close}
            style={{
              height: 25,
              tintColor: COLORS.white,
              width: 25,
            }}
          />
        </TouchableOpacity>

        <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style ={{...FONTS.body3, color: COLORS.white}}>Scan for Payment</Text>
        </View>

        <TouchableOpacity
            style ={{
                height: 45,
                width: 45,
                backgroundColor: COLORS.green,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress ={() => console.log('Infro')}
        >
            <Image
                source={infro}
                resizeMode ='contain'
                style ={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.white
                }}
            />
        </TouchableOpacity>
      </View>
    );
  };

  const renderPaymentMethod =() => {
    return(
        <View style ={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            borderTopLeftRadius:SIZES.radius,
            borderTopRightRadius: SIZES.radius,
            padding: SIZES.padding *  2,
            backgroundColor: COLORS.white
        }}>
            <Text style ={{...FONTS.h4}}>Another payment methods</Text>
            <View
                style ={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding * 2
                }}
            >
                <TouchableOpacity
                    style ={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress ={() => console.log("Phone Number")}
                >
                    <View
                        style = {{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.lightpurple,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={phone}
                            resizeMode ={'cover'}
                            style ={{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.purple
                            }}
                        />
                    </View>
                        <Text style ={{marginLeft: SIZES.padding, ...FONTS.body4}}>Phone Number</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style ={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: SIZES.padding * 2
                  }}
                  onPress={() => console.log('Barcode')}
                >
                    <View
                        style ={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.lightGreen,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={ barcode}
                            resizeMode = 'cover'
                            style ={{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.primary
                            }}
                        />
                    </View>
                    <Text style ={{marginLeft: SIZES.padding, ...FONTS.body4}}>Barcode</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }

  const renderScanFocus = () => {
    return (
        <View
            style ={{ 
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image
                source={focus}
                resizeMode ='stretch'
                style ={{
                    marginTop: "-50%",
                    tintColor: COLORS.white,
                    width: 300,
                    height: 350
                }}
            />
        </View>
    )
  }

  const onBarCodeRead = (result) => {
    console.log(result);
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.transparent}}>
      <RNCamera
        ref={cameraRef}
        style={{flex: 1}}
        captureAudio={false}
        onBarCodeRead ={onBarCodeRead}
        flashMode={RNCamera.Constants.FlashMode.off}
        type={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Premission to use camera',
          message: 'Camera is required for barcode scaning',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        }}>
        {renderHeader()}
        {renderScanFocus()}
        {renderPaymentMethod()}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({});
