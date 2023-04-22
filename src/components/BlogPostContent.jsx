import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BlogPostContent = ({ imageUrl, title, content }) => {
  const navigate = useNavigate()
  return (
    <Card mt={4}>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <Image objectFit="cover" src={imageUrl} alt={title} />
      <CardBody>
        <Text>{content}</Text>
      </CardBody>

      <CardFooter justify="space-between">
        <Button flex="1" variant="ghost" onClick={() => navigate('/')}>
          Back
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPostContent;
