import { useCallback, useEffect, useState } from 'react'

export const useScrolledToPosition = (position: number) => {
  const [scrolledToPosition, setScrolledToPosition] = useState(true)

  const handleScroll = useCallback(() => setScrolledToPosition(window.scrollY < position), [position])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, position])

  return scrolledToPosition
}
