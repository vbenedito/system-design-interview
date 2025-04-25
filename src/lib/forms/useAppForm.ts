import {
  FieldValues,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";

export function useAppForm<TFieldValues extends FieldValues>(
  options?: UseFormProps<TFieldValues>
): UseFormReturn<TFieldValues> {
  return useForm<TFieldValues>({
    mode: "onChange",
    ...options,
  });
}
