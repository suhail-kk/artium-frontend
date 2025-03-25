import useQuery from "@/lib/hooks/useQuery";
import {
  getEventTypes,
  getGenders,
  getProgramTypes,
  getRoles,
} from "@/lib/services/common";
import { getStage } from "@/lib/services/stages";
import { getInvigilator } from "@/lib/services/invigilators";

export const useRoles = () => {
  const { data, isLoading } = useQuery(["roles"], getRoles);
  return {
    isLoading,
    data,
  };
};

export const useGenders = () => {
  const { data, isLoading } = useQuery(["genders"], getGenders);
  return {
    isLoading,
    data,
  };
};

export const useEventTypes = () => {
  const { data, isLoading } = useQuery(["event-types"], getEventTypes);
  return {
    isLoading,
    data,
  };
};

export const useProgramTypes = () => {
  const { data, isLoading } = useQuery(["program-types"], getProgramTypes);
  return {
    isLoading,
    data,
  };
};

export const useStages = () => {
  const { data, isLoading } = useQuery(["stages-list"], getStage);
  return {
    isLoading,
    data,
  };
};

export const useInvigilator = () => {
  const { data, isLoading } = useQuery(["invigilator-list"], getInvigilator);
  return {
    isLoading,
    data,
  };
};
