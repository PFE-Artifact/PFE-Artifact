import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const Profile = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date(1995, 4, 23));
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [country, setCountry] = useState('United States');

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Back Arrow */}
      <TouchableOpacity
        style={tw`absolute top-6 left-4`}
        onPress={() => navigation.goBack()} // Navigate back
      >
        <Image
          // Replace with your back arrow icon
          style={tw`w-6 h-6 tint-black`}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={tw`text-black text-xl font-bold text-center mt-12`}>
        Edit Profile
      </Text>

      {/* Profile Picture Section */}
      <View style={tw`items-center mt-8`}>
        <View style={tw`w-44 h-44 rounded-full border border-indigo-700 justify-center items-center`}>
          <Image
            // Replace with actual profile picture
            style={tw`w-40 h-40 rounded-full`}
          />
        </View>
        <TouchableOpacity
          style={tw`absolute bottom-0 right-10`}
          onPress={() => Alert.alert('Change Profile Picture')} // Handle profile picture update
        >
          <Image
            // Replace with camera icon
            style={tw`w-8 h-8 tint-indigo-700`}
          />
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={tw`px-6 mt-6`}>
        {/* Name */}
        <Text style={tw`text-black font-bold text-base`}>Name</Text>
        <View style={tw`border border-gray-300 rounded-lg mt-2 px-4 py-3`}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#6B7280"
            style={tw`text-black`}
          />
        </View>

        {/* Email */}
        <Text style={tw`text-black font-bold text-base mt-4`}>Email</Text>
        <View style={tw`border border-gray-300 rounded-lg mt-2 px-4 py-3`}>
          <TextInput
            placeholder="exemple@exemple.com"
            placeholderTextColor="#6B7280"
            style={tw`text-black`}
          />
        </View>

        {/* Password */}
        <Text style={tw`text-black font-bold text-base mt-4`}>Password</Text>
        <View style={tw`border border-gray-300 rounded-lg mt-2 px-4 py-3`}>
          <TextInput
            placeholder="************"
            secureTextEntry
            placeholderTextColor="#6B7280"
            style={tw`text-black`}
          />
        </View>

        {/* Date of Birth */}
        <Text style={tw`text-black font-bold text-base mt-4`}>Date of Birth</Text>
        <TouchableOpacity
          onPress={() => setOpenDatePicker(true)}
          style={tw`border border-gray-300 rounded-lg mt-2 px-4 py-3 flex-row justify-between items-center`}
        >
          <Text style={tw`text-gray-500`}>{dateOfBirth.toLocaleDateString()}</Text>
          <Image
            // Replace with your calendar icon
            style={tw`w-4 h-4 tint-black`}
          />
        </TouchableOpacity>

        {/* Date Picker Modal */}
        {openDatePicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setOpenDatePicker(false);
              if (selectedDate) {
                setDateOfBirth(selectedDate);
              }
            }}
          />
        )}


        {/* Save Button */}
        <TouchableOpacity
          style={tw`bg-indigo-700 rounded-lg mt-6 py-3`}
          onPress={() => Alert.alert('Profile Updated Successfully')}
        >
          <Text style={tw`text-white text-center font-bold text-lg`}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
