import sanity from '@sanity/client'

export default sanity({
    projectId: "2jarwg0c",
    useCdn: true,
    dataset: 'production'
})