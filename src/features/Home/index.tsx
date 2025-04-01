import { Container } from "./Styles";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../api/projects";
import ProjectCard from "./ProjectCard";

// type Props = {};

const Home = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjects,
    retry: false,
  });

  // console.log(data);

  return (
    <Container>
      {data?.data?.length && !isFetching
        ? data.data.map((d) => (
            <ProjectCard
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
