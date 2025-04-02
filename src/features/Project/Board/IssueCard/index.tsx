import { useState } from "react";
import { Card, CommentCount, InfoFooter } from "./Style";
import Text from "../../../../shared/components/Text";
import StoryIcon from "../../../../shared/components/StoryIcon";
import Modal from "../../../../shared/components/Modal";
import IssueDetail from "../IssueDetail";

// type Props = {};

const IssueCard = ({ data }: { data: any }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setModalOpen(true)}>
        <Text variant="sm">{data.name}</Text>
        <InfoFooter>
          <StoryIcon />
          <Text variant="sm">EXMPL-123</Text>
          <CommentCount>5</CommentCount>
        </InfoFooter>
      </Card>
      <Modal
        title="Dashboard Project"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <IssueDetail issue={data} />
      </Modal>
    </>
  );
};

export default IssueCard;
