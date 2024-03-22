// pages/[page].tsx
import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";

interface PageProps {
  page: string;
}

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <Layout>
      <div>
        <h1>Page {page}</h1>
        {/* Your content here */}
      </div>
    </Layout>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { page } = params;
  return {
    props: {
      page,
    },
  };
};
