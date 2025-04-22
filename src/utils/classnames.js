// src/utils/classnames.js

export function cn(...args) {
    return args
      .flatMap((arg) =>
        typeof arg === 'object'
          ? Object.entries(arg)
              .filter(([_, val]) => Boolean(val))
              .map(([key]) => key)
          : [arg]
      )
      .filter(Boolean)
      .join(' ');
  }
  