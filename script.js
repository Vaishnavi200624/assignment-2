/**
 * ==============================================================================
 * STUDENT PROFILE & ACADEMIC DASHBOARD (script.js)
 * Institution: Thiagarajar College, Madurai
 * Student: VAISHNAVI R (24UCS44)
 * ==============================================================================
 */

'use strict';

/* ==============================================================================
   SECTION 1: STUDENT PROFILE DATA (VAISHNAVI R)
   ============================================================================== */
const studentProfile = {
  fullName: "VAISHNAVI R",
  firstName: "VAISHNAVI",
  lastName: "R",
  title: "-",
  admissionNo: "14518",
  admissionYear: "2024-2025",
  rollNumber: "24UCS44",
  degree: "Undergraduate - AIDED",
  department: "Department of Computer Science",
  semester: "Semester-5",
  section: "SECTION A",
  courseName: "B.Sc. COMPUTER SCIENCE",
  collegeName: "Thiagarajar College",
  studentStatus: "Active",
  dob: "24-Dec-2006",
  age: "17",
  gender: "Female",
  fatherName: "RAMASAMY V",
  motherName: "R Amutha",
  address: "PLOT NO 1568, TNHB COLONY, MELA ANUPPANADI",
  city: "Madurai",
  state: "Tamil Nadu",
  academicYear: "2024-2027",
  academicBatch: "2026-2027"
};

/* ==============================================================================
   SECTION 2: EXACT ACADEMIC MARKS DATA (SEMESTERS 1 TO 4)
   ============================================================================== */
