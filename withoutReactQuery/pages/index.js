import axios from 'axios';

const Home = ({ peoples, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  const getPage = async (url) => {
    const response = await fetch(url);
    const data = await peoples;
  }

  return (
    <>
    <ul>
      {peoples.results.map(people => (
        <li>{people.name} {people.starships}</li>
      ))}
    </ul>
    {peoples && (peoples.next || peoples.previous) ? (
        <div>
          <button
            disabled={!peoples.previous}
            onClick={() => getPage(peoples.previous)}
          >
            Previous page
          </button>
          <button
            disabled={!peoples.next}
            onClick={() => getPage(peoples.next)}
          >
            Next page
          </button>
        </div>
      ) : null}
    {console.log(peoples.prev)}
    </>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://swapi.dev/api/people/');
    const peoples = res.data;
    return { peoples };
  } catch (error) {
    return { error };
  }
};

export default Home;
 