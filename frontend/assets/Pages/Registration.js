import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ImageBackground , ScrollView, Dimensions,Button,Pressable,Platform,Alert} from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';


const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date,setDate]=useState(new Date())
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPicker,setShowPicker]=useState(false)
  const [errors, setErrors]= useState('');


  const validateForm = () => {
    const errors = {};

    if (firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }

    if (middleName.trim() === '') {
      errors.middleName = 'Middle name is required';
    }

    if (lastName.trim() === '') {
      errors.lastName = 'Last name is required';
    }
 
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    if (username.trim() === '') {
      errors.username = 'Username is required';
    }

   // if (dateOfBirth.trim() === '') {
   //   errors.dateOfBirth = 'Date of birth is required';
    //}

    if (zipCode.trim() === '') {
      errors.zipCode = 'Zip code is required';
    } 

    if (password.trim() === '') {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }

    if (confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword != password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  //const isValidZipCode = (zipCode) => {
    // Simple zip code validation regex
  //  const zipCodeRegex = /^\d{5}$/;
  //  return zipCodeRegex.test(zipCode);
//  };


  const handleSignUp = async() => {
    validateForm();

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {

    console.log('Iama herm;kjdchjvlsdj ')
    const fullName=firstName+ " "+middleName+ " "+lastName
    console.log(fullName+" "+username+" "+email+" "+dateOfBirth+" "+zipCode+" "+password)
await axios.post('http://localhost:8000/user/signup',{fullName,username,email,dateOfBirth,zipCode,password,confirmPassword})
.then((res)=>{
  console.log('im in handleSignup')
  console.log(res.data.message)
})
.catch((err)=>{
  if(err){
    console.log(err.message)
  }
})

  }
}
  
  

 // const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const toggleDatePicker=()=>{

    setShowPicker(!showPicker)
  }

  const onChange=({type},selectedDate)=>{

    if(type=='set'){
      const currentDate=selectedDate;
      setDate(currentDate)
      console.log(currentDate)

      if (Platform.OS === "andriod"){

        toggleDatePicker();
        setDateOfBirth(currentDate.toDateString());
      }
    }else{
      toggleDatePicker();
    }


  }
 

  return (
    <View style={tw`flex-1`}>
       <ImageBackground source={require('../Images/logo22.jpg')} style={tw`flex-1`} resizeMode="cover">
       <ScrollView contentContainerStyle={tw`justify-center items-center`} style={{ height: windowHeight }}>
      <View style={tw`flex-1 p-4 justify-center`}>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <AntDesign name="arrowleft" size={24} color="white" />
          <TouchableOpacity onPress={() => {}}>
            <Text style={tw`text-white`}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`items-center mb-8`}>
          <Image source={require('../Images/logo-removebg.png')} style={tw`w-32 h-32`} />
        </View>

        <Text style={tw`text-lg text-white font-bold mb-4  text-center`}>Registration</Text>

        <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => {
            setFirstName(text);
           
          }}
        
        />
         {errors.firstName && <Text style={tw`text-red-500 ml-10 mb-2`}>{errors.firstName}</Text>}
         <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="Middle Name"
          value={middleName}
          onChangeText={(text) => 
            {setMiddleName(text);
              
            }}
        />
         {errors.middleName && <Text style={tw`text-red-500 ml-10 mb-2`}>{errors.middleName}</Text>}
         <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => 
            {setLastName(text);
              
            }}
        />
         {errors.lastName && <Text style={tw`text-red-500 ml-10 mb-2`}>{errors.lastName}</Text>}
        <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="Username"
          value={username}
          onChangeText={(text) => 
            {setUserName(text);
              
            }}
        />
         {errors.username && <Text style={tw`text-red-500 ml-10 mb-2`}>{errors.username}</Text>}

        <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="Email"
          value={email}
          onChangeText={(text) => 
            {setEmail(text);
              
            }}
        />
         {errors.email && <Text style={tw`text-red-500 ml-10 mb-2`}>{errors.email}</Text>}

      {!showPicker &&  
      <Pressable
       onPress={toggleDatePicker}
       >
        <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChangeText={(text) => 
            {setDateOfBirth(text);
              
            }}
        
          editable={false}
        />
        
        
         </Pressable>
        }
      
       
      {showPicker && 
        (<DateTimePicker
      mode='date'
      display='spinner'
      value={date}
      onChange={onChange}
      />
      
      )}


       

        <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="Zip Code"
          value={zipCode}
          onChangeText={(text) => 
            {setZipCode(text);
            
            }}
        />
         {errors.zipCode && <Text style={tw`text-red-500 ml-10 mb-2`}>{errors.zipCode}</Text>}


        <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => 
            {setPassword(text);
              
            }}
        />
         {errors.password && <Text style={tw`text-red-500 ml-10 mb-2`}>{errors.password}</Text>}

        <TextInput
          style={tw`w-full h-12 border bg-white border-gray-300 rounded-full w-70 ml-10 px-4 mb-4`}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => 
            {setConfirmPassword(text);
              
            }}
        />
         {errors.confirmPassword && <Text style={tw`text-red-500 ml-10 mb-2`}>{errors.confirmPassword}</Text>}


        <TouchableOpacity style={tw`bg-orange-500 rounded-full h-12 items-center justify-center mb-4 w-70 ml-10`} onPress={handleSignUp}>
          <Text style={tw`text-white font-bold`}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`bg-black rounded-full h-12 items-center justify-center mb-4 w-70 ml-10`} onPress={() => {}}>
          <Text style={tw`text-white font-bold`}>Register Business</Text>
        </TouchableOpacity>

        <View style={tw`border-b border-gray-300 my-8`} />

<TouchableOpacity style={tw`bg-white rounded-full h-12 items-center justify-center mb-4 w-60 ml-15`} onPress={() => {}}>
  <View style={tw`flex-row items-center `}>
    <FontAwesome5 name="google" size={20} color="black" style={tw`mr-2`} />
    <Text style={tw`text-black font-bold`}>Continue with Google</Text>
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
          <Text style={tw`text-sm text-white`}>Already registered? </Text>
          <Text style={tw`text-sm fontbold text-orange-500`}>Login</Text>
        </View>

      </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Registration;