const academicData = {
  semesters: [
    {
      id: "sem1",
      name: "Semester 1",
      semesterCode: "Semester-1",
      creditsRegistered: 23,
      creditsCompleted: 23,
      subjects: [
        {
          code: "U24P1TA11",
          name: "POTHUTAMIL-I(TAMIL ILAKKIYA VARALARU-I)",
          internal: "24/25",
          internalObtained: 24,
          internalMax: 25,
          external: "57/75",
          externalObtained: 57,
          externalMax: 75,
          final: "81/100",
          finalObtained: 81,
          finalMax: 100,
          credit: 3,
          gradePoint: 8.1,
          grade: "A",
          status: "Pass"
        },
        {
          code: "U24P2EN11",
          name: "ENGLISH THROUGH PROSE",
          internal: "21/25",
          internalObtained: 21,
          internalMax: 25,
          external: "47/75",
          externalObtained: 47,
          externalMax: 75,
          final: "68/100",
          finalObtained: 68,
          finalMax: 100,
          credit: 3,
          gradePoint: 6.8,
          grade: "C",
          status: "Pass"
        },
        {
          code: "U24AEES11",
          name: "ENVIRONMENTAL STUDIES",
          internal: "14/15",
          internalObtained: 14,
          internalMax: 15,
          external: "30/35",
          externalObtained: 30,
          externalMax: 35,
          final: "44/50",
          finalObtained: 44,
          finalMax: 50,
          credit: 2,
          gradePoint: 8.8,
          grade: "A",
          status: "Pass"
        },
        {
          code: "UCS24CT11",
          name: "PROGRAMMING IN C",
          internal: "24/25",
          internalObtained: 24,
          internalMax: 25,
          external: "49/75",
          externalObtained: 49,
          externalMax: 75,
          final: "73/100",
          finalObtained: 73,
          finalMax: 100,
          credit: 4,
          gradePoint: 7.3,
          grade: "B",
          status: "Pass"
        },
        {
          code: "UCS24CT12",
          name: "DIGITAL PRINCIPLES & COMPUTER ORGANIZATION",
          internal: "22/25",
          internalObtained: 22,
          internalMax: 25,
          external: "49/75",
          externalObtained: 49,
          externalMax: 75,
          final: "71/100",
          finalObtained: 71,
          finalMax: 100,
          credit: 4,
          gradePoint: 7.1,
          grade: "B",
          status: "Pass"
        },
        {
          code: "UCS24CL11",
          name: "PROGRAMMING IN C LAB",
          internal: "40/40",
          internalObtained: 40,
          internalMax: 40,
          external: "58/60",
          externalObtained: 58,
          externalMax: 60,
          final: "98/100",
          finalObtained: 98,
          finalMax: 100,
          credit: 2,
          gradePoint: 9.8,
          grade: "O",
          status: "Pass"
        },
        {
          code: "UMA24GT11S",
          name: "DISCRETE MATHEMATICAL STRUCTURES",
          internal: "24/25",
          internalObtained: 24,
          internalMax: 25,
          external: "58/75",
          externalObtained: 58,
          externalMax: 75,
          final: "82/100",
          finalObtained: 82,
          finalMax: 100,
          credit: 5,
          gradePoint: 8.2,
          grade: "A",
          status: "Pass"
        }
      ]
    },
    {
      id: "sem2",
      name: "Semester 2",
      semesterCode: "Semester-2",
      creditsRegistered: 21,
      creditsCompleted: 21,
      subjects: [
        {
          code: "U24P1TA21",
          name: "POTHU TAMIL - II (TAMIL ILAKKIYAVARALARU - II)",
          internal: "23/25",
          internalObtained: 23,
          internalMax: 25,
          external: "51/75",
          externalObtained: 51,
          externalMax: 75,
          final: "74/100",
          finalObtained: 74,
          finalMax: 100,
          credit: 3,
          gradePoint: 7.4,
          grade: "B",
          status: "Pass"
        },
        {
          code: "U24P2EN21",
          name: "ENGLISH THROUGH FICTION",
          internal: "21/25",
          internalObtained: 21,
          internalMax: 25,
          external: "42/75",
          externalObtained: 42,
          externalMax: 75,
          final: "63/100",
          finalObtained: 63,
          finalMax: 100,
          credit: 3,
          gradePoint: 6.3,
          grade: "C",
          status: "Pass"
        },
        {
          code: "U24AEVE21",
          name: "VALUE EDUCATION",
          internal: "13/15",
          internalObtained: 13,
          internalMax: 15,
          external: "26/35",
          externalObtained: 26,
          externalMax: 35,
          final: "39/50",
          finalObtained: 39,
          finalMax: 50,
          credit: 2,
          gradePoint: 7.8,
          grade: "B",
          status: "Pass"
        },
        {
          code: "UCS24CT21",
          name: "JAVA PROGRAMMING",
          internal: "23/25",
          internalObtained: 23,
          internalMax: 25,
          external: "60/75",
          externalObtained: 60,
          externalMax: 75,
          final: "83/100",
          finalObtained: 83,
          finalMax: 100,
          credit: 4,
          gradePoint: 8.3,
          grade: "A",
          status: "Pass"
        },
        {
          code: "UCS24CL21",
          name: "JAVA PROGRAMMING LAB",
          internal: "38/40",
          internalObtained: 38,
          internalMax: 40,
          external: "59/60",
          externalObtained: 59,
          externalMax: 60,
          final: "97/100",
          finalObtained: 97,
          finalMax: 100,
          credit: 2,
          gradePoint: 9.7,
          grade: "O",
          status: "Pass"
        },
        {
          code: "UCS24CL22",
          name: "WEB TECHNOLOGY LAB",
          internal: "38/40",
          internalObtained: 38,
          internalMax: 40,
          external: "60/60",
          externalObtained: 60,
          externalMax: 60,
          final: "98/100",
          finalObtained: 98,
          finalMax: 100,
          credit: 2,
          gradePoint: 9.8,
          grade: "O",
          status: "Pass"
        },
        {
          code: "UMA24GT21S",
          name: "BASIC STATISTICS",
          internal: "22/25",
          internalObtained: 22,
          internalMax: 25,
          external: "64/75",
          externalObtained: 64,
          externalMax: 75,
          final: "86/100",
          finalObtained: 86,
          finalMax: 100,
          credit: 5,
          gradePoint: 8.6,
          grade: "A",
          status: "Pass"
        }
      ]
    },
    {
      id: "sem3",
      name: "Semester 3",
      semesterCode: "Semester-3",
      creditsRegistered: 22,
      creditsCompleted: 22,
      subjects: [
        {
          code: "UCS24CT31",
          name: "RELATIONAL DATABASE MANAGEMENT SYSTEMS",
          internal: "24/25",
          internalObtained: 24,
          internalMax: 25,
          external: "48/75",
          externalObtained: 48,
          externalMax: 75,
          final: "72/100",
          finalObtained: 72,
          finalMax: 100,
          credit: 4,
          gradePoint: 7.2,
          grade: "B",
          status: "Pass"
        },
        {
          code: "UCS24CT32",
          name: "DATA STRUCTURES AND ALGORITHMS",
          internal: "20/25",
          internalObtained: 20,
          internalMax: 25,
          external: "57/75",
          externalObtained: 57,
          externalMax: 75,
          final: "77/100",
          finalObtained: 77,
          finalMax: 100,
          credit: 4,
          gradePoint: 7.7,
          grade: "B",
          status: "Pass"
        },
        {
          code: "UCS24CL31",
          name: "RELATIONAL DATABASE MANAGEMENT SYSTEMS LAB",
          internal: "40/40",
          internalObtained: 40,
          internalMax: 40,
          external: "60/60",
          externalObtained: 60,
          externalMax: 60,
          final: "100/100",
          finalObtained: 100,
          finalMax: 100,
          credit: 2,
          gradePoint: 10,
          grade: "O",
          status: "Pass"
        },
        {
          code: "UCS24CL32",
          name: "DATA STRUCTURES LAB",
          internal: "40/40",
          internalObtained: 40,
          internalMax: 40,
          external: "59/60",
          externalObtained: 59,
          externalMax: 60,
          final: "99/100",
          finalObtained: 99,
          finalMax: 100,
          credit: 2,
          gradePoint: 9.9,
          grade: "O",
          status: "Pass"
        },
        {
          code: "UMA24GT31S",
          name: "COMPUTATIONAL METHODS",
          internal: "24/25",
          internalObtained: 24,
          internalMax: 25,
          external: "66/75",
          externalObtained: 66,
          externalMax: 75,
          final: "90/100",
          finalObtained: 90,
          finalMax: 100,
          credit: 5,
          gradePoint: 9,
          grade: "O",
          status: "Pass"
        },
        {
          code: "U24P1TA31",
          name: "POTHUTAMIL-III (TAMILAGA VARALARUM PANPADUM)",
          internal: "24/25",
          internalObtained: 24,
          internalMax: 25,
          external: "45/75",
          externalObtained: 45,
          externalMax: 75,
          final: "69/100",
          finalObtained: 69,
          finalMax: 100,
          credit: 3,
          gradePoint: 6.9,
          grade: "C",
          status: "Pass"
        },
        {
          code: "UZO24NT31",
          name: "BASICS IN APICULTURE",
          internal: "12/15",
          internalObtained: 12,
          internalMax: 15,
          external: "28/35",
          externalObtained: 28,
          externalMax: 35,
          final: "40/50",
          finalObtained: 40,
          finalMax: 50,
          credit: 2,
          gradePoint: 8,
          grade: "A",
          status: "Pass"
        }
      ]
    },
    {
      id: "sem4",
      name: "Semester 4",
      semesterCode: "Semester-4",
      creditsRegistered: 23,
      creditsCompleted: 23,
      subjects: [
        {
          code: "U24P1TA41",
          name: "POTHU TAMIL - IV (TAMIZHUM ARIVIYALUM)",
          internal: "23/25",
          internalObtained: 23,
          internalMax: 25,
          external: "50/75",
          externalObtained: 50,
          externalMax: 75,
          final: "73/100",
          finalObtained: 73,
          finalMax: 100,
          credit: 3,
          gradePoint: 7.3,
          grade: "B",
          status: "Pass"
        },
        {
          code: "UMA24NT41",
          name: "MATHEMATICS FOR COMPETITIVE EXAMINATIONS - II",
          internal: "12/15",
          internalObtained: 12,
          internalMax: 15,
          external: "30/35",
          externalObtained: 30,
          externalMax: 35,
          final: "42/50",
          finalObtained: 42,
          finalMax: 50,
          credit: 2,
          gradePoint: 8.4,
          grade: "A",
          status: "Pass"
        },
        {
          code: "UCS24CT41",
          name: "ADVANCED JAVA PROGRAMMING",
          internal: "21/25",
          internalObtained: 21,
          internalMax: 25,
          external: "63/75",
          externalObtained: 63,
          externalMax: 75,
          final: "84/100",
          finalObtained: 84,
          finalMax: 100,
          credit: 4,
          gradePoint: 8.4,
          grade: "A",
          status: "Pass"
        },
        {
          code: "UCS24CT42",
          name: "COMPUTER NETWORKS",
          internal: "24/25",
          internalObtained: 24,
          internalMax: 25,
          external: "54/75",
          externalObtained: 54,
          externalMax: 75,
          final: "78/100",
          finalObtained: 78,
          finalMax: 100,
          credit: 4,
          gradePoint: 7.8,
          grade: "B",
          status: "Pass"
        },
        {
          code: "UCS24CL41",
          name: "ADVANCED JAVA PROGRAMMING LAB",
          internal: "40/40",
          internalObtained: 40,
          internalMax: 40,
          external: "60/60",
          externalObtained: 60,
          externalMax: 60,
          final: "100/100",
          finalObtained: 100,
          finalMax: 100,
          credit: 2,
          gradePoint: 10,
          grade: "O",
          status: "Pass"
        },
        {
          code: "UCS24CL42",
          name: "PHP PROGRAMMING LAB",
          internal: "40/40",
          internalObtained: 40,
          internalMax: 40,
          external: "60/60",
          externalObtained: 60,
          externalMax: 60,
          final: "100/100",
          finalObtained: 100,
          finalMax: 100,
          credit: 2,
          gradePoint: 10,
          grade: "O",
          status: "Pass"
        },
        {
          code: "UMA24GT41S",
          name: "OPERATIONS RESEARCH",
          internal: "25/25",
          internalObtained: 25,
          internalMax: 25,
          external: "52/75",
          externalObtained: 52,
          externalMax: 75,
          final: "77/100",
          finalObtained: 77,
          finalMax: 100,
          credit: 5,
          gradePoint: 7.7,
          grade: "B",
          status: "Pass"
        },
        {
          code: "U24PVYRC41",
          name: "YOUTH RED CROSS SOCIETY",
          internal: "65/75",
          internalObtained: 65,
          internalMax: 75,
          external: "22/25",
          externalObtained: 22,
          externalMax: 25,
          final: "87/100",
          finalObtained: 87,
          finalMax: 100,
          credit: 1,
          gradePoint: 8.7,
          grade: "A",
          status: "Pass"
        }
      ]
    }
  ]
};

