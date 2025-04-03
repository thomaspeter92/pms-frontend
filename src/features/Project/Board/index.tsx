import { useParams } from "react-router";
import { BoardOuter, Column, ColumnTitle } from "./Styles";
import { useQuery } from "@tanstack/react-query";
import { getAllProjectIssues, Issue } from "../../../api/projects";
import IssueCard from "./IssueCard";
import { useEffect, useRef, useState } from "react";
import {
  dropTargetForElements, // NEW
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

const ColumnElement = ({ data, title }: { data: Issue[]; title: string }) => {
  const colRef = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  useEffect(() => {
    const columnEl = colRef.current;

    if (!columnEl) return;

    return dropTargetForElements({
      element: columnEl,
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
    });
  }, []);

  return (
    <Column ref={colRef} $active={isDraggedOver}>
      <ColumnTitle>{title}</ColumnTitle>
      {data?.map((d) => (
        <IssueCard data={d} key={d.task_id} />
      ))}
    </Column>
  );
};

const Board = () => {
  // const data = useQueryClient().getQueryData(["project"]);
  const backlogRef = useRef(null);
  const progressRef = useRef(null);
  const doneRef = useRef(null);

  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["project-issues", id],
    queryFn: ({ queryKey }) => getAllProjectIssues(queryKey[1]!!),
    enabled: id ? true : false,
  });

  const backlogItems = data?.data?.filter((d) => d.status === "Backlog");
  const inProgressItems = data?.data?.filter((d) => d.status === "In-Progress");
  const doneItems = data?.data?.filter((d) => d.status === "Done");

  return (
    <>
      <BoardOuter>
        <ColumnElement data={backlogItems} title="Backlog" />
        <ColumnElement data={inProgressItems} title="In-Progress" />
        <ColumnElement data={doneItems} title="Done" />
      </BoardOuter>
    </>
  );
};

export default Board;
