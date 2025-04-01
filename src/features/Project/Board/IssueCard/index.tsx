import { useState } from "react";
import { Card, CommentCount, InfoFooter } from "./Style";
import Text from "../../../../shared/components/Text";
import StoryIcon from "../../../../shared/components/StoryIcon";
import Modal from "../../../../shared/components/Modal";
import IssueDetail from "../IssueDetail";

// type Props = {};

const IssueCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  console.log(modalOpen);

  return (
    <>
      <Card onClick={() => setModalOpen(true)}>
        <Text variant="sm">
          Users can log in with their username and passwords.
        </Text>
        <InfoFooter>
          <StoryIcon />
          <Text variant="sm">LAU-255</Text>
          <CommentCount>5</CommentCount>
        </InfoFooter>
      </Card>
      <Modal
        title="Dashboard Project"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <IssueDetail />
      </Modal>
    </>
  );
};

export default IssueCard;
