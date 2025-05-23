import { useEffect, useRef, useState } from "react";
import { Card, CommentCount, InfoFooter } from "./Style";
import Text from "../../../../shared/components/Text";
import StoryIcon from "../../../../shared/components/StoryIcon";
import Modal from "../../../../shared/components/Modal";
import IssueDetail from "../IssueDetail";
import { Icons } from "../../../../shared/components/Icons";
import { color } from "../../../../shared/util/styles";
import TaskIcon from "../../../../shared/components/TaskIcon";
import { Issue } from "../../../../api/projects";
import { DateTime } from "luxon";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

const IssueCard = ({ data }: { data: Issue }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const PriorityIcon = Icons["upArrow"];

  useEffect(() => {
    if (!cardRef.current) return;

    return draggable({
      element: cardRef.current,

      getInitialData: () => ({
        type: "issue",
        taskId: data.task_id,
        data: data,
      }),
    });
  }, [data.task_id]);

  return (
    <>
      <Card ref={cardRef} onClick={() => setModalOpen(true)}>
        <Text variant="sm">{data.name}</Text>
        <InfoFooter>
          {data.task_type === "Story" ? <StoryIcon /> : <TaskIcon />}
          <Text variant="xs" weight={500}>
            {DateTime.fromISO(data.estimated_end_time).toFormat("yyyy-MM-dd")}
          </Text>
          <CommentCount>{data.comment_count}</CommentCount>
          <PriorityIcon
            size={13}
            strokeWidth={3}
            color={
              data.priority === "High"
                ? color.danger
                : data.priority === "Medium"
                ? color.warning
                : color.success
            }
          />
        </InfoFooter>
      </Card>
      <Modal
        title="Dashboard Project"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <IssueDetail closeForm={() => setModalOpen(false)} issue={data} />
      </Modal>
    </>
  );
};

export default IssueCard;
