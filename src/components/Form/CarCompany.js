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
function CarCompany() {
  return (
    <div>
         <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="Car_Brand"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    Car Brand
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
                    <option>Maruti</option>
                    <option>Hyundai</option>
                    <option>Honda</option>
                    <option>Audi</option>
                    <option>Nissan</option>
                    <option>Toyota</option>
                    <option>Volkswagen</option>
                    <option>Tata</option>
                    <option>Land</option>
                    <option>Mitsubishi</option>
                    <option>Renault</option>
                    <option>Mercedes-Benz</option>
                    <option>BMW</option>
                    <option>Mahindra</option>
                    <option>Ford</option>
                    <option>Porsche</option>
                    <option>Datsun</option>
                    <option>Jaguar</option>
                    <option>Volvo</option>
                    <option>Chevrolet</option>
                    <option>Skoda</option>
                    <option>Mini</option>
                    <option>Fiat</option>
                    <option>Jeep</option>
                    <option>Ambassador</option>
                    <option>Isuzu</option>
                    <option>ISUZU</option>
                    <option>Force</option>
                    <option>Bentley</option>
                    
                    
                    
                </Select>
            </FormControl>

    </div>
  )
}

export default CarCompany