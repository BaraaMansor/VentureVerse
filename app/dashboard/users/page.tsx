import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <h2>Users Dashboard</h2>
      <ul>
        <li>
          <Link href={"dashboard/users/1"}> User one </Link>
        </li>
        <li>User two</li>
        <li>User three</li>
      </ul>
    </div>
  );
};

export default Users;
