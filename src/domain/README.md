# The Domain layer
The Domain layer contains the domain objects and the business logic. All the business rules are implemented in this layer. These rules are used by the application layer to compose the use cases.

## Repository
A repository interacts with the database. It is used to abstract the database access. The application layer uses the repository to interact with the database.
The repository interfaces are defined in this layer. But the implementation is in the Infrastructure layer.