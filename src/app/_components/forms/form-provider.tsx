/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider } from "react-hook-form";
import { ReactNode } from "react";

interface AppFormProps {
  form: any;
  onSubmit: (data: any) => void;
  children: ReactNode;
}

export const AppForm = ({ form, onSubmit, children }: AppFormProps) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
