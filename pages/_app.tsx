import { QueryClient, QueryClientProvider, QueryFunctionContext } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import makeRequest from '../src/gg/adaptor/api/http'
import GlobalStyle from '../src/gg/adaptor/web/assets/styles/global.styled'

const theme: DefaultTheme = {
  colors: {
    primary: '#444444',
    secondary: '#efefef',
  },
}

const queryClient = new QueryClient()
// {
//   defaultOptions: {
//     queries: {
//       useErrorBoundary: true,
//       suspense: true,
//       queryFn: () => null,
//       // queryFn: ({ queryKey: [url, data] }: QueryFunctionContext) =>
//       //   makeRequest({ method: "get", url: url as string, data }).then(
//       //     ({ data }) => data
//       //   ),
//     },
//     mutations: {
//       useErrorBoundary: true,
//       networkMode: 'offlineFirst',
//     },
//   },
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
