import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-[100vh] text-xl">
      This is Error Page &nbsp;
      <Link to="/" className="text-2xl font-semibold text-red-600 underline">
        Click here
      </Link>{' '}
      &nbsp; to go to Home page
    </div>
  );
}

export default ErrorPage;
