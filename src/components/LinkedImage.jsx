import React from 'react'

const SIZE_MAP = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-[1.875rem] h-[1.875rem]',
  lg: 'w-[3.125rem] h-[3.125rem]',
  xl: 'w-[4rem] h-[4rem]',
}

export default function LinkedImage({
  href,
  src,
  alt = '',
  size = 'md',
  imgClassName, // optional override
  ariaLabel,
  className = '',
  iconOnly = false,
  children,
  ...props
}) {
  // Determine img classes: explicit imgClassName takes precedence, otherwise size mapping
  const computedImgClass = imgClassName
    ? imgClassName
    : `${SIZE_MAP[size] ?? SIZE_MAP.md} flex-shrink-0 aspect-[1/1]`

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={`flex items-center gap-2 ${className}`} {...props}>
      <img src={src} alt={alt} className={computedImgClass} />
      {!iconOnly && children ? <span className="text-sm">{children}</span> : null}
    </a>
  )
}