/* ==============================================================================
   SECTION 3: PERSONAL TRANSPORT DATA
   ============================================================================== */
const transportData = {
  transportMode: "Bike",
  startingPoint: "Home (Housing Board)",
  destination: "College Campus Gate & Student Drop-off Point",
  departureTime: "8:00 AM",
  expectedArrivalTime: "8:15 AM",
  approximateDuration: "15 Minutes",
  distanceCovered: "2 Km",
  
  routeSequence: [
    {
      stepNumber: "01",
      locationName: "Home (Housing Board)",
      time: "8:00 AM",
      description: "Started morning commute from residence."
    },
    {
      stepNumber: "02",
      locationName: "Cement Road",
      time: "8:05 AM"
    },
    {
      stepNumber: "03",
      locationName: "Major Traffic Junction (Pandian Nagar)",
      time: "8:10 AM"
    },
    {
      stepNumber: "04",
      locationName: "Theppakulam",
      time: "8:13 AM"
    },
    {
      stepNumber: "05",
      locationName: "College Campus Gate & Student Drop-off Point",
      time: "8:15 AM",
      description: "Arrived at the college campus."
    }
  ]
};

/* ==============================================================================
   ACADEMIC CALCULATIONS
   ============================================================================== */

/**
 * Calculates summary for a single semester
 */
function calculateSemesterSummary(subjects) {
  let totalMax = 0;
  let totalObtained = 0;
  let passedCount = 0;
  let failedCount = 0;
  let totalCredits = 0;
  let totalGradePoints = 0;

  subjects.forEach(subj => {
    totalMax += subj.finalMax;
    totalObtained += subj.finalObtained;
    totalCredits += subj.credit;
    totalGradePoints += subj.gradePoint * subj.credit;
    if (subj.status.toLowerCase() === "pass") {
      passedCount++;
    } else {
      failedCount++;
    }
  });

  const percentage = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;
  const gpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

  return {
    totalMax,
    totalObtained,
    percentage: Number(percentage.toFixed(2)),
    gpa: Number(gpa.toFixed(2)),
    passedCount,
    failedCount,
    subjectCount: subjects.length,
    totalCredits
  };
}

/**
 * Calculates academic summary for a set of semesters (e.g. Year 1 or Year 2)
 */
function calculateYearlySummary(semesterList) {
  let totalMax = 0;
  let totalObtained = 0;
  let totalCredits = 0;
  let totalGradePoints = 0;
  let totalSubjects = 0;

  semesterList.forEach(sem => {
    sem.subjects.forEach(subj => {
      totalMax += subj.finalMax;
      totalObtained += subj.finalObtained;
      totalCredits += subj.credit;
      totalGradePoints += subj.gradePoint * subj.credit;
      totalSubjects++;
    });
  });

  const percentage = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;
  const gpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

  return {
    totalMax,
    totalObtained,
    totalCredits,
    totalSubjects,
    percentage: Number(percentage.toFixed(2)),
    gpa: Number(gpa.toFixed(2))
  };
}

/**
 * Calculates cumulative overall performance across all semesters
 */
function calculateOverallPerformance(semesters) {
  let totalMax = 0;
  let totalObtained = 0;
  let totalSubjects = 0;
  let passedSubjects = 0;
  let failedSubjects = 0;
  let totalCreditsRegistered = 0;
  let totalCreditsCompleted = 0;

  semesters.forEach(sem => {
    totalCreditsRegistered += sem.creditsRegistered;
    totalCreditsCompleted += sem.creditsCompleted;

    sem.subjects.forEach(subj => {
      totalMax += subj.finalMax;
      totalObtained += subj.finalObtained;
      totalSubjects++;
      if (subj.status.toLowerCase() === "pass") {
        passedSubjects++;
      } else {
        failedSubjects++;
      }
    });
  });

  const overallPercentage = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;

  return {
    totalSubjects,
    totalMax,
    totalObtained,
    overallPercentage: Number(overallPercentage.toFixed(2)),
    totalCreditsRegistered,
    totalCreditsCompleted,
    passedSubjects,
    failedSubjects
  };
}

