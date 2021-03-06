export default {
  name: 'featureField',
  title: 'Feature Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'svgUploadPreview'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'leadPortableText'
    }
  ]
}
