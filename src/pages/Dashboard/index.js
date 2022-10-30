import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";
import Nav from "../../components/navbar/Nav";
import LocationInput from "../../components/Form/LocationInput.js";
import FuelType from "../../components/Form/FuelType.js";
import Transmission from "../../components/Form/Transmission.js";
import OwnerType from "../../components/Form/OwnerType.js";

import CarCompany from "../../components/Form/CarCompany.js";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Progress,
  Box,
  ButtonGroup,
  // Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  // Select,
  SimpleGrid,
  // InputLeftAddon,
  // InputGroup,
  // Textarea,
  FormHelperText,
  // InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';








const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Check if you car is applicable for sale
      </Heading>
      {/* <Flex> */}
      <FormControl mr="5%">
        <FormLabel htmlFor="first-name" fontWeight={'bold'}>
          Front View
        </FormLabel>
        {/* <Input id="first-name" placeholder="First name" /> */}
        {/* <label for="formFileLg" className="form-label">Large file input example</label> */}
        <input className="form-control form-control-lg" id="formFileLg" type="file" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="last-name" fontWeight={'bold'}>
          Rear View
        </FormLabel>
        {/* <Input id="last-name" placeholder="First name" /> */}
        {/* <label for="formFileLg" className="form-label">Large file input example</label>s */}
        <input className="form-control form-control-lg" id="formFileLg" type="file" />
      </FormControl>
      {/* </Flex> */}

      {/* <Flex> */}
      <FormControl mr="5%">
        <FormLabel htmlFor="first-name" fontWeight={'bold'}>
          Left View
        </FormLabel>
        {/* <Input id="first-name" placeholder="First name" /> */}
        {/* <label for="formFileLg" className="form-label">Large file input example</label> */}
        <input className="form-control form-control-lg" id="formFileLg" type="file" />
      </FormControl>
      <FormControl >
        <FormLabel htmlFor="first-name" fontWeight={'bold'}>
          Right View
        </FormLabel>
        {/* <Input id="first-name" placeholder="First name" /> */}

        {/* <label for="formFileLg" className="form-label">Large file input example</label> */}
        <input className="form-control form-control-lg" id="formFileLg" type="file" />
      </FormControl>
      {/* </Flex> */}

    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Car Details
      </Heading>

      <LocationInput />
      <CarCompany />
      <FuelType />
      <Transmission />
      <OwnerType />
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="year"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Year of Purchase
        </FormLabel>
        <Input
          type="month"
          // min="1990"
          // max="2022"
          name="year"
          id="year"
          // autoComplete=""
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="kilometers"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Kilometers Driven
        </FormLabel>
        <Input
          type="number"

          name="kilometers"
          id="kilometers"
          // autoComplete=""
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>



      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="mileage"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Mileage
        </FormLabel>
        <Input
          type="number"

          name="mileage"
          id="mileage"
          // autoComplete=""
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="seats"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Seats
        </FormLabel>
        <NumberInput defaultValue={4} min={2} max={8}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="Engine"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Engine CC
        </FormLabel>
        <Input
          type="number"

          name="enginecc"
          id="enginecc"
          // autoComplete=""
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="kilometers"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Power BHP
        </FormLabel>
        <Input
          type="number"

          name="power"
          id="power"
          // autoComplete=""
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>


    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Disclosure
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>

          <FormHelperText>
            By Clicking on Submit button I hereby declares that all the infornmation provided by me is best of my Knowledge
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};






const Dashboard = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);


  return (

    <div>

      <Nav />


      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Posted Successfully',
                    description: "Your Car has been listed successfully",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Dashboard
