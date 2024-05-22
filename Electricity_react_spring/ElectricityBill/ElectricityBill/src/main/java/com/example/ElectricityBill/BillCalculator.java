package com.example.ElectricityBill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BillCalculator {
    @Autowired
    private BillCalculatorService billCalculatorService;

    @GetMapping("/calculate")
    public double calculateBill(@RequestParam int units) {
        return billCalculatorService.calculateBill(units);
    }
}
