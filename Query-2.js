// Question-2
// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

        db.collection.find({date:{'$gte':("15-oct-2020"),'$lte':("31-oct-2020")}})
        
// Result:

/*
[
  {
    _id: "643651cbf3c5cbf2e591a000",
    users: "O",
    codekata: "66",
    attendance: "present",
    topics: "CSS",
    tasks: "submitted",
    company_drives: "Zomato",
    placement: "not appeared",
    "mentee's_count": 20,
    date: "15-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a001",
    users: "P",
    codekata: "65",
    attendance: "present",
    topics: "React",
    tasks: "not submitted",
    company_drives: "Google",
    placement: "appeared",
    "mentee's_count": 20,
    date: "16-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a002",
    users: "Q",
    codekata: "21",
    attendance: "present",
    topics: "CSS",
    tasks: "submitted",
    company_drives: "ABC",
    placement: "not appeared",
    "mentee's_count": 20,
    date: "17-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a003",
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
    _id: "643651cbf3c5cbf2e591a004",
    users: "S",
    codekata: "54",
    attendance: "present",
    topics: "Vuejs",
    tasks: "submitted",
    company_drives: "HP",
    placement: "appeared",
    "mentee's_count": 20,
    date: "19-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a005",
    users: "T",
    codekata: "22",
    attendance: "present",
    topics: "javascript",
    tasks: "not submitted",
    company_drives: "Zomato",
    placement: "appeared",
    "mentee's_count": 20,
    date: "20-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a006",
    users: "U",
    codekata: "33",
    attendance: "present",
    topics: "React",
    tasks: "submitted",
    company_drives: "straive",
    placement: "not appeared",
    "mentee's_count": 20,
    date: "21-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a007",
    users: "V",
    codekata: "46",
    attendance: "present",
    topics: "nodejs",
    tasks: "not submitted",
    company_drives: "Sutherland",
    placement: "not appeared",
    "mentee's_count": 23,
    date: "22-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a008",
    users: "W",
    codekata: "23",
    attendance: "present",
    topics: "MYSQL",
    tasks: "submitted",
    company_drives: "capegemini",
    placement: "appeared",
    "mentee's_count": 35,
    date: "23-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a009",
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
    _id: "643651cbf3c5cbf2e591a00a",
    users: "Y",
    codekata: "100",
    attendance: "present",
    topics: "javascript",
    tasks: "submitted",
    company_drives: "Amazon",
    placement: "appeared",
    "mentee's_count": 31,
    date: "25-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a00b",
    users: "Z",
    codekata: "76",
    attendance: "present",
    topics: "React",
    tasks: "not submitted",
    company_drives: "Apple",
    placement: "not appeared",
    "mentee's_count": 24,
    date: "26-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a00c",
    users: "AA",
    codekata: "87",
    attendance: "present",
    topics: "Angular",
    tasks: "submitted",
    company_drives: "Microsoft",
    placement: "appeared",
    "mentee's_count": 10,
    date: "27-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a00d",
    users: "BB",
    codekata: "45",
    attendance: "present",
    topics: "React",
    tasks: "submitted",
    company_drives: "Freshworks",
    placement: "not appeared",
    "mentee's_count": 20,
    date: "28-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a00e",
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
  {
    _id: "643651cbf3c5cbf2e591a00f",
    users: "DD",
    codekata: "45",
    attendance: "present",
    topics: "nodejs",
    tasks: "submitted",
    company_drives: "capgemini",
    placement: "appeared",
    "mentee's_count": 2,
    date: "30-oct-2020",
  },
  {
    _id: "643651cbf3c5cbf2e591a010",
    users: "ED",
    codekata: "34",
    attendance: "present",
    topics: "React",
    tasks: "not submitted",
    company_drives: "CTS",
    placement: "not appeared",
    "mentee's_count": 8,
    date: "31-oct-2020",
  },
];



*/ 