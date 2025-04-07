const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const csrf = require("csurf");
const bodyParser = require('body-parser');  
const paperRoutes = require("./routes/paperRoutes");
const branchRoutes = require("./routes/branchRoutes");
const collegeRoutes = require("./routes/collegeRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const messageRoutes = require("./routes/messageRoutes");
const semesterRoutes = require("./routes/semesterRoutes");
const universityRoutes = require("./routes/universityRoutes");
const adminRoutes = require("./routes/adminRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const notificationallRoutes = require("./routes/notificationallRoutes");
const examPaperQuestionRoutes = require("./routes/examPaperQuestionRoutes");
const examPaperAnswerRoutes = require("./routes/examPaperAnswerRoutes");
const examPaperRoutes = require("./routes/examPaperRoutes");
const faqRoutes = require("./routes/faqRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Adjust origin as per frontend
app.use(express.json());
app.use(morgan("dev"));
app.use("/upload", express.static("uploads"));
app.use(cookieParser());
app.use(helmet());
app.use(csrf({ cookie: true })); // CSRF protection

// Routes
app.use("/api/papers", paperRoutes);
app.use("/api/branch", branchRoutes);
app.use("/api/college", collegeRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/favorite", favoriteRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/semester", semesterRoutes);
app.use("/api/university", universityRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/notification", notificationRoutes);
app.use("/api/notificationall", notificationallRoutes);
app.use("/api/examquestion", examPaperQuestionRoutes);
app.use("/api/examanswer", examPaperAnswerRoutes);
app.use("/api/exampaper", examPaperRoutes);
app.use("/api/faq", faqRoutes);
app.use("/auth", authRoutes);

module.exports = app;