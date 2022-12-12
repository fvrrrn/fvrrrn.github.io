import { MutableRefObject, useEffect, useMemo, useState } from 'react'

export const useIsInViewport = (ref: MutableRefObject<Element | null>) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  const observer = useMemo(
    () =>
      isMounted && new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)),
    [isMounted]
  )

  useEffect(() => {
    if (!ref.current || !observer) return

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
