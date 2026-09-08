import { useQuery } from "@tanstack/react-query";

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Users fetch nahi ho paaye");
  }

  return response.json();
}

function UserList() {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <p>UserList: Loading ...</p>;
  }

  if (error) {
    return <p>Error is: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-center text-xl sm:text-2xl">User Component:</h2>
      {isFetching && <p>Background Refresh...</p>}
      <ul className="border max-w-[300px] sm:max-w-xl mx-auto rounded-lg py-3 px-2 m-5">
        {data.map((user) => {
          return (
            <li
              className="text-center *:text-xs *:sm:text-sm *:md:text-lg"
              key={user.id}
            >
              {user.name} - {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function App() {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <div>
      <h1 className="bg-black text-center text-white text-xl py-3">
        Employee Directory
      </h1>
      <div className="my-4 mx-auto rounded-lg flex-column items-center justify-center border max-w-[200px] sm:max-w-xs p-2 border-gray-500">
        <p className="text-md sm:text-lg text-center">
          isLoading: {String(isLoading)}
        </p>
        <p className="text-md sm:text-lg text-center">
          isFetching: {String(isFetching)}
        </p>
      </div>
      <div className="my-4 mx-auto rounded-lg flex-column items-center justify-center border max-w-[200px] sm:max-w-xs p-2 border-gray-500">
        <p className="text-md sm:text-lg text-center">
          error: {error ? error.message : "null"}
        </p>
        <p className="text-md sm:text-lg text-center">
          data: {data ? `${data.length} users` : "null"}
        </p>
      </div>
      <UserList />
      <UserList />
    </div>
  );
}

export default App;
