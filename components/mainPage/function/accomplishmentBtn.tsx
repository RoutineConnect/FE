"use client";

import SetAccomplishmentApi from "@/API/routine/setAccomplishmentApi";
import ICheck from "@/icon/iCheck";

export default function AccomplishmentBtn({
  routine_id,
  accomplishment,
}: {
  routine_id: number;
  accomplishment: boolean;
}) {
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
  return (
    <div
      className={` w-8 pr-10 ${
        accomplishment === true ? " text-green-500" : "text-gray-300"
      }`}
      onClick={setAccomplishment}
    >
      <ICheck />
    </div>
  );
}
