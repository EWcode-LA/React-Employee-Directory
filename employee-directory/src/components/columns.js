export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    acessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    acessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    acessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    acessor: "email",
  },
  {
    Header: "Department Name",
    Footer: "Department Name",
    acessor: "department_name",
  },
  {
    Header: "City Location",
    Footer: "City Location",
    acessor: "city_location",
  },
];

//Grouping objects withing columns together if they are similiar.

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    acessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        acessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        acessor: "last_name",
      },
    ],
  },
  {
      Header: 'Info',
      Footer: 'Info',
      columns: [
        {
            Header: "Email",
            Footer: "Email",
            acessor: "email",
          },
          {
            Header: "Department Name",
            Footer: "Department Name",
            acessor: "department_name",
          },
          {
            Header: "City Location",
            Footer: "City Location",
            acessor: "city_location",
          },
      ]
  }
];
