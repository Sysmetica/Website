import { useAnimation } from "@/hooks/useAnimation";
import { Cases } from "./cases/Cases"
import { Intro } from "./intro/Intro"
import { CaseStudiesProps } from "@/types/casestudies";

export type CasesPageProps = {
  casestudies: CaseStudiesProps,
  title: string
  subtitle: string
  tags: {
    tag: string
  }[]
}

export const CasesPage = ({ casestudies, ...props }: CasesPageProps) => {
  useAnimation();

  return (
    <>
      <Intro {...props} />
      <Cases
        cases={casestudies}
      />
    </>
  )
}