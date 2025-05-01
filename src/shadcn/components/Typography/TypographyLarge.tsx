import { cn } from '@shadcn/lib/utils';
import { FC, ComponentProps } from 'react';

export const TypographyLarge: FC<ComponentProps<'div'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </div>
  );
};