/* ==============================================================================
   DOM INITIALIZATION & EVENT HANDLERS
   ============================================================================== */

function switchSection(targetId) {
  if (!targetId) return;

  const sections = document.querySelectorAll('.dashboard-section');
  let matched = false;

  sections.forEach(sec => {
    if (sec.id === targetId) {
      sec.classList.add('active');
      sec.style.display = 'block';
      matched = true;
    } else {
      sec.classList.remove('active');
      sec.style.display = 'none';
    }
  });

  if (!matched) {
    const directTarget = document.getElementById(targetId);
    if (directTarget) {
      directTarget.classList.add('active');
      directTarget.style.display = 'block';
    }
  }

  // Update active status on navigation links
  const mainNavLinks = document.querySelectorAll('#mainNav .nav-link');
  mainNavLinks.forEach(nl => {
    if (nl.getAttribute('data-target') === targetId) {
      nl.classList.add('active');
    } else {
      nl.classList.remove('active');
    }
  });

  // Re-render corresponding module data when switching sections
  if (targetId === 'homeSection') {
    renderHomeSummary();
  } else if (targetId === 'profileSection') {
    renderStudentProfile();
  } else if (targetId === 'academicSection') {
    renderAcademicPerformance();
  } else if (targetId === 'transportSection') {
    renderPersonalTransport();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Expose globally
window.switchSection = switchSection;

/**
 * Tab Navigation Controller
 */
function initNavigation() {
  // Direct click bindings for all elements with data-target or .nav-link
  const navLinks = document.querySelectorAll('.nav-link, .nav-action-btn, [data-target]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('data-target');
      if (targetId) {
        e.preventDefault();
        switchSection(targetId);
      }
    });
  });

  // Delegated event listener on document for resilient event handling
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-target]');
    if (trigger) {
      const targetId = trigger.getAttribute('data-target');
      if (targetId && document.getElementById(targetId)) {
        e.preventDefault();
        switchSection(targetId);
      }
    }
  });
}

/**
 * Initialize application modules safely regardless of document readyState
 */
