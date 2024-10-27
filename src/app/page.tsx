"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input"; // PhoneInputをインポート
import "react-phone-number-input/style.css"; // スタイルのインポート

export default function Home() {
  const methods = useForm();
  const { handleSubmit, control } = methods;

  // フォーム送信時の処理
  const onSubmit = (data: FieldValues) => {
    console.log("data", data);
    alert(`電話番号 (国際形式):, ${data.phoneInputWithCountrySelect}`);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={control}
            name="phoneInputWithCountrySelect"
            render={({ field: { onChange, value } }) => (
              <FormItem className={cn("flex flex-col gap-1")}>
                <div className="inline-flex items-center gap-2">
                  <FormLabel>国際形式の電話番号</FormLabel>
                </div>
                <div className="inline-flex w-full items-center gap-5">
                  <FormControl>
                    <PhoneInput
                      international // 国際電話形式に対応
                      defaultCountry="JP" // 日本をデフォルトに設定
                      className="h-full rounded-md border-none bg-gray-100 px-3 py-4"
                      placeholder="Enter phone number"
                      onChange={onChange}
                      value={value} // 現在の値を設定
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
