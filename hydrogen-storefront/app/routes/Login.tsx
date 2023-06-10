import {Outlet, useLoaderData} from '@remix-run/react';
// import LoginPage from '~/components/LoginPage';

// export const loader = async () => {
//   // const response = await fetch('http://localhost:3001/user/create', {
//   //   method: 'POST',
//   //   // eslint-disable-next-line @typescript-eslint/naming-convention
//   //   headers: {'Content-type': 'application/json; charset=UTF-8'},
//   //   body: JSON.stringify({
//   //     username: 'username',
//   //     password: 'password',
//   //   }),
//   // });
// };

export default function LoginRoute() {
  // const data = useLoaderData<typeof loader>();
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
