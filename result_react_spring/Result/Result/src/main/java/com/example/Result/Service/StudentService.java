package com.example.Result.Service;

import com.example.Result.Model.Student;
import com.example.Result.Repository.StudentRepository;
import com.example.Result.Controller.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student addStudent(Student student) {
        student.getSubjects().forEach(subject -> {
            subject.setOverall(subject.getMse() + subject.getEse());
            subject.setGrade(calculateGrade(subject.getOverall()));
        });
        return studentRepository.save(student);
    }

    private String calculateGrade(int marks) {
        if (marks >= 90) return "A";
        if (marks >= 80) return "B";
        if (marks >= 70) return "C";
        if (marks >= 60) return "D";
        return "F";
    }
}
