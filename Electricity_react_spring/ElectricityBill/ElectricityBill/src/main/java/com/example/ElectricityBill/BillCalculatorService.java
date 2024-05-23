package com.example.ElectricityBill;

import org.springframework.stereotype.Service;

@Service
public class BillCalculatorService {

    public double calculateBill(int units) {
        double fixedRate = 100.0;
        if (units < 100) {
            return fixedRate + units * 1.0;
        } else if (units < 200) {
            return fixedRate + units * 2.0;
        } else {
            return fixedRate + units * 3.0;
        }
    }
}
