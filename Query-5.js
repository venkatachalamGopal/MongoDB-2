
// Question-5:
// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.collection.find({$and:[{attendance:"absent"},{tasks:"not submitted"}]})

// Result:

/*
[
  {
    _id: "64365376a99ec7fb800180a1",
    users: "R",
    codekata: "35",
    attendance: "absent",
    topics: "Bootstrap",
    tasks: "not submitted",
    company_drives: "zentech",
    placement: "not appeared",
    "mentee's_count": 20,
    date: "18-oct-2020",
  },
  {
    _id: "64365376a99ec7fb800180a7",
    users: "X",
    codekata: "78",
    attendance: "absent",
    topics: "MongoDB",
    tasks: "not submitted",
    company_drives: "Zoho",
    placement: "not appeared",
    "mentee's_count": 12,
    date: "24-oct-2020",
  },
  {
    _id: "64365376a99ec7fb800180ac",
    users: "CC",
    codekata: "46",
    attendance: "absent",
    topics: "javascript",
    tasks: "not submitted",
    company_drives: "Dell",
    placement: "appeared",
    "mentee's_count": 20,
    date: "29-oct-2020",
  },
];
*/ 