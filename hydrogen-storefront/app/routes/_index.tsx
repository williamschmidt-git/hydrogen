import {useLoaderData} from '@remix-run/react';
import LoginIndexPage from './Login._index';

export function meta() {
  return [
    {title: 'Hydrogen'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

export default function Index() {
  return <LoginIndexPage />;
}
