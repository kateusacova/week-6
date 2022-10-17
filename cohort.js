const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Artem', 'Milana', 'Kate']
};

const printCohort = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
}

printCohort(cohort);