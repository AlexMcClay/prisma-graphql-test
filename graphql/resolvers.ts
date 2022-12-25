import { links } from "../data/links"

export const resolvers = {
    Query: {
        links: () => [...links]
    },

}