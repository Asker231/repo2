import { ReactNode } from 'react'
import {
  TextFieldControl,
  TextFieldHint,
  TextFieldLabelRow,
  TextFieldLabelText,
  TextFieldRoot,
} from '../../style'

export type TextFieldWrapperProps = {
  /** Подпись поля */
  label?: string
  /** Опечатка в API — то же, что label */
  lable?: string
  /** Подсказка мелким шрифтом справа от подписи */
  hint?: string
  children: ReactNode
}

const TextFieldWrapper = ({
  label,
  lable,
  hint,
  children,
}: TextFieldWrapperProps) => {
  const text = label ?? lable ?? ''

  return (
    <TextFieldRoot>
      {(text || hint) && (
        <TextFieldLabelRow>
          {text ? <TextFieldLabelText>{text}</TextFieldLabelText> : null}
          {hint ? <TextFieldHint>{hint}</TextFieldHint> : null}
        </TextFieldLabelRow>
      )}
      <TextFieldControl>{children}</TextFieldControl>
    </TextFieldRoot>
  )
}

export default TextFieldWrapper
