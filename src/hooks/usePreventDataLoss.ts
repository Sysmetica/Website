import { useRouter } from "next/router";
import { useEffect } from "react";

const MRG_WARNING = 'The data entered in the form will be lost!';

export const usePreventDataLoss = (form: any) => {
  const router = useRouter();

  return useEffect(() => {
    const exitingFunction = () => {
      const isFormFilled = Object.keys(form).filter((item) => {
        return !!form[item as keyof typeof form].length
      }).length;

      if (!!isFormFilled) {
        if (confirm(MRG_WARNING) !== true) {
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

// special for Close Modal button
export const closeModalPreventDataLoss = (form: any) => {
  const isFormFilled = Object.keys(form).filter((item) => {
    return !!form[item as keyof typeof form].length
  }).length;

  if (!!isFormFilled) {
    if (confirm(MRG_WARNING) !== true) {
      return false
    }
    return true
  }

  return true
}
