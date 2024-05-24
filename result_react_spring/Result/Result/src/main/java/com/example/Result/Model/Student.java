package com.example.Result.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "students")
public class Student {
    @Id
    private String id;
    private String name;
    private int rollNo;
    private List<Subject> subjects;

    // Getters and setters for Student fields
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }

    public List<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<Subject> subjects) {
        this.subjects = subjects;
    }

    public static class Subject {
        private String subName;
        private int mse;
        private int ese;
        private int overall;
        private String grade;

        // Getters and setters for Subject fields
        public String getSubName() {
            return subName;
        }

        public void setSubName(String subName) {
            this.subName = subName;
        }

        public int getMse() {
            return mse;
        }

        public void setMse(int mse) {
            this.mse = mse;
        }

        public int getEse() {
            return ese;
        }

        public void setEse(int ese) {
            this.ese = ese;
        }

        public int getOverall() {
            return overall;
        }

        public void setOverall(int overall) {
            this.overall = overall;
        }

        public String getGrade() {
            return grade;
        }

        public void setGrade(String grade) {
            this.grade = grade;
        }
    }
}
