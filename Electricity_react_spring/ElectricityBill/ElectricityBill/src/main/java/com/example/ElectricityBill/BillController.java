package com.example.ElectricityBill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BillController {

    @Autowired
    private BillCalculatorService billCalculatorService;

    @GetMapping("/calculate")
    public double calculateBill(@RequestParam int units) {
        return billCalculatorService.calculateBill(units);
    }
}
