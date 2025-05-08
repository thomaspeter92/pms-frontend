import { Container } from "./Styles";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../api/projects";
import ProjectCard from "./ProjectCard";
import { redirect, useNavigate } from "react-router";

// type Props = {};

const Home = () => {
  const navigate = useNavigate();

  const { data, isFetching } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjects,
    retry: false,
  });

  if (data?.data[0]?.project_id) {
    console.log(data?.data[0]?.project_id);
    navigate("/project/" + data?.data[0]?.project_id);
  }

  return (
    <Container>
      {data?.data?.length && !isFetching
        ? data.data.map((d) => (
            <ProjectCard
              id={d.project_id!!}
              end={d.end_time}
              title={d.name}
              description={d.description}
              start={d.start_time}
            />
          ))
        : null}
    </Container>
  );
};

export default Home;
