'use client';
import { useState, useEffect } from 'react';
import { createClient, Entry } from 'contentful';

// Initialize Contentful Client
const client = createClient({
  space: '353a6vdkrhu9',
  environment: 'master',
  accessToken: 'drE6gFL_NdF3eZMwlEojAtx0RzaalhSLuSZv5lfe4_c',
});

// Define TypeScript interfaces for Contentful content
interface File {
  url: string;
}

interface Image {
  fields: {
    file: File;
  };
}

interface ProjectFields {
  title: string;
  description: string;
  image1?: Image;
}

/*
interface Sys {
  id: string;
  createdAt: string;
  updatedAt: string;
}
*/

interface Project {
  title: string;
  description: string;
  id: string;
  img?: string;
  createdAt: string;
  updatedAt: string;
}

// Custom Hook to fetch data from Contentful
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const getData = async () => {
    try {
      // Fetch the content from Contentful
      const response = await client.getEntries({
        content_type: 'rogovski', // Ensure this matches the content type in Contentful
      });

      // Map over the fetched items and create project objects
      const projects = response.items.map((item: Entry<ProjectFields>) => {
        const { title, description, image1 } = item.fields;
        const id = item.sys.id;
        const createdAt = item.sys.createdAt;
        const updatedAt = item.sys.updatedAt;
        const img = image1?.fields?.file?.url || undefined;

        return {
          title,
          description,
          id,
          img,
          createdAt,
          updatedAt
        };
      });

      // Set projects and loading state
      setProjects(projects.map(project => ({
        ...project,
        img: typeof project.img === 'string' ? project.img : undefined
      })));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from Contentful:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Empty dependency array to only fetch once when the component mounts

  return { loading, projects };
};
