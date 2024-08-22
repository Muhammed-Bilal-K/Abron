import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../api/admin';

const AdminTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers();
                console.log(data);
                
                setUsers(data);
            } catch (error) {
                console.error('Error loading users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-6">Applicant List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="w-full bg-gray-100 text-gray-600 border-b border-gray-200">
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Email</th>
                            <th className="py-2 px-4 text-left">Phone</th>
                            <th className="py-2 px-4 text-left">Skills</th>
                            <th className="py-2 px-4 text-left">Experience</th>
                            <th className="py-2 px-4 text-left">Resume</th>
                            <th className="py-2 px-4 text-left">Cover Letter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{user.phone}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{user.skills}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{user.experience}</td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <a href={user.resume} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Resume</a>
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">{user.coverLetter}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTable;
