import React from "react";
import { Container } from "./Styles";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../api/projects";

type Props = {};

const Home = (props: Props) => {
  const { data, isFetching } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjects,
    retry: false,
  });

  console.log(data);

  return <Container></Container>;
};

export default Home;
