import React from 'react'
import { cn } from './lib/utils'


interface DivProps extends React.ComponentPropsWithoutRef<"div"> {}

const CustomCard = ({className, children, ...otherProps}: DivProps) => {

  return (
    <div className={cn('p-7 bg-customCard rounded-2xl', className)} {...otherProps}>
        {children}
    </div>
  )
}

export default CustomCard