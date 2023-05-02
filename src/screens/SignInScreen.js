import { StyleSheet, Image, View, Keyboard } from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useState, useRef } from 'react';
import Button from '../components/Button';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(email, password);
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image source={require('../../assets/main.png')} style={styles.image} />
        <Input
          title={'Email'}
          placeholder={'email@example.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          value={email}
          onChangeText={(email) => setEmail(email.trim())}
          iconName={IconNames.EMAIL}
        />
        {/* When passing the 'secureTextEntry' key without a value, it defaults to true  */}
        <Input
          ref={passwordRef}
          title={'Password'}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password.trim())}
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={onSubmit} />
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default SignInScreen;
