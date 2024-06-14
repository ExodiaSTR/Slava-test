import { getSpecialsSerializer } from "~/serializer/getSpecials";

async function getData() {
  const {
    data: response,
    pending,
    error,
  } = await useFetch("https://test-task-frontend-2023.slava.digital", {
    method: "POST",
  });

  return {
    response: getSpecialsSerializer(response.value),
    pending,
    error,
  };
}

export { getData };
