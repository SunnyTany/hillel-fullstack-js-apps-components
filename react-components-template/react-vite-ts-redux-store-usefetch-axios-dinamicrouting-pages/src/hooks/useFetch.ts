import axios from 'axios'
import { useState, useEffect, useRef } from'react'

export const useFetch = <T>(url: string, limit?: number) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const cancelTokenSource = useRef(axios.CancelToken.source())

  useEffect(() => {
    const currentCancelTokenSource = cancelTokenSource.current

    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        setError(null)

        await new Promise((resolve) => setTimeout(resolve, 500))

        const response = await axios.get<T[]>( limit ? `${url}?_limit=${limit}` : url, {
          cancelToken: currentCancelTokenSource.token 
        })
      
        if (response.status !== 200) {
          throw new Error(`Error: Request failed with status code ${response.status}`)
        }
  
        setData(response.data) 

      } catch (error) {

        if (axios.isCancel(error)) {
          console.log(`Request canceled: ${(error as Error).message}`)
        } else {
          setError(`Error fetching posts:  ${(error as Error).message}`)
        }
        
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts().catch((error) => console.log(error))

    // return () => {
    //   currentCancelTokenSource.cancel('Operation canceled due to new request')
    // }

  }, [url, limit])

  return {data, error, isLoading}
}