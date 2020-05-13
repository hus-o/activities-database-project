## Initial Setup
* Install Knex, link to postgres local db
* Install express
* Initial commit

### Planning (mvp)
* Simple db table with 4 columns: activity, location, type of activity (to be able to filter) and average duration of the activity
* Migrate and seed the table
* Basic GET / POST / PUT / DELETE routes

### Notes
* We got the basic routes done pretty quickly, however testing the POST route works took some time. We later realised trying to POST data when the seed had hardcoded IDs resulted in an error because postgres ID autoincrement means that any hardcoded ID is not used when incrementing, resulting in duplicate ID error. So we had to remove the IDs

* Created a basic table using pugJS to output the data recieved from the GET all route through the database.
* Created a dropdown filter function in jQuery to allow users to filter activity by type. This took some time to work correctly as it was filtering (hiding) single cells.
* To add onto this we would like to use datatable plugin to build a more rich table

* We worked on a simple homepage where users can decide to go to "add" or "view" activity - we would like to possibly implement a "get lucky" type system that could GET a random ID activity

* We created a form, using bootstrap for styling, this was bringing up some errors, initially due to indentation rules of pugJS and thereafter a issue with our table (the hardcoded IDs). But once fixed it was fine.