function initializeApp() {
  initNavigation();
  renderStudentProfile();
  renderAcademicPerformance();
  renderPersonalTransport();
  renderHomeSummary();
  initSemesterDownloads();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

/**
 * Populate Home View (Matching exact UI layout from user screenshot)
 */
function renderHomeSummary() {
  const heroStudentName = document.getElementById('heroStudentName');
  if (heroStudentName) heroStudentName.textContent = studentProfile.fullName;

  // Student Info Strip
  const homeCourseName = document.getElementById('homeCourseName');
  if (homeCourseName) homeCourseName.textContent = studentProfile.courseName || "B.Sc. COMPUTER SCIENCE";

  const homeDeptName = document.getElementById('homeDeptName');
  if (homeDeptName) homeDeptName.textContent = studentProfile.department || "Department of Computer Science";

  const homeCurrentSem = document.getElementById('homeCurrentSem');
  if (homeCurrentSem) homeCurrentSem.textContent = studentProfile.semester || "Semester-5";

  const homeRollNo = document.getElementById('homeRollNo');
  if (homeRollNo) homeRollNo.textContent = studentProfile.rollNumber || "24UCS44";

  // Academic Overview
  const homeSemestersCompleted = document.getElementById('homeSemestersCompleted');
  if (homeSemestersCompleted) homeSemestersCompleted.textContent = String(academicData.semesters.length);

  const overall = calculateOverallPerformance(academicData.semesters);
  const homeCreditsCompleted = document.getElementById('homeCreditsCompleted');
  if (homeCreditsCompleted) homeCreditsCompleted.textContent = String(overall.totalCreditsCompleted);
}

/**
 * State & Utilities for Profile & Exports
 */
let isEditingProfile = false;

function getStudentInitials() {
  if (studentProfile.firstName && studentProfile.lastName) {
    return `${studentProfile.firstName[0]}${studentProfile.lastName[0]}`.toUpperCase();
  }
  return "VR";
}

function showProfileAlert(msg) {
  const alertBox = document.getElementById('profileFeedbackAlert');
  const alertText = document.getElementById('profileAlertText');
  if (alertBox && alertText) {
    alertText.textContent = msg;
    alertBox.style.display = 'flex';
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 4500);
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Module 1: Render Student Profile Section (Modern App Design)
 */
function renderStudentProfile() {
  const initials = getStudentInitials();

  // Top bar user thumbnail and name
  const topUserThumbnail = document.getElementById('topUserThumbnail');
  if (topUserThumbnail) {
    topUserThumbnail.textContent = initials;
  }

  const topUserName = document.getElementById('topUserName');
  if (topUserName) topUserName.textContent = studentProfile.fullName;

  // Banner student mini info
  const bannerStudentName = document.getElementById('bannerStudentName');
  if (bannerStudentName) bannerStudentName.textContent = studentProfile.fullName;

  const bannerPhoto = document.getElementById('bannerPhoto');
  if (bannerPhoto) {
    bannerPhoto.textContent = initials;
  }

  const bannerCollegeName = document.getElementById('bannerCollegeName');
  if (bannerCollegeName) bannerCollegeName.textContent = studentProfile.collegeName;

  const bannerSubDetails = document.getElementById('bannerSubDetails');
  if (bannerSubDetails) {
    bannerSubDetails.textContent = `${studentProfile.semester} | ${studentProfile.section} | ${studentProfile.academicBatch}`;
  }

  // Modern Hero Identity Card
  const profilePhoto = document.getElementById('profilePhoto');
  if (profilePhoto) {
    profilePhoto.textContent = initials;
  }

  const profileName = document.getElementById('profileName');
  if (profileName) profileName.textContent = studentProfile.fullName;

  const heroStudentStatusText = document.getElementById('heroStudentStatusText');
  if (heroStudentStatusText) heroStudentStatusText.textContent = `${studentProfile.studentStatus} Student`;

  const heroBadgeChips = document.getElementById('heroBadgeChips');
  if (heroBadgeChips) {
    heroBadgeChips.innerHTML = `
      <span class="hero-chip font-mono">Roll: ${escapeHtml(studentProfile.rollNumber)}</span>
      <span class="hero-chip">${escapeHtml(studentProfile.courseName)}</span>
      <span class="hero-chip">${escapeHtml(studentProfile.semester)} (${escapeHtml(studentProfile.section)})</span>
      <span class="hero-chip">${escapeHtml(studentProfile.degree)}</span>
    `;
  }

  // Profile Action Controls (Edit Profile / Save Changes / Cancel)
  const actionControls = document.getElementById('profileActionControls');
  if (actionControls) {
    if (!isEditingProfile) {
      actionControls.innerHTML = `
        <button type="button" class="btn-edit-profile" id="btnEditProfile" title="Edit Profile Details">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          Edit Profile
        </button>
      `;
      const editBtn = document.getElementById('btnEditProfile');
      if (editBtn) {
        editBtn.addEventListener('click', () => {
          isEditingProfile = true;
          renderStudentProfile();
        });
      }
    } else {
      actionControls.innerHTML = `
        <button type="button" class="btn-save-profile" id="btnSaveProfile">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Save Changes
        </button>
        <button type="button" class="btn-cancel-profile" id="btnCancelProfile">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          Cancel
        </button>
      `;
      const saveBtn = document.getElementById('btnSaveProfile');
      if (saveBtn) {
        saveBtn.addEventListener('click', handleSaveProfile);
      }
      const cancelBtn = document.getElementById('btnCancelProfile');
      if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
          isEditingProfile = false;
          renderStudentProfile();
        });
      }
    }
  }

  // Academic & Enrollment Section Container (Modern Data Grid)
  const primaryDetailsContainer = document.getElementById('primaryDetailsContainer');
  if (primaryDetailsContainer) {
    if (!isEditingProfile) {
      primaryDetailsContainer.innerHTML = `
        <div class="data-tile">
          <span class="data-tile-label">ROLL NUMBER</span>
          <span class="data-tile-value font-mono font-bold text-accent">${escapeHtml(studentProfile.rollNumber)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">ADMISSION NO.</span>
          <span class="data-tile-value font-mono">${escapeHtml(studentProfile.admissionNo)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">ADMISSION YEAR</span>
          <span class="data-tile-value">${escapeHtml(studentProfile.admissionYear)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">STUDENT STATUS</span>
          <span class="data-tile-value"><span class="badge-status-active"><span class="status-live-dot"></span>${escapeHtml(studentProfile.studentStatus)}</span></span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">DEGREE & STREAM</span>
          <span class="data-tile-value">${escapeHtml(studentProfile.degree)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">DEPARTMENT</span>
          <span class="data-tile-value font-medium">${escapeHtml(studentProfile.department)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">SEMESTER</span>
          <span class="data-tile-value font-semibold">${escapeHtml(studentProfile.semester)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">SECTION</span>
          <span class="data-tile-value font-semibold">${escapeHtml(studentProfile.section)}</span>
        </div>
        <div class="data-tile data-tile-span-2">
          <span class="data-tile-label">COURSE PROGRAM</span>
          <span class="data-tile-value font-semibold text-accent">${escapeHtml(studentProfile.courseName)}</span>
        </div>
        <div class="data-tile data-tile-span-2">
          <span class="data-tile-label">INSTITUTION</span>
          <span class="data-tile-value">${escapeHtml(studentProfile.collegeName)}</span>
        </div>
      `;
    } else {
      primaryDetailsContainer.innerHTML = `
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editRollNumber">ROLL NUMBER</label>
          <input type="text" id="editRollNumber" class="modern-profile-input font-mono" value="${escapeHtml(studentProfile.rollNumber)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editAdmissionNo">ADMISSION NO.</label>
          <input type="text" id="editAdmissionNo" class="modern-profile-input font-mono" value="${escapeHtml(studentProfile.admissionNo)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editAdmissionYear">ADMISSION YEAR</label>
          <input type="text" id="editAdmissionYear" class="modern-profile-input" value="${escapeHtml(studentProfile.admissionYear)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editStudentStatus">STUDENT STATUS</label>
          <input type="text" id="editStudentStatus" class="modern-profile-input" value="${escapeHtml(studentProfile.studentStatus)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editDegree">DEGREE & STREAM</label>
          <input type="text" id="editDegree" class="modern-profile-input" value="${escapeHtml(studentProfile.degree)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editDepartment">DEPARTMENT</label>
          <input type="text" id="editDepartment" class="modern-profile-input" value="${escapeHtml(studentProfile.department)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editSemester">SEMESTER</label>
          <input type="text" id="editSemester" class="modern-profile-input" value="${escapeHtml(studentProfile.semester)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editSection">SECTION</label>
          <input type="text" id="editSection" class="modern-profile-input" value="${escapeHtml(studentProfile.section)}" />
        </div>
        <div class="data-tile data-tile-editing data-tile-span-2">
          <label class="data-tile-label" for="editCourseName">COURSE PROGRAM</label>
          <input type="text" id="editCourseName" class="modern-profile-input" value="${escapeHtml(studentProfile.courseName)}" />
        </div>
        <div class="data-tile data-tile-editing data-tile-span-2">
          <label class="data-tile-label" for="editCollegeName">INSTITUTION</label>
          <input type="text" id="editCollegeName" class="modern-profile-input" value="${escapeHtml(studentProfile.collegeName)}" />
        </div>
      `;
    }
  }

  // Personal & Contact Section Container (Modern Data Grid)
  const personalInfoContainer = document.getElementById('personalInfoDetailsContainer');
  if (personalInfoContainer) {
    if (!isEditingProfile) {
      personalInfoContainer.innerHTML = `
        <div class="data-tile">
          <span class="data-tile-label">FIRST NAME</span>
          <span class="data-tile-value font-semibold">${escapeHtml(studentProfile.firstName)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">LAST NAME</span>
          <span class="data-tile-value font-semibold">${escapeHtml(studentProfile.lastName)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">DATE OF BIRTH</span>
          <span class="data-tile-value">${escapeHtml(studentProfile.dob)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">AGE</span>
          <span class="data-tile-value">${escapeHtml(studentProfile.age)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">GENDER</span>
          <span class="data-tile-value">${escapeHtml(studentProfile.gender)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">FATHER'S NAME</span>
          <span class="data-tile-value font-medium">${escapeHtml(studentProfile.fatherName)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">MOTHER'S NAME</span>
          <span class="data-tile-value font-medium">${escapeHtml(studentProfile.motherName)}</span>
        </div>
        <div class="data-tile data-tile-span-2">
          <span class="data-tile-label">PERMANENT ADDRESS</span>
          <span class="data-tile-value">${escapeHtml(studentProfile.address)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">CITY</span>
          <span class="data-tile-value font-medium">${escapeHtml(studentProfile.city)}</span>
        </div>
        <div class="data-tile">
          <span class="data-tile-label">STATE</span>
          <span class="data-tile-value font-medium">${escapeHtml(studentProfile.state)}</span>
        </div>
      `;
    } else {
      personalInfoContainer.innerHTML = `
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editFirstName">FIRST NAME</label>
          <input type="text" id="editFirstName" class="modern-profile-input" value="${escapeHtml(studentProfile.firstName)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editLastName">LAST NAME</label>
          <input type="text" id="editLastName" class="modern-profile-input" value="${escapeHtml(studentProfile.lastName)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editDob">DATE OF BIRTH</label>
          <input type="text" id="editDob" class="modern-profile-input" value="${escapeHtml(studentProfile.dob)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editAge">AGE</label>
          <input type="text" id="editAge" class="modern-profile-input" value="${escapeHtml(studentProfile.age)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editGender">GENDER</label>
          <input type="text" id="editGender" class="modern-profile-input" value="${escapeHtml(studentProfile.gender)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editFatherName">FATHER'S NAME</label>
          <input type="text" id="editFatherName" class="modern-profile-input" value="${escapeHtml(studentProfile.fatherName)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editMotherName">MOTHER'S NAME</label>
          <input type="text" id="editMotherName" class="modern-profile-input" value="${escapeHtml(studentProfile.motherName)}" />
        </div>
        <div class="data-tile data-tile-editing data-tile-span-2">
          <label class="data-tile-label" for="editAddress">PERMANENT ADDRESS</label>
          <input type="text" id="editAddress" class="modern-profile-input" value="${escapeHtml(studentProfile.address)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editCity">CITY</label>
          <input type="text" id="editCity" class="modern-profile-input" value="${escapeHtml(studentProfile.city)}" />
        </div>
        <div class="data-tile data-tile-editing">
          <label class="data-tile-label" for="editState">STATE</label>
          <input type="text" id="editState" class="modern-profile-input" value="${escapeHtml(studentProfile.state)}" />
        </div>
      `;
    }
  }
}

