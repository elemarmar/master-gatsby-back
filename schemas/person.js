import { MdPerson as icon } from 'react-icons/md';

export default {
  // Computer name
  name: 'person',
  // visible title
  title: 'Slicemasters',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // we specify that the source of the slug comes frmo the name
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this person',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // when you upload a file you can hotspot the important information
        hotspot: true,
      },
    },
  ],
};
