import React from 'react'
import {
    // Progress,
    // Box,
    // ButtonGroup,
    // Button,
    // Heading,
    // Flex,
    FormControl,
    GridItem,
    FormLabel,
    // Input,
    Select,
    // SimpleGrid,
    // InputLeftAddon,
    // InputGroup,
    // Textarea,
    // FormHelperText,
    // InputRightElement,
  } from '@chakra-ui/react';
function FuelType() {
  return (
    <div>
 <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="Fuel"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    Fuel type
                </FormLabel>
                <Select
                    id="location"
                    name="location"
                    // autoComplete="country"
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md">
                    <option>CNG</option>
                    <option>Diesel</option>
                    <option>Petrol</option>
                    <option>LPG</option>
                   

                </Select>
            </FormControl>
    </div>
  )
}

export default FuelType