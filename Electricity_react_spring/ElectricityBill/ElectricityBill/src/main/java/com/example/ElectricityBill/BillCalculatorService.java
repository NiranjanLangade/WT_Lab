package com.example.ElectricityBill;

import org.springframework.stereotype.Service;

@Service
public class BillCalculatorService {
    public double calculateBill(int units) {
        double fixedAmt = 100.0;
        double rate;
        if (units < 100) {
            return 200.0;
        } else if (units < 200) {
            rate = 2.0;
        } else {
            rate = 3.0;
        }
        return fixedAmt + (units * rate);
    }
}
