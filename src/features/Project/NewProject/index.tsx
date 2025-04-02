import { SubmitHandler, useForm } from "react-hook-form";
import Flex from "../../../shared/components/Flex";
import Text from "../../../shared/components/Text";
import Input from "../../../shared/components/TextInput";
import { Form } from "./Styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProject } from "../../../api/projects";
import Button from "../../../shared/components/Button";

type FormInputs = {
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  user_ids: string[];
};

const NewProject = ({ closeForm }: { closeForm: () => void }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addNewProject,
  });

  const { register, handleSubmit, reset } = useForm<FormInputs>({
    defaultValues: {
      user_ids: [],
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    data.user_ids = [];
    data.start_time += " 00:00:00";
    data.end_time += " 00:00:00";
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["all-projects"] });
        reset();
        closeForm();
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text weight={700}>Create New Project</Text>
      <Input label="Name" {...register("name")} />
      <Input label="Description" {...register("description")} />
      <Flex justify="space-between" gap={"1rem"}>
        <Input type="date" label="Start Date" {...register("start_time")} />
        <Input type="date" label="End Date" {...register("end_time")} />
      </Flex>
      <Flex justify="end" gap={".5rem"}>
        <Button variant="gray" type="button" onClick={closeForm}>
          Cancel
        </Button>
        <Button variant="primary">Submit</Button>
      </Flex>
    </Form>
  );
};

export default NewProject;
