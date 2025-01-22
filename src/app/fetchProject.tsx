import { useState, useEffect } from 'react';
import { createClient, Entry, EntryCollection } from 'contentful';
import { EntrySkeletonType } from 'contentful';

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


// Correctly extend EntrySkeletonType
interface ProjectFields extends EntrySkeletonType {
  fields: {
    title: string;
    description: string;
    image1?: Image; // Optional field for the image
  };
  contentTypeId: 'rogovski'; // Match the content type ID in Contentful
}


/*
interface ProjectFields {
  title: string;
  description: string;
  image1?: Image;
}
*/

// Sys interface (sys properties like id, createdAt, etc.)
/*
interface Sys {
  id: string;
  createdAt: string;
  updatedAt: string;
}
*/

// Define the Project interface that will hold the content fields and sys properties
interface Project {
  title: string;
  description: string;
  id: string;
  img?: string;
  createdAt: string;
  updatedAt: string;
}

// Type guard to check if image1 has the correct structure
function isImage(value: any): value is Image {
  return value?.fields?.file?.url !== undefined;
}

// Custom Hook to fetch data from Contentful
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const getData = async () => {
    try {
      // Fetch the content from Contentful
      const response: EntryCollection<ProjectFields> = await client.getEntries({
        content_type: 'rogovski', // Ensure this matches the content type in Contentful
      });

      // Map over the fetched items and create project objects
      const projects = response.items.map((item: Entry<ProjectFields>) => {
        const { title, description, image1 } = item.fields;
        const id = item.sys.id;
        const createdAt = item.sys.createdAt;
        const updatedAt = item.sys.updatedAt;
        //const img = image1?.fields?.file?.url || undefined;
        // Ensure type safety
         // Check if image1 and the file URL exist before using them
           // Safely access the image URL using the type guard
           const img = isImage(image1) ? image1.fields.file.url : undefined;
         
        console.log(item.fields)
        
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
