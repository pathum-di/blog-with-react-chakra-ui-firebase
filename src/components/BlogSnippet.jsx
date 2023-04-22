import React from "react";
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  Image,
  CardFooter,
  Link,
} from "@chakra-ui/react";
import { Link as RRDLink } from "react-router-dom";

const BlogSnippet = ({ blogData }) => {
  return (
    <Card
      size={"md"}
      overflow="hidden"
      variant="outline"
      direction={"row"}
      my={4}
    >
      <Image
        objectFit="cover"
        maxW={"200px"}
        src={blogData.imageUrl}
        alt={blogData.title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{blogData.title}</Heading>

          <Text py="2" noOfLines={2}>
            {blogData.content}
          </Text>
        </CardBody>

        <CardFooter>
          <Link float={"right"} as={RRDLink} to={`/blog-post/${blogData.id}`}>
            View more details
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default BlogSnippet;
