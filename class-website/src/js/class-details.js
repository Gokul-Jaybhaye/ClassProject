const classData = {
  1: {
    name: "Class 1",
    description: "Introductory class for basics.",
    courses: ["Math", "English", "EVS"],
    teacher: "Mrs. Sharma",
    schedule: [
      { day: "Monday", time: "9:00 AM - 11:00 AM" },
      { day: "Wednesday", time: "9:00 AM - 11:00 AM" }
    ]
  },
  2: {
    name: "Class 2",
    description: "Building on fundamentals.",
    courses: ["Math", "English", "Science"],
    teacher: "Mr. Verma",
    schedule: [
      { day: "Tuesday", time: "10:00 AM - 12:00 PM" },
      { day: "Thursday", time: "10:00 AM - 12:00 PM" }
    ]
  },
  3: {
    name: "Class 3",
    description: "Expanding knowledge.",
    courses: ["Math", "English", "Science", "Social Studies"],
    teacher: "Ms. Patel",
    schedule: [
      { day: "Monday", time: "12:00 PM - 2:00 PM" },
      { day: "Friday", time: "12:00 PM - 2:00 PM" }
    ]
  },
  4: {
    name: "Class 4",
    description: "Advanced basics.",
    courses: ["Math", "English", "Science", "Social Studies"],
    teacher: "Mr. Singh",
    schedule: [
      { day: "Wednesday", time: "2:00 PM - 4:00 PM" },
      { day: "Friday", time: "2:00 PM - 4:00 PM" }
    ]
  },
  5: {
    name: "Class 5",
    description: "Preparation for middle school.",
    courses: ["Math", "English", "Science", "Social Studies", "Computer"],
    teacher: "Mrs. Gupta",
    schedule: [
      { day: "Monday", time: "8:00 AM - 10:00 AM" },
      { day: "Thursday", time: "8:00 AM - 10:00 AM" }
    ]
  },
  6: {
    name: "Class 6",
    description: "Middle school foundation.",
    courses: ["Math", "English", "Science", "History", "Geography"],
    teacher: "Mr. Khan",
    schedule: [
      { day: "Tuesday", time: "1:00 PM - 3:00 PM" },
      { day: "Friday", time: "1:00 PM - 3:00 PM" }
    ]
  },
  7: {
    name: "Class 7",
    description: "Deeper subject understanding.",
    courses: ["Math", "English", "Science", "History", "Geography"],
    teacher: "Ms. Reddy",
    schedule: [
      { day: "Wednesday", time: "11:00 AM - 1:00 PM" },
      { day: "Saturday", time: "11:00 AM - 1:00 PM" }
    ]
  },
  8: {
    name: "Class 8",
    description: "Pre-high school.",
    courses: ["Math", "English", "Science", "History", "Geography"],
    teacher: "Mr. Das",
    schedule: [
      { day: "Thursday", time: "3:00 PM - 5:00 PM" },
      { day: "Saturday", time: "3:00 PM - 5:00 PM" }
    ]
  },
  9: {
    name: "Class 9",
    description: "High school basics.",
    courses: ["Math", "English", "Science", "Social Science"],
    teacher: "Mrs. Joshi",
    schedule: [
      { day: "Monday", time: "4:00 PM - 6:00 PM" },
      { day: "Friday", time: "4:00 PM - 6:00 PM" }
    ]
  },
  10: {
    name: "Class 10",
    description: "Board exam preparation.",
    courses: ["Math", "English", "Science", "Social Science"],
    teacher: "Mr. Mehta",
    schedule: [
      { day: "Tuesday", time: "5:00 PM - 7:00 PM" },
      { day: "Thursday", time: "5:00 PM - 7:00 PM" }
    ]
  }
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const classNum = getQueryParam('class');
const infoDiv = document.getElementById('class-info');

if (classData[classNum]) {
  const data = classData[classNum];
  infoDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.description}</p>
    <h3>Course Structure:</h3>
    <ul>
      ${data.courses.map(c => `<li>${c}</li>`).join('')}
    </ul>
    <h3>Class Teacher:</h3>
    <p>${data.teacher}</p>
    <h3>Schedule:</h3>
    <ul>
      ${data.schedule.map(s => `<li>${s.day}: ${s.time}</li>`).join('')}
    </ul>
  `;
} else {
  infoDiv.innerHTML = `<p>Class information not found.</p>`;
}