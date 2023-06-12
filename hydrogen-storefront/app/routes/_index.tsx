import {useLoaderData} from '@remix-run/react';

export function meta() {
  return [
    {title: 'Hydrogen'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

export default function Index() {
  return <p>Hello from the home page!</p>;
}
