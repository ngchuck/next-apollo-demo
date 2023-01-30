import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/react-testing';
import User from "@/components/User";
import { mocks } from "@/mocks/userQueryMocks";

describe('User',  () => {
  it('renders loading',  async () => {
    const component = render(
      <MockedProvider mocks={[mocks[2]]}>
        <User/>
      </MockedProvider>
    )
    jest.mock('@apollo/client', () => ({
      useQuery: jest.fn().mockReturnValue({ data: undefined, isLoading: true, error: undefined })
    }));
    expect(await component.findByText("Loading...")).toBeInTheDocument();
  });
  it('renders users',  async () => {
    const { result: { isLoading, data } } = mocks[0];

    const component = render(
      <MockedProvider mocks={[mocks[0]]}>
        <User/>
      </MockedProvider>
    )
    jest.mock('@apollo/client', () => ({
      useQuery: jest.fn().mockReturnValue({ data: data?.user, isLoading, error: undefined })
    }));
    expect(await component.findByTestId('user')).toBeInTheDocument();
  });
  it('renders error', async () => {
    const { result: { isLoading, error } } = mocks[1];
    const component = render(
      <MockedProvider mocks={[mocks[1]]}>
        <User/>
      </MockedProvider>
    )
    jest.mock('@apollo/client', () => ({
      useQuery: jest.fn().mockReturnValue({ data: undefined, isLoading, error })
    }));
    expect(await component.findByText("An error occurred")).toBeInTheDocument();
  });
})