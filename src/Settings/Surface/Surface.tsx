import { ShadowStyle } from "./fragments"
import { Section } from "../../components"
import { CenterLayout } from "../fragments/CenterLayout"
import { BorderRadiusSlider } from "./fragments/BorderRadiusSlider"
import { MaxWidthSlider } from "./fragments/MaxWidthSlider"

export const Surface = () => {
  return (
    <Section title="Surface">
      <CenterLayout>
        <MaxWidthSlider />
        <BorderRadiusSlider />
      </CenterLayout>
      <ShadowStyle />
    </Section>
  )
}
