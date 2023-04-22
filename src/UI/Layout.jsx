import { Stack, Button, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center">
      <Stack
        direction={"row"}
        spacing={4}
        p={4}
        align="center"
        justifyContent={"space-between"}
        position={"sticky"}
        shadow="md"
      >
        <Text>post title</Text>
        <Button
          colorScheme="teal"
          size={"sm"}
          variant="outline"
          onClick={() => {
            navigate("/auth?mode=login");
          }}
        >
          Login
        </Button>
      </Stack>
      <Box maxW={"900px"} m={"auto"}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
