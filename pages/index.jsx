import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Home = () => (
  <div>
    <Head>
      <title>
        485 Visa Insurance | Compare Multiple Providers In One Place
      </title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>

    <h1>Test</h1>
  </div>
);

const getProtocol = host => {
  if (process.env.NODE_ENV === "production") return `https://${host}`;

  return `http://${host}`;
};

Home.getInitialProps = async ({ req, query }) => {
  const host = ((req || {}).headers || {}).host;

  const safetyHost = host || "https://485visainsurance.com.au";

  const protocol = getProtocol(safetyHost);

  const table = query.table || "budget_hospital_family";

  const res = await fetch(
    `${protocol}/api/products/485-visa-health-insurance/${table}`
  );
  const data = await res.json();

  return { data };
};

export default Home;
