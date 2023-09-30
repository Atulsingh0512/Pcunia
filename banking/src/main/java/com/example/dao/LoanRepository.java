package com.example.dao;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.model.Loan;

@Repository
public interface LoanRepository extends JpaRepository<Loan,Integer> {
  Loan findByloanId(int loanId);
}
