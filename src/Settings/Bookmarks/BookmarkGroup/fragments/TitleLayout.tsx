import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const TitleLayout = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    gap: ${space.small};
  `}
`
