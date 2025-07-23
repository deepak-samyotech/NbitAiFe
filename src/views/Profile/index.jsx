import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation schema for profile fields
const profileValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  status: Yup.string().required('Status is required'),
  rank: Yup.string().required('Rank is required'),
  walletAddress: Yup.string().required('Wallet address is required'),
  referralCode: Yup.string().required('Referral code is required'),
});

// Validation schema for password fields
const passwordValidationSchema = Yup.object({
  oldPassword: Yup.string().required('Old password is required'),
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Initial values for profile form
  const initialProfileValues = {
    username: '',
    email: '',
    status: 'Active',
    rank: '',
    walletAddress: '',
    referralCode: '',
  };

  // Initial values for password form
  const initialPasswordValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  return (
    <Box p={4} className="w-full" mx="auto" mt={20}>
      <Flex alignItems="center" mb={6}>
        <Box
          as="img"
          src="https://unityfund.in/demo/assets/avatars/9.png"
          alt="Avatar"
          w="80px"
          h="80px"
          borderRadius="full"
          mr={4}
          bg="purple.500"
        />
        <Box>
          <Heading as="h2" size="lg">
            Profile
          </Heading>
          <Text color="gray.500">{initialProfileValues.email}</Text>
        </Box>
      </Flex>

      {/* Profile Form */}
      <Formik
        initialValues={initialProfileValues}
        validationSchema={profileValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Profile updated:', values);
          // Add API call to update profile data
          setIsEditing(false);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
              <Field name="username">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={form.errors.username && form.touched.username}
                  >
                    <FormLabel>Username</FormLabel>
                    <Input {...field} placeholder="mukul@143DB" />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input {...field} placeholder="mukul@gmail.com" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* <Field name="status">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={form.errors.status && form.touched.status}
                  >
                    <FormLabel>Status</FormLabel>
                    <Input
                      {...field}
                      placeholder="Active"
                      bg={
                        values.status === 'Active' && !isEditing
                          ? 'green.100'
                          : 'transparent'
                      }
                    />
                    <FormErrorMessage>{form.errors.status}</FormErrorMessage>
                  </FormControl>
                )}
              </Field> */}

              <Field name="status">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={form.errors.status && form.touched.status}
                  >
                    <FormLabel>Status</FormLabel>
                    <Button
                      {...field}
                      bg={
                        form.values.status === 'Active'
                          ? 'green.200'
                          : 'gray.100'
                      }
                      color={
                        form.values.status === 'Active'
                          ? 'green.800'
                          : 'gray.700'
                      }
                      borderRadius="md"
                      px={4}
                      py={2}
                      _hover={{
                        bg:
                          form.values.status === 'Active'
                            ? 'green.100'
                            : 'gray.300',
                      }}
                      onClick={() =>
                        isEditing &&
                        form.setFieldValue(
                          'status',
                          form.values.status === 'Active'
                            ? 'Inactive'
                            : 'Active',
                        )
                      }
                    >
                      {form.values.status || 'Active'}
                    </Button>
                    <FormErrorMessage>{form.errors.status}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="rank">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={form.errors.rank && form.touched.rank}
                  >
                    <FormLabel>Rank</FormLabel>
                    <Input {...field} placeholder="Sapphire" />
                    <FormErrorMessage>{form.errors.rank}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="walletAddress">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={
                      form.errors.walletAddress && form.touched.walletAddress
                    }
                  >
                    <FormLabel>Wallet Address</FormLabel>
                    <Input {...field} placeholder="0xf1...331" />
                    <FormErrorMessage>
                      {form.errors.walletAddress}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="referralCode">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={
                      form.errors.referralCode && form.touched.referralCode
                    }
                  >
                    <FormLabel>Referral Code</FormLabel>
                    <Input {...field} placeholder="ZR0AYEW" />
                    <FormErrorMessage>
                      {form.errors.referralCode}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex justifyContent="flex-end">
                {isEditing ? (
                  <>
                    <Button
                      colorScheme="purple"
                      type="submit"
                      mr={2}
                      isLoading={isSubmitting}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    colorScheme="purple"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                )}
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>

      {/* Password Update Form */}
      <Formik
        initialValues={initialPasswordValues}
        validationSchema={passwordValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('Password updated:', values);
          // Add API call to update password
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={6} bg="white" p={6} borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4}>
                Update Password
              </Heading>
              <Field name="oldPassword">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={
                      form.errors.oldPassword && form.touched.oldPassword
                    }
                  >
                    <FormLabel>Old Password</FormLabel>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter old password"
                    />
                    <FormErrorMessage>
                      {form.errors.oldPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="newPassword">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={
                      form.errors.newPassword && form.touched.newPassword
                    }
                  >
                    <FormLabel>New Password</FormLabel>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter new password"
                    />
                    <FormErrorMessage>
                      {form.errors.newPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="confirmPassword">
                {({ field, form }) => (
                  <FormControl
                    mb={4}
                    isInvalid={
                      form.errors.confirmPassword &&
                      form.touched.confirmPassword
                    }
                  >
                    <FormLabel>Confirm New Password</FormLabel>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Confirm new password"
                    />
                    <FormErrorMessage>
                      {form.errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                type="submit"
                colorScheme="purple"
                mt={4}
                isLoading={isSubmitting}
              >
                Update Password
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Profile;