/**
 * Handle Save Profile
 */
function handleSaveProfile() {
  const getVal = (id, fallback) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : fallback;
  };

  studentProfile.studentStatus = getVal('editStudentStatus', studentProfile.studentStatus);
  studentProfile.admissionNo = getVal('editAdmissionNo', studentProfile.admissionNo);
  studentProfile.admissionYear = getVal('editAdmissionYear', studentProfile.admissionYear);
  studentProfile.rollNumber = getVal('editRollNumber', studentProfile.rollNumber);
  studentProfile.degree = getVal('editDegree', studentProfile.degree);
  studentProfile.department = getVal('editDepartment', studentProfile.department);
  studentProfile.semester = getVal('editSemester', studentProfile.semester);
  studentProfile.section = getVal('editSection', studentProfile.section);
  studentProfile.courseName = getVal('editCourseName', studentProfile.courseName);
  studentProfile.collegeName = getVal('editCollegeName', studentProfile.collegeName);

  studentProfile.firstName = getVal('editFirstName', studentProfile.firstName);
  studentProfile.lastName = getVal('editLastName', studentProfile.lastName);
  studentProfile.dob = getVal('editDob', studentProfile.dob);
  studentProfile.age = getVal('editAge', studentProfile.age);
  studentProfile.gender = getVal('editGender', studentProfile.gender);
  studentProfile.fatherName = getVal('editFatherName', studentProfile.fatherName);
  studentProfile.motherName = getVal('editMotherName', studentProfile.motherName);
  studentProfile.address = getVal('editAddress', studentProfile.address);
  studentProfile.city = getVal('editCity', studentProfile.city);
  studentProfile.state = getVal('editState', studentProfile.state);

  const updatedFullName = `${studentProfile.firstName} ${studentProfile.lastName}`.trim();
  if (updatedFullName) {
    studentProfile.fullName = updatedFullName;
  }

  isEditingProfile = false;
  renderStudentProfile();
  renderHomeSummary();
  showProfileAlert("Profile updated successfully.");
}

/**
 * Module 2: Render Academic Performance & Exact Marks Tables
 */
