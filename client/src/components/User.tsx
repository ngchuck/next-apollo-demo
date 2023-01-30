import {useQuery, gql} from "@apollo/client";
import {User} from "@/types/user";
import UseCard from "@/components/UseCard";
import styles from './Users.module.css';

const QUERY = gql`
    query GET_USERS($offset: Int, $limit: Int) {
        user(offset:$offset , limit: $limit ) {
            firstName
            lastName
            address {
                streetName
            }
            email
            phone
            age
            avatar
        }
    }
`;

export default function Users() {
  const {data, loading, fetchMore, error} = useQuery(QUERY, {
    variables: {
      offset: 0,
      limit: 12
    },
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <section className={styles.container}>
      <header>
        <h1> USERS </h1>
      </header>
      <main className={styles.main}>
        {data.user.length && data.user.map((user: User, index: number) => (
          <UseCard key={user.email} user={user}/>
        ))}
      </main>
      <footer className={styles.footer}>
        <button className={styles.button} onClick={
          () => fetchMore({
            variables: {
              offset: data.user.length
            },
          })
        }>Load More
        </button>
      </footer>
    </section>
  );
}