import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout
      title="Load Balancer Simulator & Visualizer"
      description="Professional documentation for the Load Balancer Simulator"
    >
      <main
        style={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "60px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>
          Load Balancer Simulator & Visualizer
        </h1>

        <p style={{ fontSize: "1.2rem" }}>
          Interactive simulation of modern load balancing algorithms using
          Spring Boot, Next.js, WebSockets, and Docker.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link
            className="button button--primary button--lg"
            to="/docs"
          >
            Read Documentation →
          </Link>
        </div>
      </main>
    </Layout>
  );
}