import {ReactNode} from 'react';

export interface ButtonPropsInterface {
  onClick: () => void
  children: ReactNode
  title: string
  disabled: boolean
  type: 'button' | 'submit' | 'reset'
}