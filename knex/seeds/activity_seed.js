
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {
          id: 1,
          name: 'Ice Skating',
          location: " N22 7AY",
          type: "Sport",
          activity_time_minutes: 60
        },
        {
          id: 2, 
          name: 'Badminton',
          location: "Any Leisure Centre",
          type: "Sport",
          activity_time_minutes: 60
        },
        {
          id: 3, 
          name: 'Science Museum',
          location: "SW7 2DD",
          type: "Museum",
          activity_time_minutes: 150
        },
        {
          id: 4, 
          name: 'Flat Iron',
          location: "WC2E 8QH",
          type: "Food",
          activity_time_minutes: 90
        }
      ]);
    });
};
