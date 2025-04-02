import { useParams } from "react-router";
import { BoardOuter, Column, ColumnTitle } from "./Styles";
import { useQuery } from "@tanstack/react-query";
import { getAllProjectIssues } from "../../../api/projects";
import IssueCard from "./IssueCard";

const Board = () => {
  // const data = useQueryClient().getQueryData(["project"]);

  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["project-issues", id],
    queryFn: ({ queryKey }) => getAllProjectIssues(queryKey[1]!!),
    enabled: id ? true : false,
  });

  console.log(data);

  return (
    <>
      <BoardOuter>
        <Column>
          <ColumnTitle>BACKLOG</ColumnTitle>
          {data?.data.map((d) => (
            <IssueCard data={d} key={d.task_id} />
          ))}
        </Column>
        <Column>
          <ColumnTitle>In progress</ColumnTitle>
        </Column>
        <Column>
          <ColumnTitle>Done</ColumnTitle>
        </Column>
      </BoardOuter>
    </>
  );
};

export default Board;
