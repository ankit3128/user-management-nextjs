"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  getUserById,
  updateUserById,
  deleteUserById,
} from "../../lib/usersApi";

export default function UserDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await getUserById(id);
        setUser(res.data);
        setForm({
          name: res.data.name,
          email: res.data.email,
        });
      } catch (err) {
        console.error(err);
      }
    };

    loadUser();
  }, [id]);

  const handleUpdate = async () => {
    const previous = user;
    const updated = { ...user, ...form };

    setUser(updated);
    setIsEditing(false);

    try {
      await updateUserById(id, updated);
    } catch (err) {
      console.error(err);
      setUser(previous); // rollback
    }
  };

  const handleDelete = async () => {
    router.push("/users");

    try {
      await deleteUserById(id);
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          User Details
        </h2>

        {!isEditing ? (
          <>
            <p className="font-medium">{user.name}</p>
            <p className="text-gray-500 mb-4">{user.email}</p>

            <div className="flex justify-between">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-3">
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full border p-2 rounded"
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border p-2 rounded"
            />

            <button
              onClick={handleUpdate}
              className="w-full bg-green-500 text-white py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}