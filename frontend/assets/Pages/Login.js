import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('UserName:', username);
    console.log('Password:', password);

    setUserName('');
    setPassword('');
  };

  return (
    <View style={tw`flex-1`}>

        <View style={tw`flex-1 p-4 justify-center`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <TouchableOpacity onPress={() => {}}>
              <Text style={tw`text-blue-500`}>Skip</Text>
            </TouchableOpacity>
          </View>

          <View style={tw`items-center mb-8`}>
            <Image source={require('../Images/logo-removebg.png')} style={tw`w-32 h-32`} />
          </View>

          <Text style={tw`text-lg font-bold mb-4 text-center`}>Login</Text>

          <TextInput
            style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity style={tw`bg-orange-500 rounded-full h-12 items-center justify-center mb-4 w-70 ml-10`} onPress={handleLogin}>
            <Text style={tw`text-white font-bold`}>Login</Text>
          </TouchableOpacity>

          <View style={tw`border-b border-gray-300 my-8`} />

          <TouchableOpacity style={tw`bg-orange-500 rounded-full h-12 items-center justify-center mb-4 w-60 ml-15`} onPress={() => {}}>
            <View style={tw`flex-row items-center `}>
              <FontAwesome5 name="google" size={20} color="black" style={tw`mr-2`} />
              <Text style={tw`text-white font-bold`}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={tw`bg-blue-500 rounded-full h-12 items-center justify-center mb-4 w-60 ml-15`} onPress={() => {}}>
            <View style={tw`flex-row items-center`}>
              <FontAwesome5 name="facebook" size={20} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white font-bold`}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={tw`bg-black rounded-full h-12 items-center justify-center mb-4 w-60 ml-15`} onPress={() => {}}>
            <View style={tw`flex-row items-center justify-center`}>
              <FontAwesome5 name="apple" size={20} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white font-bold`}>Continue with Apple</Text>
            </View>
          </TouchableOpacity>

          <View style={tw`flex-row justify-center mt-8`}>
            <Text style={tw`text-sm`}>Don't have an account? </Text>
            <Text style={tw`text-sm font-bold text-yellow-500`}>Sign up</Text>
          </View>
        </View>
    </View>
  );
};

export default Login;