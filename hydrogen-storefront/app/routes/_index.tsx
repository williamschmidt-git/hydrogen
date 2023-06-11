import {useLoaderData} from '@remix-run/react';

export function meta() {
  return [
    {title: 'Hydrogen'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
  // const response = await fetch('http://localhost:3001/user/create', {
  //   method: 'POST',
  //   // eslint-disable-next-line @typescript-eslint/naming-convention
  //   headers: {'Content-type': 'application/json; charset=UTF-8'},
  //   body: JSON.stringify({
  //     username: 'username',
  //     password: 'password',
  //   }),
  // });
  // console.log(response);
  // return null;
}

export default function Index() {
  const {collections}: any = useLoaderData();
  console.log(collections);

  return <p>Hello from the home page!</p>;
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
      }
    }
  }
`;
