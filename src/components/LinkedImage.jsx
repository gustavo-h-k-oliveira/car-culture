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
  // enable/disable glow halo on hover (Tailwind-only implementation)
  glow = true,
  children,
  ...props
}) {
  // Determine img classes: explicit imgClassName takes precedence, otherwise size mapping
  const computedImgClass = imgClassName
    ? imgClassName
    : `${SIZE_MAP[size] ?? SIZE_MAP.md} flex-shrink-0 aspect-[1/1]`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`relative inline-flex items-center gap-2 group ${className}`}
      {...props}
    >
      {/* glow halo (only for icon-only usages) */}
      {iconOnly && glow && (
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-red-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-80 pointer-events-none" />
      )}

      <img src={src} alt={alt} className={`${computedImgClass} relative z-10`} />

      {!iconOnly && children ? <span className="text-sm">{children}</span> : null}
    </a>
  )
}
