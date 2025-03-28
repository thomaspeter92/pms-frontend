import Text from "../../../shared/components/Text";
import {
  AvatarList,
  BoardOuter,
  Column,
  ColumnTitle,
  Header,
  InfoSection,
} from "./Styles";
import Avatar from "../../../shared/components/Avatar";
import SearchBar from "../../../shared/components/SearchBar";
import IssueCard from "./IssueCard";
import { useState } from "react";
type Props = {};

const Board = (props: Props) => {
  return (
    <>
      <Header>
        <Text variant="sm">Projects / {"Dashbaord Project"}</Text>
        <Text variant="lg" weight={700}>
          Dashboard Project
        </Text>
        <InfoSection>
          <SearchBar />
          <AvatarList>
            <Avatar size="md" imgUrl="/robot.jpg" />
            <Avatar size="md" imgUrl="/robot.jpg" />
            <Avatar size="md" imgUrl="/robot.jpg" />
            <Avatar size="md" imgUrl="/robot.jpg" />
          </AvatarList>
        </InfoSection>
      </Header>
      <BoardOuter>
        <Column>
          <ColumnTitle>To-do</ColumnTitle>
          <IssueCard />
          <IssueCard />
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
