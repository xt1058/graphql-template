# GraphQL + Koa + MongoDB template

This is a small GraphQL + Koa + MongoDB template, ready for start developing.

Inside graphql folder there are resolvers folder and types folder, each folder contains a folder for each model.

example:

       graphql -> resolvers -> User -> index.ts ( User resolver )
              |           |--> Post -> index.ts ( Post resolver )
              |-> types -> User -> index.ts ( User types )
                      |--> Post -> index.ts ( Post types )
                
Inside server folder there are the necessary files for connecting to MongoDB, mongo models, and for running the koa server
