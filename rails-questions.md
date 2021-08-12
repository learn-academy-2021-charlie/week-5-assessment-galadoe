# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

sql is a domain-specific language used in programming and designed for managing data held in a relational database management system

2. What the PostgreSQL query that would return all the content in a particular table?

SELECT * FROM table_name would return all the content in a particular table

3. What is the command to create a new Rails application with a PostgreSQL database?

rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

rails g model Meals breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?

process of selecting, preparing, extracting, and transforming data
*file used to alter the db schema, history of the db (database)

6. What is the command to generate a migration file?
rails db:migrate

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

model: uppercase (PascalCase) and singular
table: snake_case

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
current outline of the db tables, shouldn't modify it that is what migration are for 

*it documents the final current state of the database

9. What is the Rails console?

command line for interacting with the Rails applications
*command line programming for iteracting with the rails app, model layer

10. What is the Rails console command to see all the content in a particular table?

TableName.all
