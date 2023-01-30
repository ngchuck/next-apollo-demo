import { render } from '@testing-library/react'
import UserCard from "@/components/UserCard";
import { MOCK_USER } from "@/mocks/user";


it('renders UserCard unchanged', () => {
  const { container } = render(<UserCard user={MOCK_USER}/>)
  expect(container).toMatchSnapshot()
});