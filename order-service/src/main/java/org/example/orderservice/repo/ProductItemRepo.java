package org.example.orderservice.repo;

import org.example.orderservice.entity.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductItemRepo extends JpaRepository<ProductItem, Long> {
}
