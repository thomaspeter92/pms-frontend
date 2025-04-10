import { useQueryClient } from "@tanstack/react-query";

export const useGetQueryData = (queryKey: string[]) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(queryKey);
};
