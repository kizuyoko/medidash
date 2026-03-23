import { useQuery } from "@tanstack/react-query";
import { Patient } from "@/types/patient";
import { fetchPatients } from "@/lib/api/patients";

const usePatientsData = () => {
  const { data, isLoading, error } = useQuery<Patient[]>({
    queryKey: ["patients"],
    queryFn: fetchPatients,
    staleTime: 1000 * 60 * 60 , //one hour
  });

  return { data, isLoading, error };
};

export default usePatientsData;