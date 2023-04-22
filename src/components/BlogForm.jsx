import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { createBlogPost } from "../actions/BlogPosts";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    await createBlogPost(
      { title, imageUrl, content },
      () => console.log("success"),
      (error) => console.log({ error })
    );
  };

  return (
    <VStack
      spacing={4}
      p={4}
      maxW={"900px"}
      m={"auto"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Text fontSize="2xl">Edit or Create Blog Post</Text>
      <FormControl /* isInvalid={isError} */>
        <FormLabel>Blog Title</FormLabel>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
      </FormControl>
      <FormControl /* isInvalid={isError} */>
        <FormLabel>Blog Image</FormLabel>
        <Input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
      </FormControl>
      <FormControl /* isInvalid={isError} */>
        <FormLabel>Blog Content</FormLabel>
        {/* <Input type='text' /> */}
        <Textarea
          /* isInvalid={isError} */ rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
      </FormControl>
      <HStack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="outline">
          Cancel
        </Button>
        <Button colorScheme="teal" variant="outline">
          Reset
        </Button>
        <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
          Save
        </Button>
      </HStack>
    </VStack>
  );
};

export default BlogForm;
