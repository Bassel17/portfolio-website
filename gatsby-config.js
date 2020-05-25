module.exports = {
    plugins:[
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name:"images",
                path: `${__dirname}/src/images/`,
            },
        },
    ],
}