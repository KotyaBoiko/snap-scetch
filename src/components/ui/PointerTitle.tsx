import { FC } from 'react'
import Pointer from './Pointer'

type Props = {
  title: string
}

const PointerTitle:FC<Props> = ({title}) => {
  return (
    <div className="flex gap-3 items-center mb-10">
    <Pointer />
    <h1 className="text-7xl font-semibold">{title}</h1>
  </div>
  )
}

export default PointerTitle