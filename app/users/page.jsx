"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllUsers, deleteUserById } from "../lib/usersApi";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await getAllUsers();
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadUsers();
  }, []);

  const removeUser = async (id) => {
    const previous = users;

    // optimistic UI
    setUsers((prev) => prev.filter((u) => u.id !== id));

    try {
      await deleteUserById(id);
    } catch (err) {
      console.error(err);
      setUsers(previous); // rollback
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Users
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>

            <div className="space-x-2">
              <Link href={`/users/${user.id}`}>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  View
                </button>
              </Link>

              <button
                onClick={() => removeUser(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}