function renderAcademicPerformance() {
  const semesters = academicData.semesters;
  const sem1 = semesters[0];
  const sem2 = semesters[1];
  const sem3 = semesters[2];
  const sem4 = semesters[3];

  const sem1Stats = calculateSemesterSummary(sem1.subjects);
  const sem2Stats = calculateSemesterSummary(sem2.subjects);
  const sem3Stats = calculateSemesterSummary(sem3.subjects);
  const sem4Stats = calculateSemesterSummary(sem4.subjects);

  const year1Stats = calculateYearlySummary([sem1, sem2]);
  const year2Stats = calculateYearlySummary([sem3, sem4]);
  const overallStats = calculateOverallPerformance(semesters);

  // Top Academic Summary Cards (Dynamically calculated from existing Semester 1–4 data)
  const academicTotalSubjects = document.getElementById('academicTotalSubjects');
  if (academicTotalSubjects) academicTotalSubjects.textContent = overallStats.totalSubjects;

  const academicOverallPct = document.getElementById('academicOverallPct');
  if (academicOverallPct) academicOverallPct.textContent = `${overallStats.overallPercentage}%`;

  const academicTotalCredits = document.getElementById('academicTotalCredits');
  if (academicTotalCredits) academicTotalCredits.textContent = overallStats.totalCreditsCompleted;

  const academicPassedSubjects = document.getElementById('academicPassedSubjects');
  if (academicPassedSubjects) academicPassedSubjects.textContent = overallStats.passedSubjects;

  // Bar Chart Comparison
  const chartContainer = document.getElementById('semesterBarChart');
  if (chartContainer) {
    const semData = [
      { name: "Sem 1", pct: sem1Stats.percentage },
      { name: "Sem 2", pct: sem2Stats.percentage },
      { name: "Sem 3", pct: sem3Stats.percentage },
      { name: "Sem 4", pct: sem4Stats.percentage }
    ];

    chartContainer.innerHTML = semData.map(item => `
      <div class="bar-column">
        <span class="bar-data-label">${item.pct}%</span>
        <div class="bar-fill-track">
          <div class="bar-fill-value" style="height: ${item.pct}%;" title="${item.name}: ${item.pct}%"></div>
        </div>
        <span class="bar-axis-label">${item.name}</span>
      </div>
    `).join('');
  }

  // Year 1 Performance Card
  const year1Card = document.getElementById('year1PerformanceCard');
  if (year1Card) {
    year1Card.innerHTML = `
      <div class="year-card-header">
        <h3>First Year Performance (Sem 1 & 2)</h3>
        <span class="badge-tag">Year 1</span>
      </div>
      <div class="info-list">
        <div class="info-item">
          <span class="info-label">Semester 1 Percentage</span>
          <span class="info-value font-bold">${sem1Stats.percentage}%</span>
        </div>
        <div class="info-item">
          <span class="info-label">Semester 2 Percentage</span>
          <span class="info-value font-bold">${sem2Stats.percentage}%</span>
        </div>
        <div class="info-item">
          <span class="info-label">First Year Overall Percentage</span>
          <span class="info-value font-bold text-theme-dark">${year1Stats.percentage}%</span>
        </div>
        <div class="info-item">
          <span class="info-label">First Year Marks Obtained</span>
          <span class="info-value">${year1Stats.totalObtained} / ${year1Stats.totalMax}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Credits Completed</span>
          <span class="info-value font-bold">${year1Stats.totalCredits} / 44</span>
        </div>
      </div>
    `;
  }

  // Year 2 Performance Card
  const year2Card = document.getElementById('year2PerformanceCard');
  if (year2Card) {
    year2Card.innerHTML = `
      <div class="year-card-header">
        <h3>Second Year Performance (Sem 3 & 4)</h3>
        <span class="badge-tag">Year 2</span>
      </div>
      <div class="info-list">
        <div class="info-item">
          <span class="info-label">Semester 3 Percentage</span>
          <span class="info-value font-bold">${sem3Stats.percentage}%</span>
        </div>
        <div class="info-item">
          <span class="info-label">Semester 4 Percentage</span>
          <span class="info-value font-bold">${sem4Stats.percentage}%</span>
        </div>
        <div class="info-item">
          <span class="info-label">Second Year Overall Percentage</span>
          <span class="info-value font-bold text-theme-dark">${year2Stats.percentage}%</span>
        </div>
        <div class="info-item">
          <span class="info-label">Second Year Marks Obtained</span>
          <span class="info-value">${year2Stats.totalObtained} / ${year2Stats.totalMax}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Credits Completed</span>
          <span class="info-value font-bold">${year2Stats.totalCredits} / 45</span>
        </div>
      </div>
    `;
  }

  // Render Detailed Semester Marks Tables with exact requested columns
  renderSemesterTables(semesters);
}

/**
 * Render Detailed Semester Tables
 * Columns: Semester, Course Code, Course Name, Internal Assessment Mark, External Assessment Mark, Final Assessment Mark, Credit, Grade Point, Grade, Result Status
 * Includes Download button below each semester's marks table
 */
