import { useMantineTheme } from '@mantine/core';

import type { IconProps } from './types';

const IconSearch = ({ height, active, ...others }: IconProps) => {
  const theme = useMantineTheme();
  let stroke;
  if (active) stroke = theme.colors.purple[0];
  else
    stroke =
      theme.colorScheme === 'dark'
        ? theme.colors.text[0]
        : theme.colors.text[1];

  return (
    <svg
      height={height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <path
        d="M8.5 14C11.5376 14 14 11.5376 14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18L13 13"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { IconSearch };
