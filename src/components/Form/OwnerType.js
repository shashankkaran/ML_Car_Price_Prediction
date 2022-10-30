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
function OwnerType() {
  return (
    <div>
 <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="OwnerType"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    OwnerType
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
                    <option>First</option>
                    <option>Second</option>
                    <option>Third</option>
                    <option>Fourth & Above</option>
                

                </Select>
            </FormControl>
    </div>
  )
}

export default OwnerType