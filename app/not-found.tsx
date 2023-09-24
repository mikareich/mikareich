import { Heading1, Text } from '@/components/Typography'

export const metadata = {
  title: 'Mika Reich | Page not found',
  description: 'The page you are looking for does not exist',
}

export default async function NotFound() {
  return (
    <>
      <Heading1>Page not found</Heading1>
      <Text>The page you are looking for does not exist 😕</Text>
    </>
  )
}
