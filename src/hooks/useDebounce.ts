import { useCallback, useRef } from "react"

export function useDebounce(callback: any, delay: number) {

  const timer = useRef<number | null>(null)

  const debouncedCallBack = useCallback((...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(()=>{
      callback(args)
    }, delay)
  }, [delay, callback])

  return debouncedCallBack
}