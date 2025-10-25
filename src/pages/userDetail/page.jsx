import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Globe, Building, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// Example static data — in real app, fetch from API based on `id`
const mockData = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

export default function UserDetail() {
  const { id } = useParams();

  // In real usage: fetch user data using id
  const user = mockData; // replace later with API response

  if (!user) return <p className="text-center mt-10 text-gray-500">User not found.</p>;

  return (
    <div className="flex justify-center p-4">
        <Card className="w-full max-w-2xl shadow-md">
        {/* Header Section */}
        <CardHeader>
  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-4">
    {/* Avatar - Shows first on mobile, right side on desktop */}
    <div className="flex justify-center sm:justify-end sm:order-2">
      <Avatar className="h-16 w-16 sm:h-14 sm:w-14">
        <AvatarImage
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            user.name
          )}&background=2563eb&color=fff`}
          alt={user.name}
        />
        <AvatarFallback>
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>

    {/* Name and Username - Shows second on mobile, left side on desktop */}
    <div className="text-center sm:text-left sm:order-1">
      <CardTitle className="text-2xl font-semibold">{user.name}</CardTitle>
      <p className="text-sm text-green-600 font-semibold dark:font-normal dark:text-green-500">
        @{user.username}
      </p>
    </div>
  </div>
</CardHeader>

        {/* Content Section */}
        <CardContent className="space-y-4">
          <Separator />

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Globe size={16} />
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {user.website}
              </a>
            </div>
          </div>

          <Separator />

          {/* Address */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Address</h3>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              <span>
                {user.address.street}, {user.address.suite}, {user.address.city} -{" "}
                {user.address.zipcode}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
            </p>
          </div>

          <Separator />

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Company Details</h3>
            <div className="flex items-center gap-2 text-sm">
              <Building size={16} />
              <span>{user.company.name}</span>
            </div>
            <p className="text-sm text-gray-600 italic">
              “{user.company.catchPhrase}”
            </p>
            <p className="text-xs text-gray-500">{user.company.bs}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
