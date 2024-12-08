import React, { useState } from "react";
import SearchAndFilter from "./components/SearchAndFilter"
import BlogList from "./components/BlogList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOption, setSortOption] = useState("");

  const blogs = [
    { title: "Understanding React", description: "A beginner's guide to React and its core concepts.", createdBy: "Alice Johnson", date: "2024-12-01", type: "Technology", likes: 120 },
    { title: "Mastering Tailwind CSS", description: "Tips and tricks to create beautiful designs with Tailwind CSS.", createdBy: "John Doe", date: "2024-11-28", type: "Design", likes: 95 },
    { title: "Healthy Eating Habits", description: "Explore the best practices for maintaining a healthy diet.", createdBy: "Emily Clark", date: "2024-10-15", type: "Health", likes: 80 },
    { title: "Travel Guide to Paris", description: "A detailed travel guide for your next trip to Paris.", createdBy: "Michael Brown", date: "2024-09-12", type: "Travel", likes: 150 },
    { title: "The Future of AI", description: "Insights into the advancements in artificial intelligence.", createdBy: "Sophia Taylor", date: "2024-11-20", type: "Technology", likes: 180 },
    { title: "Yoga for Beginners", description: "Learn the basics of yoga to improve your physical and mental health.", createdBy: "Olivia Smith", date: "2024-08-18", type: "Health", likes: 75 },
    { title: "10 Best Coding Practices", description: "Follow these coding practices for cleaner and efficient code.", createdBy: "Chris Johnson", date: "2024-07-30", type: "Technology", likes: 200 },
    { title: "Photography 101", description: "A beginner's guide to photography techniques.", createdBy: "Emma Wilson", date: "2024-06-25", type: "Photography", likes: 85 },
    { title: "Exploring Italian Cuisine", description: "Discover the delicious world of Italian food.", createdBy: "James Carter", date: "2024-05-14", type: "Food", likes: 110 },
    { title: "Top Hiking Trails in the World", description: "Find the best hiking trails for your next adventure.", createdBy: "Ella Davis", date: "2024-03-05", type: "Travel", likes: 140 },
  ];

  const filteredBlogs = blogs
    .filter((blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((blog) => filterType === "All" || blog.type === filterType)
    .sort((a, b) => {
      if (sortOption === "Likes") return b.likes - a.likes;
      if (sortOption === "Date") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <BlogList blogs={filteredBlogs} />
    </div>
  );
};

export default App;
