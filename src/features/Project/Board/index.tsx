import { useParams } from "react-router";
import { BoardOuter, Column, ColumnTitle } from "./Styles";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllProjectIssues, Issue, updateIssue } from "../../../api/projects";
import IssueCard from "./IssueCard";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  dropTargetForElements, // NEW
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { DateTime } from "luxon";

const ColumnElement = ({
  data,
  colId,
  onDropTask,
}: {
  data: { colId: string; issues: Issue[] };
  title: string;
  colId: string;
  onDropTask: (taskId: string, toColId: string, data: Issue) => void;
}) => {
  const colRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!colRef.current) return;
    return dropTargetForElements({
      element: colRef.current,
      getData: () => ({ type: "column", colId }),
      onDragEnter: () => {
        setIsHovering(true);
      },
      onDragLeave: () => {
        setIsHovering(false);
      },
      onDrop: ({ source }) => {
        console.log(source);
        if (source.data.type === "issue") {
          onDropTask(
            source.data.taskId as string,
            colId,
            source.data.data as Issue
          );
        }
      },
    });
  }, [colId, onDropTask]);

  return (
    <Column ref={colRef} $isHovering={isHovering}>
      <ColumnTitle>{data.colId}</ColumnTitle>
      {data?.issues?.map((d) => (
        <IssueCard data={d} key={d.task_id} />
      ))}
    </Column>
  );
};

const Board = () => {
  const [columns, setColumns] =
    useState<{ colId: string; issues: Issue[] }[]>();
  const { mutate } = useMutation({
    mutationFn: updateIssue,
  });

  const { id } = useParams();
  const { data, isSuccess } = useQuery({
    queryKey: ["project-issues", id],
    queryFn: ({ queryKey }) => getAllProjectIssues(queryKey[1]!!),
    enabled: id ? true : false,
  });

  useEffect(() => {
    if (!data?.data && !isSuccess) return;
    const cols: { colId: string; issues: Issue[] }[] = [
      { colId: "Backlog", issues: [] },
      { colId: "In-Progress", issues: [] },
      { colId: "Done", issues: [] },
    ];
    data?.data.forEach((d) => {
      cols[
        d.status === "Backlog" ? 0 : d.status === "In-Progress" ? 1 : 2
      ].issues.push(d);
    });
    setColumns(cols);
  }, [data]);

  const handleDropTask = useCallback(
    (issueId: string, toColumnId: string, issue: Issue) => {
      console.log(issueId, toColumnId);

      setColumns((prev) => {
        const newColumns = prev?.map((col) => {
          const withoutTask = col.issues.filter((t) => {
            if (t.task_id === issueId) {
              issue = t;
              issue.status = toColumnId as Issue["status"];
              return false;
            }
            return true;
          });
          return { ...col, issues: withoutTask };
        });

        return newColumns?.map((col) => {
          if (col.colId === toColumnId && issue) {
            return { ...col, issues: [...col.issues, issue] };
          }
          return col;
        });
      });

      if (issue) {
        const issueToMove = { ...issue };
        issueToMove.estimated_start_time = DateTime.fromISO(
          issueToMove.estimated_start_time
        ).toFormat("yyyy-MM-dd HH:mm:ss");
        issueToMove.estimated_end_time = DateTime.fromISO(
          issueToMove.estimated_end_time
        ).toFormat("yyyy-MM-dd HH:mm:ss");
        mutate(issueToMove);
      }
    },
    []
  );

  if (!columns) return;

  return (
    <>
      <BoardOuter>
        <ColumnElement
          colId={columns[0].colId}
          onDropTask={handleDropTask}
          data={columns[0]}
          title="Backlog"
        />
        <ColumnElement
          colId={columns[1].colId}
          onDropTask={handleDropTask}
          data={columns[1]}
          title="In-Progress"
        />
        <ColumnElement
          colId={columns[2].colId}
          onDropTask={handleDropTask}
          data={columns[2]}
          title="Done"
        />
      </BoardOuter>
    </>
  );
};

export default Board;