function renderSemesterTables(semesters) {
  const container = document.getElementById('semesterTablesContainer');
  if (!container) return;

  container.innerHTML = semesters.map((sem) => {
    const stats = calculateSemesterSummary(sem.subjects);

    const rowsHtml = sem.subjects.map(subj => {
      const isPass = subj.status.toLowerCase() === "pass";
      const resultBadge = isPass 
        ? `<span class="status-badge-pass">Pass</span>` 
        : `<span class="status-badge-fail">Fail</span>`;

      return `
        <tr>
          <td class="font-medium whitespace-nowrap">${sem.semesterCode}</td>
          <td><span class="code-badge">${subj.code}</span></td>
          <td class="course-name-cell">${subj.name}</td>
          <td class="text-center font-mono">${subj.internal}</td>
          <td class="text-center font-mono">${subj.external}</td>
          <td class="text-center font-mono font-bold">${subj.final}</td>
          <td class="text-center">${subj.credit}</td>
          <td class="text-center font-mono font-bold">${subj.gradePoint}</td>
          <td class="text-center font-bold">${subj.grade}</td>
          <td class="text-center">${resultBadge}</td>
        </tr>
      `;
    }).join('');

    return `
      <div class="semester-block" id="block-${sem.id}">
        <div class="semester-block-header">
          <div class="semester-title-group">
            <span class="semester-pill-badge">${sem.semesterCode}</span>
            <h3 class="semester-name-title">${sem.name}</h3>
          </div>
          <div class="semester-header-badges">
            <span class="badge-tag">Credit Reg: <strong>${sem.creditsRegistered}</strong></span>
            <span class="badge-tag">Credit Comp: <strong>${sem.creditsCompleted}</strong></span>
            <span class="badge-tag badge-percentage-accent">Percentage: <strong>${stats.percentage}%</strong></span>
          </div>
        </div>

        <div class="table-responsive">
          <table class="marks-table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th class="text-center">Internal Assessment Mark</th>
                <th class="text-center">External Assessment Mark</th>
                <th class="text-center">Final Assessment Mark</th>
                <th class="text-center">Credit</th>
                <th class="text-center">Grade Point</th>
                <th class="text-center">Grade</th>
                <th class="text-center">Result Status</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>

        <!-- Download option for each semester -->
        <div class="semester-download-bar">
          <button type="button" class="btn-download-semester" data-sem-id="${sem.id}" title="Download ${sem.name} marks as CSV">
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download ${sem.name} Marks
          </button>
        </div>

        <div class="semester-calc-footer">
          <div class="calc-metric-tile">
            <div class="tile-val">${stats.totalMax}</div>
            <div class="tile-lbl">Total Max Final Marks</div>
          </div>
          <div class="calc-metric-tile">
            <div class="tile-val">${stats.totalObtained}</div>
            <div class="tile-lbl">Final Marks Obtained</div>
          </div>
          <div class="calc-metric-tile">
            <div class="tile-val text-theme-dark font-bold">${stats.percentage}%</div>
            <div class="tile-lbl">Semester Percentage</div>
          </div>
          <div class="calc-metric-tile">
            <div class="tile-val">${sem.creditsCompleted}</div>
            <div class="tile-lbl">Credits Completed</div>
          </div>
          <div class="calc-metric-tile">
            <div class="tile-val text-theme-primary font-bold">${stats.passedCount} / ${stats.subjectCount}</div>
            <div class="tile-lbl">Passed Subjects</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Initialize event listener for downloading semester marks
 */
function initSemesterDownloads() {
  const container = document.getElementById('semesterTablesContainer');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-download-semester');
    if (btn) {
      const semId = btn.getAttribute('data-sem-id');
      if (semId) {
        downloadSemesterMarks(semId);
      }
    }
  });
}

/**
 * Generate and download CSV containing requested columns for a specific semester
 * Fields:
 * Student Name, Roll Number, Course, Semester, Course Code, Course Name,
 * Internal Assessment Mark, External Assessment Mark, Final Assessment Mark,
 * Credit, Grade Point, Grade, Result Status, Credit Registered, Credit Completed
 */
function downloadSemesterMarks(semId) {
  const sem = academicData.semesters.find(s => s.id === semId);
  if (!sem) return;

  const headers = [
    "Student Name",
    "Roll Number",
    "Course",
    "Semester",
    "Course Code",
    "Course Name",
    "Internal Assessment Mark",
    "External Assessment Mark",
    "Final Assessment Mark",
    "Credit",
    "Grade Point",
    "Grade",
    "Result Status",
    "Credit Registered",
    "Credit Completed"
  ];

  const csvRows = [];
  csvRows.push(headers.map(h => `"${h}"`).join(','));

  sem.subjects.forEach(subj => {
    const row = [
      `"${studentProfile.fullName}"`,
      `"${studentProfile.rollNumber}"`,
      `"${studentProfile.courseName}"`,
      `"${sem.name}"`,
      `"${subj.code}"`,
      `"${subj.name.replace(/"/g, '""')}"`,
      `"${subj.internal}"`,
      `"${subj.external}"`,
      `"${subj.final}"`,
      `"${subj.credit}"`,
      `"${subj.gradePoint}"`,
      `"${subj.grade}"`,
      `"${subj.status}"`,
      `"${sem.creditsRegistered}"`,
      `"${sem.creditsCompleted}"`
    ];
    csvRows.push(row.join(','));
  });

  // UTF-8 BOM for Microsoft Excel compatibility
  const csvContent = "\uFEFF" + csvRows.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const safeStudent = studentProfile.fullName.replace(/\s+/g, '_');
  const safeSem = sem.name.replace(/\s+/g, '_');
  link.setAttribute('href', url);
  link.setAttribute('download', `${safeStudent}_${studentProfile.rollNumber}_${safeSem}_Marks.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Module 3: Render Transport (Bike Commute & Route Sequence)
 */
function renderPersonalTransport() {
  const summaryContainer = document.getElementById('transportSummaryCard');
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="transport-card-header">
        <div>
          <h3 class="transport-card-title">Daily Transport Summary</h3>
          <p class="transport-card-sub">${escapeHtml(transportData.startingPoint)} &rarr; ${escapeHtml(transportData.destination)}</p>
        </div>
        <span class="transport-card-tag">${escapeHtml(transportData.transportMode)} Commute</span>
      </div>

      <div class="transport-summary-grid">
        <div class="transport-summary-tile">
          <span class="summary-tile-label">Transport Mode</span>
          <span class="summary-tile-value font-bold text-theme-dark">${escapeHtml(transportData.transportMode)}</span>
          <span class="summary-tile-sub">Personal Vehicle</span>
        </div>
        <div class="transport-summary-tile">
          <span class="summary-tile-label">Total Distance</span>
          <span class="summary-tile-value font-bold text-theme-primary">${escapeHtml(transportData.distanceCovered)}</span>
          <span class="summary-tile-sub">Direct Route</span>
        </div>
        <div class="transport-summary-tile">
          <span class="summary-tile-label">Duration</span>
          <span class="summary-tile-value font-bold">${escapeHtml(transportData.approximateDuration)}</span>
          <span class="summary-tile-sub">Average Commute</span>
        </div>
        <div class="transport-summary-tile highlight-commute-time">
          <span class="summary-tile-label">Schedule Window</span>
          <span class="summary-tile-value font-mono font-bold text-theme-dark">${escapeHtml(transportData.departureTime)} &rarr; ${escapeHtml(transportData.expectedArrivalTime)}</span>
          <span class="summary-tile-sub">Departure to Arrival</span>
        </div>
      </div>
    `;
  }

  // Route Sequence Timeline Container (Below Summary)
  const timelineContainer = document.getElementById('routeTimelineContainer');
  if (timelineContainer) {
    const stepsHtml = transportData.routeSequence.map((step, idx) => {
      const isLast = idx === transportData.routeSequence.length - 1;
      const descHtml = step.description 
        ? `<p class="timeline-point-desc">${escapeHtml(step.description)}</p>` 
        : '';

      return `
        <div class="timeline-item ${isLast ? 'timeline-item-last' : ''}">
          <div class="timeline-marker-col">
            <div class="timeline-num-circle">${escapeHtml(step.stepNumber)}</div>
            ${!isLast ? '<div class="timeline-stem-line" aria-hidden="true"></div>' : ''}
          </div>
          <div class="timeline-body-col">
            <div class="timeline-point-header">
              <h4 class="timeline-point-name">${escapeHtml(step.locationName)}</h4>
              <span class="timeline-point-time">${escapeHtml(step.time)}</span>
            </div>
            ${descHtml}
          </div>
        </div>
      `;
    }).join('');

    timelineContainer.innerHTML = `
      <div class="transport-card-header">
        <div>
          <h3 class="transport-card-title">Transport Sequence</h3>
          <p class="transport-card-sub">Step-by-step route progression from residence to campus</p>
        </div>
        <span class="transport-card-tag">Route Checkpoints</span>
      </div>
      <div class="modern-vertical-timeline">
        ${stepsHtml}
      </div>
    `;
  }
}
