package org.example.inventoryservice.service;

import org.example.inventoryservice.entity.Product;

import java.util.List;

public interface ProductService {
    Product addProduct(Product product);
    List<Product> getAll();
    Product getById(String id);
    Product updateProduct(Product product);
    void deleteProduct(String id);
}
