"use client"

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import {
  Trash2,
  Search,
  Package,
  MessageCircle,
  BarChart3,
  Settings
} from "lucide-react";
import AddPromotion from "./addPromotions";

const API = "https://airflow-backend-a2bm.onrender.com";

interface Service {
  _id: string;
  name: string;
  price?: number;
  description:string,
  status: "active" | "inactive";
}

interface Message {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: "Unread" | "Read";
}



const AdminDashboard = () => {

  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const [services, setServices] = useState<Service[]>([]);
  const [serviceData, setServiceData] = useState<Partial<Service>>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  type ImageType =
  | "hero"
  | "about"
  | "airduct"
  | "dryer"
  | "ac"
  | "chimney";
  
  type ServiceStatus = "active" | "inactive";

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {

    const fetchServices = async () => {
      try {
        const res = await fetch(`${API}/api/services`);
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();

  }, []);


  useEffect(() => {

    const fetchMessages = async () => {
      try {
        const res = await fetch(`${API}/api/messages`);
        const data = await res.json();
        const sorted = data.sort(
          (a: { updatedAt: string }, b: { updatedAt: string }) =>
            new Date(b.updatedAt).getTime() -
            new Date(a.updatedAt).getTime()
         );
        setMessages(sorted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();

  }, []);

  const handleDeleteService = async (id: string) => {

    try {

      await fetch(`${API}/api/services/${id}`, {
        method: "DELETE"
      });

      setServices(services.filter(s => s._id !== id));

    } catch (err) {
      console.error(err);
    }

  };


  const handleMarkAsRead = async (id: string) => {

    try {

      await fetch(`${API}/api/messages/${id}`, {
        method: "PUT"
      });

      setMessages(messages.map(m =>
        m._id === id ? { ...m, status: "Read" } : m
      ));

    } catch (err) {
      console.error(err);
    }

  };

  const handleImageUpload = async (url: string, type: ImageType, name: string) => {
    if (!url) return;

    try {
      const res = await fetch(`${API}/api/images/upload-image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, url, type }),
      });

      const data = await res.json();
      console.log("Saved:", data);
    } catch (err) {
      console.error(err);
    }
  };


  const fetchServices = async () => {
    try {
      const res = await fetch(`${API}/api/services`);
      const data = await res.json();
      setServices(data); // make sure you have this state
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
};

useEffect(() => {
  fetchServices();
}, []);

const handleUpdateService = async () => {
  try {
    await fetch(`${API}/api/services/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    });
    
    // Refresh list after update
    fetchServices();

    // Reset form
    setEditingId(null);
    setServiceData({});
  } catch (error) {
    console.error("Update failed:", error);
  }
};

  const handleEdit = (service: Service) => {
    setServiceData(service);
    setEditingId(service._id);
  };

  const filteredServices = services.filter(service =>
    service.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMessages = messages.filter(msg =>
    msg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoggedIn)
    return (
      <div className="min-h-screen bg-gray-50">

        {/* SIDEBAR */}

          <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
            <h1 className="text-2xl font-bold text-blue-500">
              Admin Panel
            </h1>
              <button onClick={() => setSidebarOpen(true)} className="text-blue-400 text-xl">
                ☰
              </button>
          </div>

<div className={`fixed left-0 top-0 h-full w-52 md:w-64 
bg-white/10 backdrop-blur-md
shadow-lg border-r border-white/20
transform transition-transform duration-300
${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
md:translate-x-0 md:block`}>

              <div className="md:hidden flex justify-end p-4">
              <button onClick={() => setSidebarOpen(false)} className="text-blue-400">
                ✕ Close
              </button>
            </div>

          <nav className="mt-6 px-4 space-y-2 text-blue-400">

            <button
              onClick={() => setActiveTab("dashboard")}
              className="flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <BarChart3 size={20} className="mr-3" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className="flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <Package size={20} className="mr-3" />
              Services
            </button>

            <button
              onClick={() => setActiveTab("messages")}
              className="flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <MessageCircle size={20} className="mr-3" />
              Messages
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {messages.filter(m => m.status === "Unread").length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className="flex items-center w-full px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <Settings size={20} className="mr-3" />
              Settings
            </button>

          </nav>

        </div>

        {/* MAIN CONTENT */}

        <div className="ml-0 md:ml-64 p-4 md:p-6">

          {/* HEADER */}

          <div className="flex justify-between mb-6">

            <h2 className="text-3xl font-bold capitalize">
              {activeTab}
            </h2>

            <div className="relative focus-within:ring-2 focus-within:ring-blue-400 rounded-xl">

              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 md:w-5 md:h-5"
              />

              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-32 sm:w-48 md:w-64 pl-9 md:pl-10 pr-3 md:pr-4 py-2 border rounded-lg text-blue-600 focus:outline-none text-sm md:text-base"
              />
            </div>

          </div>

          {/* DASHBOARD */}

          {activeTab === "dashboard" && (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-blue-400">

              <div className="bg-white p-6 rounded-lg shadow">
                <h3>Total Services</h3>
                <p className="text-3xl">{services.length}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3>Total Messages</h3>
                <p className="text-3xl">{messages.length}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3>Unread Messages</h3>
                <p className="text-3xl">
                  {messages.filter(m => m.status === "Unread").length}
                </p>
              </div>

            </div>

          )}

          {/* SERVICES */}

{activeTab === "services" && (
  <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
    <table className="min-w-[700px] w-full border-collapse">
      
      {/* Header */}
      <thead className="rounded-xl bg-gray-50 text-gray-500 text-sm uppercase">
          <tr>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Price</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Description</th>
              <th className="text-left px-6 py-3">Action</th>
          </tr>
      </thead>

      {/* Body */}
        <tbody className="text-blue-500 divide-y divide-blue-50">
          {filteredServices.map(service => (
            <tr
              key={service._id}
              className="bg-white hover:bg-blue-50 transition duration-200"
            >
              
              {/* Name */}
              <td className="px-6 py-4 font-semibold text-blue-500">
                {service.name}
              </td>

              {/* Price */}
              <td className="px-6 py-4 text-blue-500 font-medium">
                ${service.price}
              </td>

              {/* Status */}
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    service.status === "active"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-blue-50 text-blue-400"
                  }`}
                >
                  {service.status}
                </span>
              </td>

              {/* Description */}
              <td className="px-6 py-4 text-blue-500 max-w-xs truncate">
                {service.description}
              </td>

              {/* Action */}
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDeleteService(service._id)}
                  className="text-blue-500 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition"
                >
                  <Trash2 size={18} />
                </button>
              </td>

            </tr>
          ))}
        </tbody>

          </table>
        </div>
      )}

          {/* MESSAGES */}

          {activeTab === "messages" && (

            <div className="space-y-3 md:space-y-4 text-blue-400">

              {filteredMessages.map(msg => (

                <div
                  key={msg._id}
                  className="bg-white p-4 md:p-6 rounded-lg shadow border"
                >

                  <h4 className="font-semibold">{msg.name}</h4>
                  <p className="text-gray-500">{msg.email}</p>
                  <p className="text-gray-500">{msg.phone}</p>

                  <h5 className="mt-2">{msg.subject}</h5>
                  <p className="text-gray-600">{msg.message}</p>

                  {msg.status === "Unread" && (

                    <button
                      onClick={() => handleMarkAsRead(msg._id)}
                      className="mt-3 bg-blue-500 text-gray-100 px-4 py-1 rounded"
                    >
                      Mark as Read
                    </button>

                  )}

                </div>

              ))}

            </div>

          )}

          {/* SETTINGS */}

{activeTab === "settings" && (

    <div className="bg-white p-4 md:p-6 rounded-xl shadow space-y-4 md:space-y-6 text-blue-400">

    <h2 className="text-xl font-semibold text-blue-500">
      Manage Website Images
    </h2>

  {/* Hero Image */}


<div>
  <label className="block text-sm font-medium text-blue-500 mb-2">
    Hero Section Image..
  </label>
  <input
    type="text"
    placeholder="Paste Google Drive URL"
    onChange={(e) => handleImageUpload(e.target.value, "hero", "hero-banner")}
    className="block w-full text-sm text-gray-600 rounded-lg border px-4 py-2 md:text-base px-3 md:px-4 py-2"
  />
</div>

  {/* About Background */}
  <div>
    <label className="block text-sm font-medium text-blue-500 mb-2">
      About Us Background
    </label>
    <input
      type="text"
      placeholder="Paste About Us Background URL"
      onChange={(e) => handleImageUpload(e.target.value, "about", "about-bg")}
      className="block w-full text-sm text-gray-600 rounded-lg border px-4 py-2 md:text-base px-3 md:px-4 py-2"
    />
  </div>

  {/* Services */}
      <div>
        <label className="block text-sm font-medium text-blue-500 mb-2">
          Air Duct Cleaning Image
        </label>
        <input
          type="text"
          placeholder="Paste Google Drive URL"
          onChange={(e) => handleImageUpload(e.target.value, "airduct", "airduct-img")}
          className="block w-full text-sm text-gray-600 rounded-lg border px-4 py-2 md:text-base px-3 md:px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-500 mb-2">
          Dryer Vent Cleaning Image
        </label>
        <input
          type="text"
          placeholder="Paste Google Drive URL"
          onChange={(e) => handleImageUpload(e.target.value, "dryer", "dryer-img")}
          className="block w-full text-sm text-gray-600 rounded-lg border px-4 py-2 md:text-base px-3 md:px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-500 mb-2">
          Wall-mounted AC Cleaning Image
        </label>
        <input
          type="text"
          placeholder="Paste Google Drive URL"
          onChange={(e) => handleImageUpload(e.target.value, "ac", "ac-img")}
          className="block w-full text-sm text-gray-600 rounded-lg border px-4 py-2 md:text-base px-3 md:px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-500 mb-2">
          Chimney Sweeping Image
        </label>
        <input
          type="text"
          placeholder="Paste Google Drive URL"
          onChange={(e) => handleImageUpload(e.target.value, "chimney", "chimney-img")}
          className="block w-full text-sm text-gray-600 rounded-lg border px-4 py-2 md:text-base px-3 md:px-4 py-2"
        />
      </div>

      {/* services management  */}

          <div className="bg-white p-6 rounded-xl shadow space-y-6 mt-8">

      <h2 className="text-xl font-semibold text-blue-500">
        Update Services
      </h2>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service._id}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-blue-500">{service.name}</h3>
              <p className="text-sm text-gray-500"><ReactMarkdown>{service.description}</ReactMarkdown>   </p>
              <p className="text-sm text-gray-700">Price: ${service.price}</p>
              <p
                className={`text-sm ${
                  service.status === "active"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {service.status}
              </p>
            </div>

            <button
              onClick={() => handleEdit(service)}
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Edit Form */}
      {editingId && (
        <div className="border-t pt-6 space-y-4">

          <h3 className="text-lg font-semibold text-blue-500">
            Edit Service
          </h3>

          <input
            type="text"
            value={serviceData.name}
            onChange={(e) =>
              setServiceData({ ...serviceData, name: e.target.value })
            }
            className="w-full border px-4 py-2 rounded-lg text-blue-500 font-medium outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            value={serviceData.description}
            onChange={(e) =>
              setServiceData({ ...serviceData, description: e.target.value })
            }
            className="w-full border px-4 py-2 rounded-lg text-blue-500 font-medium outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            value={serviceData.price}
            onChange={(e) =>
              setServiceData({ ...serviceData, price: parseFloat(e.target.value) || 0 })
            }
            className="w-full border px-4 py-2 rounded-lg text-blue-500 font-medium outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={serviceData.status}
            onChange={(e) =>
              setServiceData({ ...serviceData, status: e.target.value as ServiceStatus })
            }
            className="w-full border px-4 py-2 rounded-lg text-blue-500 font-medium outline-none focus:ring-2 
            focus:ring-blue-400 border-gray-300"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <div className="flex gap-4">
            <button
              onClick={handleUpdateService}
              className="bg-orange-400 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              Save Changes
            </button>

            <button
              onClick={() => setEditingId(null)}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>

        </div>
      )}

    </div>

    <AddPromotion /> 

      {/* Logout Button */}
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
      >
        Logout
      </button>

    </div>

    )}

  </div>
      </div>
  );
  
  
  return(
    <>
      <div className="flex items-center justify-center h-screen">

          <a
            href="/login"
            className="bg-blue-500 text-white px-6 py-3 rounded"
          >
            Login Please
          </a>

      </div>
    </>
  );

}
export default AdminDashboard;