import styled from 'styled-components'
import { Card, Select, Space, Typography } from 'antd'

/* ——— layout / страницы ——— */

export const Header = styled.header<{
  $padding: number
}>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${(props) => props.$padding}px;
  box-shadow: 5px 3px 4px 2px rgb(210, 210, 210);
`

export const Groups = styled.div<{
  $gap: number
  $alignItems: string
}>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap}px;
  align-items: ${(props) => props.$alignItems};
`

export const DealsPage = styled.div`
  padding: 24px;
  max-width: 960px;
  margin: 0 auto;
`

/* ——— Deals / Filters ——— */

export const FiltersPanel = styled(Card)`
  width: 100%;
  border-radius: 12px;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.06);

  .ant-card-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    min-height: 52px;
  }

  .ant-card-body {
    padding: 20px 24px 24px;
  }
`

export const FiltersSectionTitle = styled(Typography.Title).attrs({
  level: 3,
})`
  && {
    margin: 0;
  }
`

export const FiltersStack = styled(Space).attrs({
  direction: 'vertical',
  size: 'large',
})`
  width: 100%;
`

export const FiltersFieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px 24px;
  align-items: start;
`

export const FiltersFullRow = styled.div`
  grid-column: 1 / -1;
`

export const FiltersSelectFullWidth = styled(Select<string[]>)`
  width: 100%;
`

/* ——— TextFieldWrapper ——— */

export const TextFieldRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const TextFieldLabelRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 10px;
`

export const TextFieldLabelText = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.82);
  letter-spacing: 0.02em;
  line-height: 1.35;
`

export const TextFieldHint = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  line-height: 1.4;
`

export const TextFieldControl = styled.div`
  width: 100%;

  .ant-input,
  .ant-input-affix-wrapper,
  .ant-select .ant-select-selector,
  .ant-picker {
    border-radius: 8px;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .ant-input:focus,
  .ant-input-affix-wrapper-focused,
  .ant-select-focused .ant-select-selector {
    box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.12);
  }

  .ant-input-textarea-show-count::after {
    color: rgba(0, 0, 0, 0.35);
  }
`
