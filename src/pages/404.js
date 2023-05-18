import Link from 'next/link';
import tw from 'twin.macro';

const Container = tw.div`
  h-screen flex flex-col items-center justify-center
`;

const Title = tw.h1`
  text-4xl font-bold mb-4
`;

const Description = tw.p`
  text-lg text-center
`;

const BackButton = tw.button`
  mt-8 px-6 py-4 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700
`;

export default function Custom404() {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Description>
        Sorry, the page you are looking for cannot be found.
      </Description>
      <Link href="/">
        <BackButton>Go back to Home</BackButton>
      </Link>
    </Container>
  );
}
