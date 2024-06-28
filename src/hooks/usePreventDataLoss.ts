import { useRouter } from "next/router";
import { useEffect } from "react";

export const usePreventDataLoss = (form: any) => {
  const router = useRouter();

  return useEffect(() => {
    const exitingFunction = () => {
      const isFormFilled = Object.keys(form).filter((item) => {
        return !!form[item as keyof typeof form].length
      }).length;

      if (!!isFormFilled) {
        if (confirm('The data entered in the form will be lost!') !== true) {
          router.events.emit('routeChangeError')
          throw `route change aborted`
        }
      }
    }

    router.events.on('routeChangeStart', exitingFunction);

    return () => {
      router.events.off('routeChangeStart', exitingFunction);
    };

  }, [form, router.events]);
}