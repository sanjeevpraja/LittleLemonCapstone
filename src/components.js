import React from "react";
import {Box,  Grid, GridItem} from "@chakra-ui/react";


export default function Components(){
  return(

    <Box className='mid-container' mt={100}>
      <Grid templateColumns='repeat(9, 1fr)' gap={6} >
        <GridItem bgColor={"primary.100"}>100</GridItem>
        <GridItem bgColor={"primary.200"}>200</GridItem>
        <GridItem bgColor={"primary.300"}>300</GridItem>
        <GridItem bgColor={"primary.400"}>400</GridItem>
        <GridItem bgColor={"primary.500"}>500</GridItem>
        <GridItem bgColor={"primary.600"}>600</GridItem>
        <GridItem bgColor={"primary.700"}>700</GridItem>
        <GridItem bgColor={"primary.800"}>800</GridItem>
        <GridItem bgColor={"primary.900"}>900</GridItem>
      </Grid>
      <Grid templateColumns='repeat(9, 1fr)' gap={6} >
        <GridItem bgColor={"secondary.100"}>100</GridItem>
        <GridItem bgColor={"secondary.200"}>200</GridItem>
        <GridItem bgColor={"secondary.300"}>300</GridItem>
        <GridItem bgColor={"secondary.400"}>400</GridItem>
        <GridItem bgColor={"secondary.500"}>500</GridItem>
        <GridItem bgColor={"secondary.600"}>600</GridItem>
        <GridItem bgColor={"secondary.700"}>700</GridItem>
        <GridItem bgColor={"secondary.800"}>800</GridItem>
        <GridItem bgColor={"secondary.900"}>900</GridItem>
      </Grid>
    </Box>
)
};