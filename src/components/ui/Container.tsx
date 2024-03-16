import classNames from 'classnames';
import React from 'react'

type ContainerProps = React.ComponentPropsWithoutRef<'div'>


export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function MainContainer ({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={classNames('px-4 sm:px-8 lg:px-12', className)} {...props}>
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    )
  }
)
