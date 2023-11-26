"use client";

import SetAccomplishmentApi from "@/API/routine/setAccomplishmentApi";
import ICheck from "@/icon/iCheck";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export default function AccomplishmentBtn({
  routine_id,
  accomplishment,
  date,
}: {
  routine_id: number;
  accomplishment: boolean;
  date: string;
}) {
  const queryClient = useQueryClient();

  const setAccomplishment = async () => {
    const formData = {
      accomplishment: !accomplishment,
      routine_item_id: routine_id,
    };
    try {
      const response = await SetAccomplishmentApi(formData);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const { mutate: accomplishmentChange } = useMutation({
    mutationFn: setAccomplishment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["routines", { date: date }] });
    },
  });
  return (
    <div
      className={` w-8 pr-10 ${accomplishment === true ? " text-green-500" : "text-gray-300"}`}
      onClick={() => accomplishmentChange()}
    >
      <ICheck />
    </div>
  );
}
