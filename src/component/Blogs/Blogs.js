import React from "react";
import "./Blogs.css";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <div className="qna mx-auto mt-3">
        <h2>Difference between authorization and authentication</h2>
        <Table striped bordered hover className="my-table">
          <thead>
            <tr>
              <th>Authentication</th>
              <th>Authorization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Authentication verifies user.</td>
              <td>user's authorities are checked to access resources.</td>
            </tr>
            <tr>
              <td>Authentication works through passwords, OTP, etc.</td>
              <td>
                Authorization works through processes determined by the author.
              </td>
            </tr>
            <tr>
              <td>Authentication is done before the authorization process</td>
              <td>Authorization always takes place after authentication.</td>
            </tr>
            <tr>
              <td>Authentication is visible to the users.</td>
              <td>Authorization is not visible to the users.</td>
            </tr>
            <tr>
              <td>
                for example, we log in facebook to see the posts or day of our
                friends.
              </td>
              <td>
                After log in, facebook decided how many things we can see of our
                friends account.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="qna mx-auto">
        <h2>why we use firebase</h2>
        <p className=" text-start">
          Firebase is a fantastic authentication service. For many useful tools
          and features, we use firebase. Such as, we can Sync real time data in
          the application, can create Application without backend server.
          Firebase is faster then any services. Other useful features it
          provides are analytics, crash reports, cloud storage. <br /> The best
          part is that it earns users trust and increases professionalism and
          user experiences.
        </p>
        <h4 className="text-start">
          What other options do you have to implement authentication
        </h4>
        <ul className="text-start">
          <li>Auth0</li>
          <li>MongoDB</li>
          <li>Passport</li>
          <li>Okta</li>
          <li>JSON Web Token</li>
          <li>Amazon Cognito</li>
          <li>Keycloak</li>
        </ul>
      </div>
      <div className="qna mx-auto">
        <h2>Other services does firebase provide other than authentication</h2>
        <p className="text-start">
          firebase is a fantastic solution to many services developers desired.
          We use firebase for authentication purposes. Firebase provides many
          more services. such as, 
        </p>
        <ul className="text-start">
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Authentication</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
