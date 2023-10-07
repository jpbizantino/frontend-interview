import useMediaQuery from '@mui/material/useMediaQuery'
import { Breakpoint, useTheme } from '@mui/material/styles'
import { useSyncExternalStore } from 'react'

export const getSize = (
  expectedStart: Breakpoint,
  expectedEnd: Breakpoint
): boolean => {
  const theme = useTheme()

  const returnSize = useMediaQuery(
    theme.breakpoints.between(expectedStart, expectedEnd)
  )

  return returnSize
}

export function useWindowDimensions() {
  // the 3rd parameter is optional and only needed for server side rendering
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function subscribe(callback: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (this: Window, ev: UIEvent): any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (this: Window, ev: UIEvent): any
}) {
  window.addEventListener('resize', callback)
  return () => window.removeEventListener('resize', callback)
}

function getSnapshot() {
  return { width: window.innerWidth, height: window.innerHeight }
}

function getServerSnapshot() {
  return {
    width: 0,
    height: 0,
  }
}
