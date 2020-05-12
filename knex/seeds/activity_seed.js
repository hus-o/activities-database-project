exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("activities")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("activities").insert([
        {
          id: 1,
          name: "Ice Skating",
          location: "Alexandra Palace",
          activity_time_minutes: 60,
        },
        {
          id: 2,
          name: "Badminton",
          location: "Leisure Centre",
          activity_time_minutes: 60,
        },
        {
          id: 3,
          name: "Go To Science Museum",
          location: "Science Museum",
          activity_time_minutes: 150,
        },
      ]);
    });
};
