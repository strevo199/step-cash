import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES} from '../../contants/theme';
import {back, disableEye, eye} from '../../contants/icons';
import {steplogo} from '../../contants/images';

export const Signup: FC<{navigation: any}> = ({navigation}) => {
  const [showPassword, setshowPassword] = useState(true);

  const renderBotton = () => {
    return (
      <View
        style={{
          margin: SIZES.padding * 2,
        }}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius / 1.5,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderForm = () => {
    return (
      <View>
        <View
          style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding * 2,
          }}>
          <Text style={{...FONTS.body3, color: COLORS.white}}>Full Name:</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Enter Full Name"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
        <View
          style={{
            marginTop: SIZES.padding * 2,
            marginHorizontal: SIZES.padding * 2,
          }}>
          <Text style={{...FONTS.body3, color: COLORS.white}}>
            Phone Number:
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Enter Phone Number"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            keyboardType="numeric"
          />
        </View>

        <View
          style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding * 2,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>Password</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Enter password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={showPassword}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={showPassword ? disableEye : eye}
              style={{
                tintColor: COLORS.white,
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderLogo = () => {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={steplogo}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
          }}
        />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop:
            Platform.OS === 'ios' ? SIZES.padding * 6 : SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 2,
        }}
        onPress={() => console.log('Sign Up')}>
        <Image
          source={back}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.white,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.white,
            ...FONTS.h4,
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderBotton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});
