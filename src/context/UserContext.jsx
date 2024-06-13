import React, { createContext, useState } from "react";

const UserContext = createContext();

const userDetailsData = {
  1: {
    name: "Alice Smith",
    username: "alice",
    email: "alice@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    phoneNumber: 12334567,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
    posts: [
      {
        id: 1,
        title: "sample post",
        totalViews: 19,
        totalLikes: 2,
        popularPoints: 23,
        totalComments: 3,
        status: "Active",
        createdAt: "09/06/2024 9:44 AM",
      },
    ],
    viewFollowing: ["bob", "charlie"],
    viewFollowers: ["diana", "eve"],
    blockedUsers: ["charlie"],
  },
  2: {
    name: "Bob Johnson",
    username: "bob",
    email: "bob@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    phoneNumber: 12334567,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
    posts: [
      {
        id: 2,
        title: "sample post",
        totalViews: 19,
        totalLikes: 2,
        popularPoints: 23,
        totalComments: 3,
        status: "Active",
        createdAt: "09/06/2024 9:44 AM",
      },
    ],
    viewFollowing: [],
    viewFollowers: ["alice"],
    blockedUsers: ["charlie"],
  },
  3: {
    name: "Charlie Brown",
    username: "charlie",
    email: "charlie@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    phoneNumber: 12334567,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
    posts: [
      {
        id: 3,
        title: "sample post",
        totalViews: 19,
        totalLikes: 2,
        popularPoints: 23,
        totalComments: 3,
        status: "Active",
        createdAt: "09/06/2024 9:44 AM",
      },
    ],
    viewFollowing: ["alice"],
    viewFollowers: ["diana"],
    blockedUsers: ["alice"],
  },
  4: {
    name: "Diana Prince",
    username: "diana",
    email: "diana@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    phoneNumber: 12334567,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
    viewFollowing: [],
    viewFollowers: ["alice"],
    blockedUsers: ["charlie"],
  },
  5: {
    name: "Eve Adams",
    username: "eve",
    email: "eve@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    phoneNumber: 12334567,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
    viewFollowing: [],
    viewFollowers: ["alice", "bob"],
    blockedUsers: ["charlie"],
  },
};

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(userDetailsData);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
