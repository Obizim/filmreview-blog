import sanity from '@sanity/client'

export default sanity({
    projectId: "2jarwg0c",
    useCdn: true,
    apiVersion: '2023-05-14',
    dataset: 'production'
})