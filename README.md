# GraphQL + Koa + MongoDB template

This is a small GraphQL + Koa + MongoDB template, ready for start developing.

Inside graphql's folder there are resolvers folder and types folder, resolvers folder contains a folder for each model.

example:

       graphql -> resolvers -> User -> index.ts ( User resolver )
              |           |--> Post -> index.ts ( Post resolver )
              |-> types -> index.ts ( Main types file, all the types are imported here )
                      |--> Post.graphql ( Post types )
                      |--> User.graphql ( User types )
                
Inside server's folder there are the necessary files for connecting to MongoDB, mongo models, and for running the koa server
