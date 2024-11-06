export const allApps = [
    {
      name: "Admission",
      icon: "/assets/icons/admission.png",
      height: "h-15",
      width: "w-15",
      SubApp:[
        { label: "Admissions" },
        { label: "Enrollment" }
      ]
    },
    {
      name: "Student Management",
      icon: "/assets/icons/student.svg",
      height: "h-13",
      width: "w-13",
      SubApp:[
        { label: "Attendance" },
        { label: "Financial Management" },
        {
          label: "LMS",
          hasDropdown: true,
          subItems: ["Inbox", "Sent", "Drafts"],
        },
        {
          label: "Examination",
          hasDropdown: true,
          subItems: ["Products", "Orders", "Customers"],
        },
        {
          label: "Degree/Transcript",
          hasDropdown: true,
          subItems: ["Active", "Archived", "New Project"],
        },
        { label: "Alumni" }
      ]
    },
    {
      name: "Scheduler",
      icon: "/assets/icons/scheduler.svg",
      height: "h-13",
      width: "w-13",
      SubApp:[
        { label: "Timetable" },
        { label: "Academic Calendar" },
        {
          label: "Event Calendar",
        },
      ]
    },
    {
      name: "Curriculum",
      icon: "/assets/icons/curriculum.png",
      height: "h-13",
      width: "w-13",
      SubApp:[
        { label: "Curriculum" },
        { label: "External Exam Readiness" },
      ]
    },
    {
      name: "Human Resources",
      icon: "/assets/icons/human.png",
      height: "h-13",
      width: "w-13",
      SubApp:[
        { label: "HR Management" },
        { label: "Employee Module" },
        {
          label: "Payroll",
          hasDropdown: true,
          subItems: ["Inbox", "Sent", "Drafts"],
        }
      ]
    },
    {
      name: "Transport and Hostel Management",
      icon: "/assets/icons/hostel.png",
      height: "h-13",
      width: "w-13",
      SubApp:[
        { label: "Hostel" },
        { label: "Transport" }
      ]
    },
    {
      name: "Financial Management",
      icon: "/assets/icons/financial.png",
      height: "h-13",
      width: "w-13",
      SubApp:[
        { label: "Financial Management" },
      ]
    },
    {
      name: "User Management",
      icon: "/assets/icons/userManagement.png",
      height: "h-13",
      width: "w-13",
      SubApp:[
        { label: "User Rights & Access Management" },
        { label: "User Permissions" },
      ]
    },
  ];