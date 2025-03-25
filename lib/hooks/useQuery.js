import { useQuery as useReactQuery } from '@tanstack/react-query'

const useQuery = (cacheKey = [], service, options = {}) => {
    async function fetchData() {
        try {
            const { data } = await service(options.data)
            if (options.afterFetch) options.afterFetch(data.data)
            return data.data
        } catch (error) {
            console.error('Error fetching items:', error)
        }
    }
    return useReactQuery({
        queryKey: cacheKey,
        queryFn: fetchData,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        ...options,
    })
}

export default useQuery
