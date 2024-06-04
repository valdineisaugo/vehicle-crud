package com.example.vehiclecrud.produto;

import com.example.vehiclecrud.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
