import * as express from 'express';
import { createArticles } from "./nodes/articles";
import { createExpositions } from "./nodes/expositions";

export const onCreateDevServer = ({ app }) => {
   app.use("/admin", express.static("asset/admin"));
};

export const createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    await createArticles({createPage, graphql});
    await createExpositions({createPage, graphql});
}

