import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { StyleSheet, Switch, Text, View, TextInput } from 'react-native';
import { t, color } from 'react-native-tailwindcss'
import Input from './Input';
import Button from './Button';

import {useForm, Controller} from 'react-hook-form'
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function SpreadSheet () {
	const [name, setName] = useState('');
	const [email, setAge] = useState('');
	const [data,setData]= useState([]);
		// export default function App() {
	const { handleSubmit, control,  formState: { errors } } = useForm();
	

  const onErrors = (errors) => {
    console.warn(errors)
  }
	// name controller
	// control={control}

	// email controller
	// control={control}

	// const onSubmit = (data) => {
	// 	console.warn(data)
	//   };
	// onSubmit method
	const onSubmit  = async ({name,email,phone}) => {

		const objt = {Name: name,Email: email,Phone:phone};
		// try {
		// 	const res = await fetch(
		// 	  "https://sheet.best/api/sheets/9357e76b-e1ab-4cff-92a3-1917f5786ddc",
		// 	  {
		// 		method: "POST",
		// 		headers: {
		// 		  "Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify(objt),
		// 	  }
		// 	);
		// 	if (res.ok) {
		// 	  history.replace("/");
		// 	}
		//   } catch (error) {
		// 	console.log(error);
		//   }
		axios
			.post(
				'https://sheet.best/api/sheets/9357e76b-e1ab-4cff-92a3-1917f5786ddc',
				objt
			)
			.then((response) => {
				console.warn(objt);
			});
	};
	  return (
		<View style={styles.container}>
		  <Controller
			control={control}
			render={({field:{ onChange, onBlur, value }}) => (
				<Input
					style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
					onBlur={onBlur}
					onChangeText={value => onChange(value)}
					value={value}
					placeholder="email"
					error={errors?.email}
					errorText={errors?.email?.message}	
				/>
			//   <TextInput
			// 	style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
			// 	onBlur={onBlur}
			// 	onChangeText={value => onChange(value)}
			// 	value={value}
			//   />
			)}
			name="email"
			
				rules={{
					required: { value: true, message: 'email is required' },
					pattern: {
						value: EMAIL_REGEX,
						message: 'Not a valid email'
					}
				}}
			defaultValue=""
		  />
	
			{errors.email?.type === "required" && <Text style={styles.errorText}>Email is required.</Text>}

			{errors.email?.type === "pattern" && <Text style={styles.errorText}>Not a valid email</Text>}
		  <Controller
			control={control}
			render={({field:{ onChange, onBlur, value }})=> (

				<Input
					style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
					onBlur={onBlur}
					onChangeText={value => onChange(value)}
					value={value}
					placeholder="name"
					error={errors?.name}
					errorText={errors?.name?.message}	
				/>
			//   <TextInput
			// 	style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
			// 	onBlur={onBlur}
			// 	onChangeText={value => onChange(value)}
			// 	value={value}
			//   />
			)}
			name="name"
			rules={{ required: true}}
			defaultValue=""
		  />
			{errors.name?.type === "required" && <Text style={styles.errorText}>Name is required.</Text>}
			<Controller
			control={control}
			render={({field:{ onChange, onBlur, value }})=> (

				<Input
					style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
					onBlur={onBlur}
					onChangeText={value => onChange(value)}
					value={value}
					placeholder="phone"
					error={errors?.phone}
					errorText={errors?.phone?.message}	
				/>
			//   <TextInput
			// 	style={{paddingHorizontal: 20, borderWidth: 1, paddingVertical: 8}}
			// 	onBlur={onBlur}
			// 	onChangeText={value => onChange(value)}
			// 	value={value}
			//   />
			)}
			name="phone"
			rules={{ required: true}}
			defaultValue=""
		  />
			{errors.phone?.type === "required" && <Text style={styles.errorText}>phone is required.</Text>}
	
		  <Button title="Submit" onPress={handleSubmit((data) => {onSubmit(data)})} />
		</View>
	  );
// 	return (
// 		<View style={styles.container}>
// 		<Controller
// 				name="name"
// 				control={control}
// 				defaultValue=""
// 				render={( {field: { onChange, value }}) => (
// 					<Input
// 						error={errorss?.name}
// 						errorText={errorss?.name?.message}
// 						onChangeText={(text) => {onChange(text); setName(text)}}
// 						value={value}
// 						placeholder="name"
// 					/>
// 				)}
				
// 				rules={{
// 					required: { value: true, message: 'Name is required' },
// 					pattern: {
// 						value: EMAIL_REGEX,
// 						message: 'Not a valid email'
// 					}
// 				}}
				
// 			/>
//       		<Controller
// 				name="email"
// 				control={control}
// 				defaultValue=""
// 				render={({field: { onChange, value }}) => (
// 					<Input
// 						onChangeText={(text) => onChange(text)}
// 						value={value}
// 						placeholder="email"
// 						error={errorss?.email}
// 						errorText={errorss?.email?.message}	
// 					/>
// 				)}
						
// 				rules={{
// 					required: { value: true, message: 'Email is required' }
// 				}}
// 		/>	
//       <Button onPress={() => {handleSubmit(onSubmit, onErrors)} } label="Submit" />
				
// 		<Text>{name}</Text>	
//     </View>
//   );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800],
  errorText: [ t.textRed500]
};

export default SpreadSheet;
// import React from 'react'
// import { FormProvider, useForm } from 'react-hook-form'
// import { Button } from 'react-native'
// import styled from 'styled-components/native'

// import { FormInput } from './FormInput'

// const Wrapper = styled.View`
//   padding: 5px;
// `
// const LOGIN_FIELDS = {
//   username: 'username',
//   password: 'password',
// }

// const SpreadSheet = () => {
//   const formMethods = useForm()

//   const onSubmit = (form) => {
//     console.log(form)
//   }

//   const onErrors = (errors) => {
//     console.warn(errors)
//   }

//   return (
//     <Wrapper>
//       <FormProvider {...formMethods}>
//         <FormInput
//           name={LOGIN_FIELDS.username}
//           label='Username'
//           rules={{ required: 'Username is required!' }}
//         />
//         <FormInput
//           name={LOGIN_FIELDS.password}
//           label='Password'
//           rules={{
//             required: 'Password is required!',
//             minLength: {
//               message: 'Use at least 10 characters.',
//               value: 10,
//             },
//           }}
//         />
//       </FormProvider>
//       <Button
//         title='Login'
//         onPress={formMethods.handleSubmit(onSubmit, onErrors)}
//       />
//     </Wrapper>
//   )
// }

// export default SpreadSheet;