package org.example.inventoryservice.service;

import org.example.inventoryservice.entity.Product;
import org.example.inventoryservice.repo.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductServiceImpl01 implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl01(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public Product getById(String id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(String id) {
        Product product = productRepository.findById(id).get();
        productRepository.delete(product);
    }
}
