import { useQuery, gql } from "@apollo/client";
import { User } from "@/types/user";

const QUERY = gql`
  query GET_USERS {
    user {
      firstName
      address {
          streetName
      }
      age
      lastName
    }
  }
`;

export default function Users() {
  const {data, loading, error} = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const users = data.user.slice(0, 100);

  return (
    <section>
      {users.length && users.map((user: User, index: number) => (
        <div key={index}>
          <h3>{user.firstName}</h3>
          <p>{user.lastName} - {user.age}</p>
        </div>
      ))}
    </section>
  );
}