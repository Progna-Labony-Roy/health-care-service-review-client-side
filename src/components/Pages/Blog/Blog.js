import React from "react";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="m-16">
        <h4 className="text-xl font-semibold italic my-5">
          Difference between SQL and NoSQL
        </h4>

        <li>
          SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS
          or Relational Databases, whereas NoSQL is a Non-relational or
          Distributed Database.
        </li>
        <li>
          Comparing SQL vs NoSQL databases, SQL databases are table-based
          databases, whereas NoSQL databases can be document-based, key-value
          pairs, and graph databases.
        </li>
        <li>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </li>
        <li>
          SQL databases have a predefined schema, whereas NoSQL databases use a
          dynamic schema for unstructured data.
        </li>
        <li>
          Comparing NoSQL vs SQL performance, SQL requires specialized DB
          hardware for better performance while NoSQL uses commodity hardware.
        </li>
      </div>
      <div className="m-16">
        <h4 className="text-xl font-semibold italic my-5">
          What is JWT, and how does it work?
        </h4>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <p>The following workflow explains the authentication flow:</p>
        <li>User sign-in using username and password.</li>
        <li>
          The authentication server verifies the credentials and issues a JWT
          signed using a private key.
        </li>
        <li>
          Moving forward, the client will use the JWT to access protected
          resources by passing the JWT in the HTTP Authorization header.
        </li>
        <li>
          The resource server then verifies the authenticity of the token using
          the public key.
        </li>
      </div>
      <div className="m-16">
        <h4 className="text-xl font-semibold italic my-5">
          What is the difference between javascript and NodeJS?
        </h4>
        <p>Difference between JavaScript and Node.js</p>
        <li>
          JavaScript is a proper high-level programming language used to create
          web scripts whereas Node.js is a run time environment built on
          google’s v8 engine.
        </li>
        <li>
          JavaScript is executed in the browser whereas using Node.js gives us
          the ability to execute JavaScript outside the browser.
        </li>
        <li>
          JavaScript can manipulate DOM or add HTML within whereas Node.js
          doesn’t have the capability to add HTML.
        </li>
        <li>
          JavaScript is mainly used to create front end web applications or
          develop client-side whereas Node.js is used on the back end
          development that is server-side development
        </li>
        <li>
          JavaScript follows the standard of JavaScript when writing programs
          whereas Node.js is written in C++ while using the v8 engine, it runs
          JavaScript outside the browser.
        </li>
      </div>
      <div className="m-16">
        <h4 className="text-xl font-semibold italic my-5">
          How does NodeJS handle multiple requests at the same time?
        </h4>
        <li>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </li>
      </div>
    </div>
  );
};

export default Blog;
