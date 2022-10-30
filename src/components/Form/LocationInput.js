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
export default function Country
    () {
    return (
        <div>
            <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    Location
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
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Chennai</option>
                    <option>Coimbatore</option>
                    <option>Hyderabad</option>
                    <option>Jaipur</option>
                    <option>Kochi</option>
                    <option>Kolkata</option>
                    <option>Kolkata</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Ahmedabad</option>

                </Select>
            </FormControl>
        </div>
    )
}
