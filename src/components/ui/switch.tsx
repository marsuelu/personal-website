import { type FC } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { type SwitchProps } from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

interface SwitchComponentProps {
  id?: string;
  label?: string;
  onCheckedChange: SwitchProps['onCheckedChange'];
  checked: boolean;
  rootClassNames?: string;
  thumbClassNames?: string;
  theme?: 'light' | 'dark'; // Add theme prop
}

const themeStyles = {
  light: {
    root: 'bg-gray-200 border border-gray-400 data-[state=checked]:bg-fuchsia-600',
    thumb: 'bg-white border border-gray-400 data-[state=checked]:bg-fuchsia-100',
    label: 'text-gray-900',
  },
  dark: {
    root: 'bg-gray-700 border border-gray-500 data-[state=checked]:bg-fuchsia-600',
    thumb: 'bg-gray-900 border border-gray-500 data-[state=checked]:bg-fuchsia-300',
    label: 'text-white',
  },
};

const Switch: FC<SwitchComponentProps> = ({
  id = '',
  label,
  onCheckedChange,
  checked,
  rootClassNames,
  thumbClassNames,
  theme = 'light', // Default to light
}) => {
  const styles = themeStyles[theme];
  return id ? (
    <div className="flex items-center">
      <label className={cn('pr-[15px] text-[15px] leading-none', styles.label)} htmlFor={id}>
        {label}
      </label>
      <SwitchPrimitive.Root
        className={cn(
          'relative h-[25px] w-[42px] cursor-pointer rounded-full transition-colors duration-150 outline-none',
          styles.root,
          rootClassNames
        )}
        id={id}
        onCheckedChange={onCheckedChange}
        checked={checked}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            'block size-[21px] translate-x-0.5 rounded-full transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]',
            styles.thumb,
            thumbClassNames
          )}
        />
      </SwitchPrimitive.Root>
    </div>
  ) : (
    <SwitchPrimitive.Root
      className={cn(
        'relative h-[25px] w-[42px] cursor-pointer rounded-full transition-colors duration-150 outline-none',
        styles.root,
        rootClassNames
      )}
      onCheckedChange={onCheckedChange}
      checked={checked}
      onClick={(e) => e.stopPropagation()}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'block size-[21px] translate-x-0.5 rounded-full transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]',
          styles.thumb,
          thumbClassNames
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
