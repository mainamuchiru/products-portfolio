import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import SearchBar from "./SearchBar";
import ProjectForm from "./ProjectForm";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const filteredProjects = projects.filter((p) =>
    searchText === "" ? true : p.title.toLowerCase().includes(searchText),
  );

  const addDetails = () => {
    if (!title.trim() || !description.trim()) {
      setError("Both title and description are required.");
      return;
    }
    setError("");
    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      image: image
    };
    setProjects((prev) => [newProject, ...prev]);
    setTitle("");
    setDescription("");
    setImage("");
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div>
      <ProjectForm
        title={title}
        description={description}
        image={image}
        error={error}
        onTitleChange={(e) => setTitle(e.target.value)}
        onDescriptionChange={(e) => setDescription(e.target.value)}
        onImageChange={handleImageChange}
        onAdd={addDetails}
      />

      <SearchBar
        value={searchText}
        onChange={(e) => setSearchText(e.target.value.toLowerCase())}
      />

      <ProjectList
        projects={filteredProjects}
        onDelete={deleteProject}
        isSearching={searchText !== ""}
      />
    </div>
  );
}

export default AddProject;
